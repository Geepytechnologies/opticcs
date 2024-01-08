import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";
import Pagination from "../../../components/Pagination";
import Filterbox from "../../../components/Filterbox";
import moment from "moment";
import axiosInstance from "../../../utils/axios";

const State = () => {
  //filter
  const [selectedDateTo, setSelectedDateTo] = useState();
  const [selectedDateFrom, setSelectedDateFrom] = useState();
  const filterdata = ["stateid"];
  const [filter, setFilter] = useState(filterdata[0]);
  const [searchitem, setSearchitem] = useState();
  //pagination
  const [currentpage, setCurrentpage] = useState(1);
  // page state
  const [states, setStates] = useState();
  const array = [1, 2, 3, 4];
  const getAllStates = async () => {
    try {
      const res = await axiosInstance.get("/admin/state/find");
      setStates(res.data.result);
    } catch (error) {}
  };
  useEffect(() => {
    getAllStates();
  }, []);
  const filterstates = (states, searchitem, filter) => {
    if (!states) return []; // Return an empty array if patients is falsy

    if (searchitem && selectedDateFrom && selectedDateTo) {
      return states.filter(
        (item) =>
          item[filter].toLowerCase().includes(searchitem.toLowerCase()) &&
          new Date(item.createdat).getTime() >=
            new Date(selectedDateFrom).getTime() &&
          new Date(item.createdat).getTime() <=
            new Date(selectedDateTo).getTime()
      );
    } else if (searchitem) {
      return states.filter((item) =>
        item[filter].toLowerCase().includes(searchitem.toLowerCase())
      );
    } else if (selectedDateFrom && selectedDateTo) {
      return states.filter(
        (item) =>
          new Date(item.createdat).getTime() >=
            new Date(selectedDateFrom).getTime() &&
          new Date(item.createdat).getTime() <=
            new Date(selectedDateTo).getTime()
      );
    } else {
      return states;
    }
  };
  const filteredStates = filterstates(states, searchitem, filter);
  return (
    <div>
      <div className="bg-primary10">
        {/* dashboard */}
        <div className="flex w-full items-center justify-between px-3 py-3">
          <div className="flex gap-2 items-center p-2">
            <CgNotes />
            <p className="text-secondary400 text-[18px] font-[600]">State</p>
          </div>
          <div className="flex gap-2 justify-end">
            <input
              className="outline-0 bg-transparent text-[14px] font-[400] rounded-[8px] border-secondary30 border p-2"
              placeholder="Patient, or SPHC or CLGA"
            />
            <button className="bg-primary90 p-2 text-light10 rounded-[8px]">
              Search
            </button>
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
        {/* patients table */}
        <div className="w-full flex items-center justify-center font-inter my-5">
          <div className="bg-white w-[95%] flex flex-col items-center justify-start pl-6 py-4">
            <table className="cursor-default w-full">
              <tr>
                <th>SN</th>
                <th>State Board Name</th>
                <th>State ID</th>
                <th>Address</th>
                <th>Date Created</th>
                <th>Actions</th>
              </tr>
              {states
                ? (searchitem || (selectedDateTo && selectedDateFrom)
                    ? filteredStates
                    : states
                  ).map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-[#e5e5e5] text-[#636363] h-[50px]"
                    >
                      <td>{index + 1}</td>
                      <td>{item.boardname}</td>
                      <td>{item.stateid}</td>
                      <td>{item.officeaddress}</td>
                      <td>{moment(item.createdat).fromNow()}</td>
                      {/* <td className='text-primary90'>Message</td> */}
                      <td className="text-[#B02A37]">Deactivate</td>
                    </tr>
                  ))
                : null}
            </table>
            {/* pagination */}
            <Pagination
              currentpage={currentpage}
              setCurrentpage={setCurrentpage}
              pages={
                states?.length / 10 ||
                (filteredStates && filteredStates?.length / 10)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default State;
