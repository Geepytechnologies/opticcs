import React, { useState, useEffect, useRef } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import axiosInstance from "../../../utils/axios";
import moment from "moment";
import Pagination from "../../../components/Pagination";
import Csvbutton from "../../../components/Csvbutton";
import { useGetActiveStates } from "../queries/enumeration";

const EnumerationStates = () => {
  const [states, setStates] = useState();
  const [isActive, setIsActive] = useState(1);
  //pagination
  const [currentpage, setCurrentpage] = useState(1);

  const tableRef = useRef();

  const { activeStates, isLoading } = useGetActiveStates();
  return (
    <div className="w-full ">
      <div className="flex gap-2 my-8 justify-start">
        <input
          className="outline-0 bg-transparent text-[14px] font-[400] rounded-[8px] border-secondary30 border p-2"
          placeholder="Name or ID"
        />
        <button className="bg-primary90 p-2 text-light10 rounded-[8px]">
          Search
        </button>
      </div>
      {/* download csv */}
      <Csvbutton tableRef={tableRef} tableName={"state list"} />

      <table ref={tableRef} className="cursor-default mt-7 w-full">
        <thead>
          <tr>
            <th>SN</th>
            <th>State</th>
            <th>Lga</th>
            <th>Ward</th>
            <th>Settlement</th>
            <th>Date Created</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {activeStates?.length > 0 ? (
            activeStates.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-[#e5e5e5] text-[#636363] h-[50px]"
              >
                <td>{item.id}</td>
                <td>{item.state}</td>
                <td>{item.stateid}</td>
                <td>{item.officeaddress}</td>
                <td>{moment(item.createdat).fromNow()}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td className={item.status ? "text-red-500" : "text-primary90"}>
                  {item.status ? "Deactivate" : "Activate"}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">
                <div className="flex items-center justify-center w-full p-10">
                  <span className="text-primary70 font-medium">No Records</span>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {/* pagination */}
      <Pagination
        currentpage={currentpage}
        setCurrentpage={setCurrentpage}
        pages={states?.length / 10}
        displaynum={10}
      />
    </div>
  );
};

export default EnumerationStates;
