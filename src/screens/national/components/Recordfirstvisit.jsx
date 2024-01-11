import React, { useEffect, useRef, useState } from "react";
import Notfound from "../../../components/Notfound";
import Pagination from "../../../components/Pagination";
import axiosInstance from "../../../utils/axios";
import LoaderSmall from "../../../components/LoaderSmall";
import { downloadTable } from "../../../utils/helpers";

const Recordfirstvisit = ({
  selectedDateFrom,
  selectedDateTo,
  values,
  searchitem,
}) => {
  const [patientfirstvisits, setPatientfirstvisits] = useState();
  const [loading, setLoading] = useState(false);
  const [currentpage, setCurrentpage] = useState({ value: 1 });

  //filter
  // const [selectedDateTo, setSelectedDateTo] = useState();
  // const [selectedDateFrom, setSelectedDateFrom] = useState();

  const headers = patientfirstvisits && Object.keys(patientfirstvisits[0]);
  const tableRef = useRef();

  const getAllPatientFirstVisits = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.get("/patients/firstvisits/find");
      setPatientfirstvisits(res.data.result);
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    // getIndicatordata();
    getAllPatientFirstVisits();
  }, []);
  // const filtervisits = (patientfirstvisits) => {
  //   if (!patientfirstvisits) return [];
  //   let filteredpage;
  //   if (selectedDateFrom && selectedDateTo) {
  //     // console.log(patientfirstvisits);
  //     filteredpage = patientfirstvisits.filter(
  //       (item) =>
  //         new Date(item.firstvisit_date).getTime() >=
  //           new Date(selectedDateFrom).getTime() &&
  //         new Date(item.firstvisit_date).getTime() <=
  //           new Date(selectedDateTo).getTime()
  //     );
  //     return filteredpage;
  //   } else {
  //     return patientfirstvisits;
  //   }
  // };
  // const filteredVisits = filtervisits(patientfirstvisits);

  const filtervisits = (patientfirstvisits, searchitem, values) => {
    console.log({ filter: values, searchitem: searchitem });
    if (!patientfirstvisits) return []; // Return an empty array if patients is false

    if (searchitem && selectedDateFrom && selectedDateTo) {
      return patientfirstvisits.filter(
        (item) =>
          item[searchitem]?.toLowerCase().includes(values?.toLowerCase()) &&
          new Date(item.createdat).getTime() >=
            new Date(selectedDateFrom).getTime() &&
          new Date(item.createdat).getTime() <=
            new Date(selectedDateTo).getTime()
      );
    } else if (searchitem || values) {
      return patientfirstvisits.filter((item) =>
        item[searchitem]?.toLowerCase().includes(values?.toLowerCase())
      );
    } else if (selectedDateFrom && selectedDateTo) {
      return patientfirstvisits.filter(
        (item) =>
          new Date(item.createdat).getTime() >=
            new Date(selectedDateFrom).getTime() &&
          new Date(item.createdat).getTime() <=
            new Date(selectedDateTo).getTime()
      );
    } else {
      return patientfirstvisits;
    }
  };
  const filteredVisits = filtervisits(patientfirstvisits, searchitem, values);
  console.log(filteredVisits);
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
        {loading ? (
          <LoaderSmall />
        ) : (
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
              {patientfirstvisits
                ? ((selectedDateTo && selectedDateFrom) ||
                  (searchitem && values)
                    ? filteredVisits
                    : patientfirstvisits
                  )
                    .slice(10 * currentpage.value - 10, 10 * currentpage.value)
                    .map((item, index) => (
                      <tr key={index}>
                        {headers?.map((header) => (
                          <td key={header}>{item[header]}</td>
                        ))}
                      </tr>
                    ))
                : null}
            </tbody>
          </table>
        )}
        {!filteredVisits.length && <Notfound />}
        {/* pagination */}
        <Pagination
          currentpage={currentpage.value}
          setCurrentpage={setCurrentpage}
          pages={
            filteredVisits
              ? filteredVisits.length / 10
              : patientfirstvisits?.length / 10
          }
        />
      </div>
    </div>
  );
};

export default Recordfirstvisit;
