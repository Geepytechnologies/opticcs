import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axiosInstance from "../utils/axios";

const Filterbox = ({
  selectedDateTo,
  filterdata,
  setSelectedDateTo,
  selectedDateFrom,
  setSelectedDateFrom,
  filter,
  setFilter,
  setSearchitem,
}) => {
  const [statesearch, setStatesearch] = useState("all");
  const [lgasearch, setLgasearch] = useState("all");
  const [hfsearch, setHfsearch] = useState("all");
  const [stateAccounts, setStateAccounts] = useState();
  const [lgaAccounts, setLgaAccounts] = useState();
  const [hfAccounts, setHfAccounts] = useState();

  // console.log(lgaAccounts);

  const {} = useQuery({
    queryKey: ["stateAccounts"],
    queryFn: () => getAllStates(),
  });
  const {} = useQuery({
    queryKey: ["lgaAccounts"],
    queryFn: () => getAllLga(),
  });
  const {} = useQuery({
    queryKey: ["healthfacilityAccounts"],
    queryFn: () => getAllHealthFacility(),
  });
  //::::API CALL FUNCTIONS --start::://
  const getAllStates = async () => {
    const result = await axiosInstance.get("/admin/state/data/find/states");
    setStateAccounts(result.data);
    return result.data;
  };
  const getAllLga = async () => {
    const result = await axiosInstance.get(`/admin/lga/data/find/lga`);
    setLgaAccounts(result.data);
    return result.data;
  };
  const getAllHealthFacility = async () => {
    const result = await axiosInstance.get(
      `/admin/healthfacility/data/find/healthfacility`
    );
    setHfAccounts(result.data);
    return result.data;
  };

  //:::sort states alphabetically::://
  const sortedstates = stateAccounts?.sort((a, b) =>
    a.state.localeCompare(b.state)
  );
  //:::sort lga alphabetically according to state::://
  const sortedlga = lgaAccounts?.sort((a, b) => a.state.localeCompare(b.state));
  //:::sort hf alphabetically according to state::://
  const sortedhf = hfAccounts?.sort((a, b) => a.state.localeCompare(b.state));

  const handlestate = (e) => {
    setStatesearch(e.target.value);
    setSearchitem((prev) => ({
      ...prev,
      state: e.target.value,
    }));
    // getAllLga(e.target.value);
  };
  const handlelgasearch = (e) => {
    setLgasearch(e.target.value);
    setSearchitem((prev) => ({
      ...prev,
      lga: e.target.value,
    }));
  };
  const handlehfsearch = (e) => {
    setHfsearch(e.target.value);
    setSearchitem((prev) => ({
      ...prev,
      healthFacility: e.target.value,
    }));
  };

  const handleDateToChange = (date) => {
    if (date >= selectedDateFrom) {
      setSelectedDateTo(date);
      setSearchitem((prev) => ({
        ...prev,
        dateto: date,
      }));
    }
  };
  const handleDateFromChange = (date) => {
    if (date <= Date.now()) {
      setSelectedDateFrom(date);
      setSearchitem((prev) => ({
        ...prev,
        datefrom: date,
      }));
    }
  };
  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  const handleclearfilter = () => {
    setSearchitem();
    setSelectedDateFrom();
    setSelectedDateTo();
  };
  return (
    <div className="w-full flex items-center justify-center my-5">
      <div className="bg-white min-w-[95%] pl-2 py-2 flex flex-row items-center justify-around gap-3">
        {/* 1 */}
        <div className="flex flex-col">
          <label className="text-primary90 font-[400]">Filter</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] min-w-[180px] border border-[#C6C7C880]"
          >
            {filterdata?.map((item, index) => (
              <option key={index} value={item}>
                {capitalizeFirstLetter(item)}
              </option>
            ))}
          </select>
        </div>
        {filter == "firstname" && (
          <div className="flex flex-col">
            <label className="text-primary90 font-[400]">Value</label>
            <input
              placeholder="Type name..."
              onChange={(e) => setSearchitem(e.target.value)}
              className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] min-w-[180px] border border-[#C6C7C880]"
            ></input>
          </div>
        )}
        {filter == "state" && (
          <div className="flex flex-col">
            <label className="text-primary90 font-[400]">Value</label>

            <select
              name="state"
              value={statesearch}
              onChange={(e) => handlestate(e)}
              className="p-[16px] myselect min-w-[150px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C8]"
            >
              <option value="all">All states</option>
              {stateAccounts?.length &&
                sortedstates.map((item, index) => (
                  <option key={index} value={item.state}>
                    {item.state}
                  </option>
                ))}
            </select>
          </div>
        )}
        {filter == "lga" && (
          <div className="flex flex-col">
            <label className="text-primary90 font-[400]">Value</label>

            <select
              name="lga"
              onChange={handlelgasearch}
              value={lgasearch}
              className="p-[16px] myselect min-w-[150px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C8]"
            >
              <option value="all">All LGA</option>
              {sortedlga?.map((localGovt, index) => (
                <option key={index} value={localGovt.lga}>
                  {localGovt.lga} ({capitalizeFirstLetter(localGovt.state)}{" "}
                  State)
                </option>
              ))}
            </select>
          </div>
        )}
        {filter == "HealthFacility" && (
          <div className="flex flex-col">
            <label className="text-primary90 font-[400]">Value</label>

            <select
              name="HealthFacility"
              onChange={handlehfsearch}
              value={hfsearch}
              className="p-[16px] myselect min-w-[150px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C8]"
            >
              <option value="all">All Health Facility</option>
              {sortedhf?.map((h, index) => (
                <option key={index} value={h.healthfacilityname}>
                  {h.healthfacilityname} ({capitalizeFirstLetter(h.state)}{" "}
                  State)
                </option>
              ))}
            </select>
          </div>
        )}
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
        <div>
          <button
            onClick={handleclearfilter}
            className="bg-primary70 px-3 py-2 rounded-md text-white font-[500]"
          >
            Search
          </button>
        </div>
        <div>
          <button
            onClick={handleclearfilter}
            className="bg-yellow-500 px-3 py-2 rounded-md text-white font-[500]"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filterbox;
