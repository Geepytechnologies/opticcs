import React, { useEffect, useRef, useState } from "react";
import Notfound from "../../../components/Notfound";
import Pagination from "../../../components/Pagination";
import axiosInstance from "../../../utils/axios";

const Recordfirstvisit = () => {
  const [patientfirstvisits, setPatientfirstvisits] = useState();

  const headers = patientfirstvisits && Object.keys(patientfirstvisits[0]);
  const tableRef = useRef();
  const getAllPatientFirstVisits = async () => {
    try {
      const res = await axiosInstance.get("/patients/firstvisits/find");
      setPatientfirstvisits(res.data.result);
    } catch (error) {}
  };
  useEffect(() => {
    // getIndicatordata();
    getAllPatientFirstVisits();
  }, []);
  return (
    <div className="w-full flex items-center justify-center font-inter my-5">
      <div className="bg-white min-h-[500px] w-[1000px] overflow-x-auto pl-6  py-4">
        <div className="flex gap-4 items-center my-4">
          <p className="text-primary90 font-[600]">First Visit Records</p>
          {/* download csv */}
          <button
            onClick={() => downloadTable(tableRef, "First Visit list")}
            className="bg-primary90 rounded-[8px] text-light10 text-[14px] p-2"
          >
            Download CSV
          </button>
        </div>
        <table
          ref={tableRef}
          className="cursor-default w-full whitespace-nowrap overflow-scroll"
        >
          <thead>
            <tr className="">
              {headers?.map((header) => (
                <th className="" key={header}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {patientfirstvisits?.map((item, index) => (
              <tr key={index}>
                {headers?.map((header) => (
                  <td key={header}>{item[header]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {/* {!filteredPatients.length && <Notfound />} */}
        {/* pagination */}
        {/* <Pagination
          currentpage={currentpage.value}
          setCurrentpage={setCurrentpage}
          pages={
            filteredPatients
              ? filteredPatients.length / 10
              : patients?.length / 10
          }
        /> */}
      </div>
    </div>
  );
};

export default Recordfirstvisit;
