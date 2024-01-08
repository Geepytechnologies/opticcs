import React, { useEffect, useRef, useState } from "react";

import axiosInstance from "../../../utils/axios";
import Pagination from "../../../components/Pagination";
import moment from "moment";
import Notfound from "../../../components/Notfound";
import Patientview from "../components/Patientview";
import { useNavigate } from "react-router-dom";
import { FaRegFileAlt } from "react-icons/fa";
import { downloadTable } from "../../../utils/helpers";
import Recordfirstvisit from "../components/Recordfirstvisit";
import Recordreturnvisit from "../components/Recordreturnvisit";
import Recordpatients from "../components/Recordpatients";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Records = () => {
  //filter
  const [selectedDateTo, setSelectedDateTo] = useState();
  const [selectedDateFrom, setSelectedDateFrom] = useState();

  //
  const [patients, setPatients] = useState();
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
    // getIndicatordata();
  }, []);
  const getAllPatients = async () => {
    try {
      const res = await axiosInstance.get("/patients/findwithworkers");
      setPatients(res.data.result);
    } catch (err) {}
  };
  useEffect(() => {
    getAllPatients();
  }, []);

  const navigate = useNavigate();

  const handleItemClick = (itemId) => {
    navigate(`/national/patients/${itemId}`);
  };

  const [navigatorSlide, setNavigatorSlide] = useState(1);
  //data

  let componentToRender;

  switch (navigatorSlide) {
    case 1:
      componentToRender = (
        <Recordfirstvisit
          selectedDateFrom={selectedDateFrom}
          selectedDateTo={selectedDateTo}
        />
      );
      break;
    case 2:
      componentToRender = <Recordreturnvisit />;
      break;
    case 3:
      componentToRender = <Recordpatients />;
      break;
    default:
      componentToRender = null;
      break;
  }

  const Filterbox = () => {
    const handleDateToChange = (date) => {
      if (date >= selectedDateFrom) {
        setSelectedDateTo(date);
      }
    };
    const handleDateFromChange = (date) => {
      if (date <= Date.now()) {
        setSelectedDateFrom(date);
      }
    };
    const capitalizeFirstLetter = (word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    };
    return (
      <div className="w-full flex items-center justify-center my-5">
        <div className="bg-white min-w-[95%] pl-2 py-2 flex flex-row items-center justify-around gap-3">
          {/* 2 */}
          <div className="flex flex-col">
            <label className="text-primary90 font-[400]">Date From</label>
            <DatePicker
              className="custom-datepicker p-[16px] myselect text-secondary30 bg-transparent outline-none min-w-[180px] rounded-[8px] border border-[#C6C7C880]"
              placeholderText="choose Date"
              selected={selectedDateFrom}
              onChange={(date) => handleDateFromChange(date)}
              dateFormat="yyyy-MM-dd"
              defaultValue={selectedDateFrom}
            />
          </div>
          {/* 3 */}
          <div className="flex flex-col">
            <label className="text-primary90 font-[400]">Date To</label>
            <DatePicker
              className="custom-datepicker p-[16px] myselect text-secondary30 bg-transparent outline-none min-w-[180px] rounded-[8px] border border-[#C6C7C880]"
              placeholderText="choose Date"
              selected={selectedDateTo}
              onChange={(date) => handleDateToChange(date)}
              dateFormat="yyyy-MM-dd"
              defaultValue={selectedDateTo}
            />
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="bg-primary10 w-full flex flex-col min-h-screen">
        {/* dashboard */}
        <div className="flex w-full items-center justify-between px-3 py-3">
          <div className="flex gap-2 items-center p-2">
            <FaRegFileAlt />
            <p className="text-secondary400 text-[18px] font-[600]">Records</p>
          </div>
          {/* <div className='flex gap-2 justify-end'>
                        <input className='outline-0 bg-transparent text-[14px] font-[400] rounded-[8px] border-secondary30 border p-2' placeholder="Patient, or SPHC or CLGA" />
                        <button className="bg-primary90 p-2 text-light10 rounded-[8px]">Search</button>
                    </div> */}
        </div>

        {/* selectbox1 */}
        <Filterbox
          selectedDateTo={selectedDateTo}
          selectedDateFrom={selectedDateFrom}
        />

        {/* navigator */}
        <div className="flex items-center gap-6 pl-4">
          <div
            onClick={() => setNavigatorSlide(1)}
            className={`cursor-pointer text-center ${
              navigatorSlide === 1
                ? "text-primary70 border-b-4 font-[500] pb-2 border-primary70"
                : "text-light90 pb-2 font-[500]"
            }`}
          >
            First Visit
          </div>
          <div
            onClick={() => setNavigatorSlide(2)}
            className={`cursor-pointer text-center ${
              navigatorSlide === 2
                ? "text-primary70 border-b-4 font-[500] pb-2 border-primary70"
                : "text-light90 pb-2 font-[500]"
            }`}
          >
            Return Visit
          </div>
          <div
            onClick={() => setNavigatorSlide(3)}
            className={`cursor-pointer text-center ${
              navigatorSlide === 3
                ? "text-primary70 border-b-4 font-[500] pb-2 border-primary70"
                : "text-light90 pb-2 font-[500]"
            }`}
          >
            Patients
          </div>
        </div>
        {/* navigator screen slides */}
        {componentToRender}
      </div>
    </div>
  );
};

export default Records;
