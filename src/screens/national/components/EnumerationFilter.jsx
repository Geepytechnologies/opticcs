import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EnumerationFilter = () => {
  return (
    <div className="p-6 bg-white my-3 flex flex-col gap-[21px]">
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-6">
          <input
            type="text"
            placeholder="house number, ward, state..."
            className="rounded-[8px] border-[#899197] border py-2 px-4 outline-none"
          />
          <button className="bg-primary90 rounded-[8px] text-light10 text-[14px] p-2">
            Search
          </button>
        </div>
        <div>
          <button
            onClick={() => downloadTable(tableRef, "Patients")}
            className="bg-primary90 rounded-[8px] text-light10 text-[14px] p-2"
          >
            Download CSV
          </button>
        </div>
      </div>
      <div className="flex gap-[10px]">
        <div className="flex flex-col flex-1">
          <label className="text-primary90 font-[400]">State</label>

          <select
            name="state"
            onChange={() => {}}
            value={""}
            className="p-[16px] myselect min-w-[150px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C880]"
          >
            <option value="all">All States</option>
            <option data-state={""} data-lga={""} key={1} value={""}>
              State
            </option>
          </select>
        </div>
        <div className="flex flex-col flex-1">
          <label className="text-primary90 font-[400]">LGA</label>

          <select
            name="lga"
            onChange={() => {}}
            value={""}
            className="p-[16px] myselect min-w-[150px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C880]"
          >
            <option value="all">All LGA</option>
            <option data-state={""} data-lga={""} key={1} value={""}>
              State
            </option>
          </select>
        </div>
        <div className="flex flex-col flex-1">
          <label className="text-primary90 font-[400]">Ward</label>

          <select
            name="ward"
            onChange={() => {}}
            value={""}
            className="p-[16px] myselect min-w-[150px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C880]"
          >
            <option value="all">All Wards</option>
            <option data-state={""} data-lga={""} key={1} value={""}>
              Ward
            </option>
          </select>
        </div>
        <div className="flex flex-col flex-1">
          <label className="text-primary90 font-[400]">Date From</label>
          <DatePicker
            className="custom-datepicker p-[16px] myselect text-secondary30 bg-transparent outline-none min-w-[180px] rounded-[8px] border border-[#C6C7C880] w-full"
            placeholderText="Choose Date"
            selected={""}
            onChange={(date) => handleDateFromChange(date)}
            dateFormat="yyyy-MM-dd"
            defaultValue={""}
          />
        </div>
      </div>
    </div>
  );
};

export default EnumerationFilter;
