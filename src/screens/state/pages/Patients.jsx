import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi2";
import Filterbox from "../../../components/Filterbox";
import axiosInstance from "../../../utils/axios";
import Pagination from "../../../components/Pagination";
import moment from "moment";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Csvbutton } from "../../../components/Csvbutton";
import { useRef } from "react";

const Patients = () => {
  const { stateAuth } = useAuth();
  const { state } = stateAuth.others;
  //filter
  const [selectedDateTo, setSelectedDateTo] = useState();
  const [selectedDateFrom, setSelectedDateFrom] = useState();
  const filterdata = ["firstname", "state", "lga", "HealthFacility"];
  const [filter, setFilter] = useState(filterdata[0]);
  const [searchitem, setSearchitem] = useState();
  const formattedDateFrom = moment(selectedDateFrom).format("yyyy-MM-DD");
  const formattedDateTo = moment(selectedDateTo).format("yyyy-MM-DD");
  //
  const [patients, setPatients] = useState();
  const [isActive, setIsActive] = useState(1);
  const [currentpage, setCurrentpage] = useState(1);

  // if (new Date(patients && patients[0]?.createdat).getTime() > new Date(selectedDateFrom).getTime()) {
  //     console.log("greater")
  // } else {
  //     console.log("less than")
  // }
  const getAllPatients = async () => {
    try {
      const res = await axiosInstance.get("/patients/findwithworkers");
      const statepatients = res.data.result.filter(
        (obj) => obj.state.toLowerCase() == stateAuth.others.state.toLowerCase()
      );

      setPatients(statepatients);
    } catch (err) {}
  };
  useEffect(() => {
    getAllPatients();
  }, []);
  const filterPatients = (patients, searchitem, filter) => {
    if (!patients) return []; // Return an empty array if patients is falsy

    if (searchitem && selectedDateFrom && selectedDateTo) {
      return patients.filter(
        (item) =>
          item[filter].toLowerCase().includes(searchitem.toLowerCase()) &&
          new Date(item.createdat).getTime() >=
            new Date(selectedDateFrom).getTime() &&
          new Date(item.createdat).getTime() <=
            new Date(selectedDateTo).getTime()
      );
    } else if (searchitem) {
      return patients.filter((item) =>
        item[filter].toLowerCase().includes(searchitem.toLowerCase())
      );
    } else if (selectedDateFrom && selectedDateTo) {
      return patients.filter(
        (item) =>
          new Date(item.createdat).getTime() >=
            new Date(selectedDateFrom).getTime() &&
          new Date(item.createdat).getTime() <=
            new Date(selectedDateTo).getTime()
      );
    } else {
      return patients;
    }
  };
  const filteredPatients = filterPatients(patients, searchitem, filter);
  const navigate = useNavigate();
  const handleItemClick = (itemId) => {
    navigate(`/state/patients/${itemId}`);
  };
  const tableRef = useRef();
  return (
    <div>
      <div className="bg-primary10">
        {/* dashboard */}
        <div className="flex w-full items-center justify-between px-3 py-3">
          <div className="flex gap-2 items-center p-2">
            <HiOutlineUserGroup />
            <p className="text-secondary400 text-[18px] font-[600]">Patients</p>
          </div>
        </div>

        {/* selectbox1 */}
        <Filterbox
          filterdata={filterdata}
          selectedDateTo={selectedDateTo}
          setSearchitem={setSearchitem}
          setSelectedDateTo={setSelectedDateTo}
          selectedDateFrom={selectedDateFrom}
          setSelectedDateFrom={setSelectedDateFrom}
          setFilter={setFilter}
          filter={filter}
        />

        <Csvbutton tableRef={tableRef} tableName={"Patients"} />
        {/* patients table */}
        <div className="w-full flex items-center justify-center font-inter my-5">
          <div className="bg-white w-[95%] flex flex-col items-center justify-start pl-6 py-4">
            <table ref={tableRef} className="cursor-default w-full">
              <tr>
                <th>SN</th>
                <th>Patient Name</th>
                <th>Patient ID</th>
                <th>State</th>
                <th>LGA</th>
                <th>Health Facility</th>
                <th>Last Visit</th>
              </tr>
              {patients
                ? (searchitem || (selectedDateTo && selectedDateFrom)
                    ? filteredPatients
                    : patients
                  ).map((item, index) => (
                    <tr
                      key={index}
                      onClick={() => handleItemClick(item.id)}
                      className="hover:bg-[#e5e5e5] text-[#636363] h-[50px]"
                    >
                      <td>{index + 1}</td>
                      <td>{item.firstname}</td>
                      <td>{item.id}</td>
                      <td>{item.state}</td>
                      <td>{item.lga}</td>
                      <td>{item.healthFacility}</td>
                      <td>{moment(item.last_visit).fromNow()}</td>
                    </tr>
                  ))
                : null}
            </table>
            {/* pagination */}
            <Pagination
              currentpage={currentpage}
              setCurrentpage={setCurrentpage}
              pages={patients?.length / 10}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patients;
