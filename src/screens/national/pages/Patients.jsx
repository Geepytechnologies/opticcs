import React, { useEffect, useState } from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineFileSearch,
} from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi2";
import axiosInstance from "../../../utils/axios";
import Filterbox from "../../../components/Filterbox";
import Pagination from "../../../components/Pagination";
import moment from "moment";
import Notfound from "../../../components/Notfound";
import Patientview from "../components/Patientview";
import { useNavigate } from "react-router-dom";
import { downloadTable } from "../../../utils/helpers";
import { useRef } from "react";
import { MdDelete, MdDeleteOutline } from "react-icons/md";

const Patients = () => {
  //filter
  const [selectedDateTo, setSelectedDateTo] = useState();
  const [selectedDateFrom, setSelectedDateFrom] = useState();
  const filterdata = ["all", "firstname", "state", "lga", "HealthFacility"];
  const [filter, setFilter] = useState(filterdata[0]);
  const [searchitem, setSearchitem] = useState({
    state: "all",
    lga: "all",
    healthFacility: "all",
    datefrom: "",
    dateto: "",
  });

  //
  const [patients, setPatients] = useState();
  const [totalpatients, setTotalPatients] = useState();
  const [isActive, setIsActive] = useState(1);
  const [currentpage, setCurrentpage] = useState({
    value: 1,
    isPagination: false,
  });

  const getIndicatordata = async () => {
    try {
      const res = await axiosInstance.get("/admin/national/data/general");
      setData(res.data);
    } catch (error) {}
  };
  useEffect(() => {
    getIndicatordata();
  }, []);

  const getAllPatients = async () => {
    try {
      const res = await axiosInstance.get(
        `/patients/findwithworkers?page=${currentpage.value}`
      );
      const result = res.data.result;
      setPatients(result);
      setTotalPatients(res.data.count);
    } catch (err) {}
  };
  const getAllPatientsForState = async () => {
    try {
      const res = await axiosInstance.get(
        `/patients/findwithworkers?page=${currentpage.value}&state=${searchitem.state}`
      );
      const result = res.data.result;
      setPatients(result);
      setTotalPatients(res.data.count);
    } catch (err) {}
  };
  const getAllPatientsForLga = async () => {
    try {
      const res = await axiosInstance.get(
        `/patients/findwithworkers?page=${currentpage.value}&lga=${searchitem.lga}`
      );
      const result = res.data.result;
      setPatients(result);
      setTotalPatients(res.data.count);
    } catch (err) {}
  };
  const getAllPatientsForHealthfacility = async () => {
    try {
      const res = await axiosInstance.get(
        `/patients/findwithworkers?page=${currentpage.value}&healthfacility=${searchitem.healthFacility}`
      );
      const result = res.data.result;
      setPatients(result);
      setTotalPatients(res.data.count);
    } catch (err) {}
  };
  useEffect(() => {
    if (
      searchitem.state == "all" &&
      searchitem.datefrom == "" &&
      searchitem.dateto
    ) {
      getAllPatients();
    }
    if (
      searchitem.state !== "all" &&
      searchitem.datefrom == "" &&
      searchitem.dateto == ""
    ) {
      getAllPatientsForState();
    }
    if (
      searchitem.lga !== "all" &&
      searchitem.datefrom == "" &&
      searchitem.dateto == ""
    ) {
      getAllPatientsForLga();
    }
    if (
      searchitem.healthFacility !== "" &&
      searchitem.datefrom == "" &&
      searchitem.dateto == ""
    ) {
      getAllPatientsForHealthfacility();
    }
    if (
      searchitem.healthFacility == "all" &&
      searchitem.lga == "all" &&
      searchitem.state == "all" &&
      searchitem.datefrom == "" &&
      searchitem.dateto == ""
    ) {
      getAllPatients();
    }
  }, [currentpage.value, searchitem]);
  // console.log(patients);
  // const filterPatients = (patients, searchitem, filter) => {
  //   if (!patients) return [];
  //   let filteredpage;
  //   if (searchitem && selectedDateFrom && selectedDateTo) {
  //     filteredpage = patients.filter(
  //       (item) =>
  //         item[filter].toLowerCase().includes(searchitem.toLowerCase()) &&
  //         new Date(item.createdat).getTime() >=
  //           new Date(selectedDateFrom).getTime() &&
  //         new Date(item.createdat).getTime() <=
  //           new Date(selectedDateTo).getTime()
  //     );
  //     return filteredpage;
  //   } else if (searchitem) {
  //     filteredpage = patients.filter((item) =>
  //       item[filter].toLowerCase().includes(searchitem.toLowerCase())
  //     );
  //     return filteredpage;
  //   } else if (selectedDateFrom && selectedDateTo) {
  //     filteredpage = patients.filter(
  //       (item) =>
  //         new Date(item.createdat).getTime() >=
  //           new Date(selectedDateFrom).getTime() &&
  //         new Date(item.createdat).getTime() <=
  //           new Date(selectedDateTo).getTime()
  //     );
  //     return filteredpage;
  //   } else {
  //     return patients;
  //   }
  // };
  // const filteredPatients = filterPatients(patients, searchitem, filter);

  const navigate = useNavigate();

  const handleItemClick = (itemId) => {
    navigate(`/national/patients/${itemId}`);
  };

  const tableRef = useRef();
  return (
    <div>
      <div className="bg-primary10 flex flex-col min-h-screen">
        {/* dashboard */}
        <div className="flex w-full items-center justify-between px-3 py-3">
          <div className="flex gap-2 items-center p-2">
            <HiOutlineUserGroup />
            <p className="text-secondary400 text-[18px] font-[600]">Patients</p>
          </div>
          {/* <div className='flex gap-2 justify-end'>
                        <input className='outline-0 bg-transparent text-[14px] font-[400] rounded-[8px] border-secondary30 border p-2' placeholder="Patient, or SPHC or CLGA" />
                        <button className="bg-primary90 p-2 text-light10 rounded-[8px]">Search</button>
                    </div> */}
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
        <div className="pl-6">
          {/* download csv */}
          <button
            onClick={() => downloadTable(tableRef, "Patients")}
            className="bg-primary90 rounded-[8px] text-light10 text-[14px] p-2"
          >
            Download CSV
          </button>
        </div>
        {/* patients table */}
        <div className="w-full flex-1 flex items-center justify-center font-inter my-5">
          <div className="bg-white min-h-[500px] w-[95%] flex flex-col items-center justify-between pl-6 py-4">
            <table ref={tableRef} className="cursor-default w-full">
              <thead>
                <tr>
                  <th>SN</th>
                  <th>Patient Name</th>
                  <th>Patient ID</th>
                  <th>State</th>
                  <th>LGA</th>
                  <th>Health Facility</th>
                  <th>Last Visit</th>
                </tr>
              </thead>
              <tbody>
                {patients?.map((item, index) => (
                  <tr
                    onClick={() => handleItemClick(item.id)}
                    key={item.id}
                    className="hover:bg-[#e5e5e5] text-[#636363] h-[50px]"
                  >
                    <td>
                      {currentpage.value == 1
                        ? index + 1
                        : 20 * currentpage.value + (index + 1) - 20}
                    </td>
                    <td>{item.firstname}</td>
                    <td>{item.id}</td>
                    <td>{item.state}</td>
                    <td>{item.lga}</td>
                    <td>{item.healthFacility}</td>
                    <td>{moment(item.last_visit).fromNow()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {!patients?.length && <Notfound />}
            {/* pagination */}
            <Pagination
              currentpage={currentpage.value}
              setCurrentpage={setCurrentpage}
              displaynum={10}
              pages={totalpatients / 20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patients;
