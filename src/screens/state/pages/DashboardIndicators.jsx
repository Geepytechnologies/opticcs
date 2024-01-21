import React, { useState, useEffect } from "react";
import { RiArrowUpDownLine } from "react-icons/ri";
import IndicatorNavigatorScreen1 from "../components/IndicatorNavigatorScreen1";
import IndicatorNavigatorScreen2 from "../components/IndicatorNavigatorScreen2";
import IndicatorNavigatorScreen3 from "../components/IndicatorNavigatorScreen3";
import IndicatorNavigatorScreen4 from "../components/IndicatorNavigatorScreen4";
import IndicatorNavigatorScreen5 from "../components/IndicatorNavigatorScreen5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axiosInstance from "../../../utils/axios";
import Filterbox from "../../../components/Filterbox";
import stateLocalGovts from "../../../utils/stateandlgas";
import { useAuth } from "../hooks/useAuth";

const DashboardIndicators = () => {
  const { stateAuth } = useAuth();
  const { state } = stateAuth.others;
  const [localGovts, setLocalGovts] = useState([]);
  const [statesearch, setStatesearch] = useState("all");
  const [lgasearch, setLgasearch] = useState("all");
  const [ward, setWard] = useState("all");
  const [lgaAccounts, setLgaAccounts] = useState();
  const [chartParam, setChartParam] = useState("all");
  const [chart, setChart] = useState("all");

  const [indicatorsearchparam, setindicatorsearchparam] = useState({
    query: "",
    state: "",
    lga: "",
  });

  //navigation
  const [navigatorSlide, setNavigatorSlide] = useState(1);
  //data
  const [patients, setPatients] = useState(0);
  const [datainfo, setDatainfo] = useState();
  const [datainforeturn, setDatainforeturn] = useState([]);

  //:::utility functions::://
  const getIndicatordata = async () => {
    try {
      const res = await axiosInstance.get(
        `/admin/state/data/general?state=${state}`
      );
      setDatainfo(Object.keys(res.data));
    } catch (error) {}
  };
  const getAllLga = async (state) => {
    const result = await axiosInstance.get(
      `/admin/lga/data/find/lga?state=${state}`
    );
    setLgaAccounts(result.data);
  };

  const getAllStatePatients = async () => {
    try {
      const res = await axiosInstance.get(
        `/patients/state/find?state=${state}`
      );
      setPatients(res.data.result.length);
    } catch (err) {}
  };
  const getAllLgaPatients = async () => {
    try {
      const res = await axiosInstance.get(
        `/patients/lga/find?lga=${lgasearch}`
      );
      setPatients(res.data.result.length);
    } catch (err) {}
  };
  const getIndicatordatareturn = async () => {
    try {
      const res = await axiosInstance.get(
        `/admin/national/data/general/return?state=${state}`
      );
      setDatainforeturn(Object.keys(res.data));
    } catch (error) {}
  };
  //:::utility functions end::://

  //:::Filter Box options:::///
  const Firstvisitoption = () => {
    const sorted = datainfo?.sort((a, b) => a.localeCompare(b));
    return (
      <>
        {sorted?.map((chart, index) => (
          <option key={index} value={chart}>
            {capitalizeFirstLetter(chart)}
          </option>
        ))}
      </>
    );
  };
  const Returnvisitoption = () => {
    const sorted = datainforeturn?.sort((a, b) => a.localeCompare(b));

    return (
      <>
        {sorted?.map((chart, index) => (
          <option key={index} value={chart}>
            {capitalizeFirstLetter(chart)}
          </option>
        ))}
      </>
    );
  };

  const Testresultoption = () => (
    <>
      <option value={"hiv"}>{capitalizeFirstLetter("hiv")}</option>
      <option value={"malaria"}>{capitalizeFirstLetter("malaria")}</option>
    </>
  );
  const Scheduleoption = () => (
    <>
      <option value={"schedule"}>{capitalizeFirstLetter("Schedule")}</option>
    </>
  );

  //::::API CALLS:::://
  useEffect(() => {
    getAllLga(state);
    getAllStatePatients();
    getIndicatordata();
    getIndicatordatareturn();
  }, []);

  let componentToRender;
  let optionToRender;

  switch (navigatorSlide) {
    case 1:
      componentToRender = (
        <IndicatorNavigatorScreen1
          param={indicatorsearchparam}
          chart={chartParam}
        />
      );
      optionToRender = <Firstvisitoption />;
      break;
    case 2:
      componentToRender = <IndicatorNavigatorScreen2 />;
      break;
    case 3:
      componentToRender = (
        <IndicatorNavigatorScreen3
          param={indicatorsearchparam}
          chart={chartParam}
        />
      );
      optionToRender = <Returnvisitoption />;
      break;
    case 4:
      componentToRender = (
        <IndicatorNavigatorScreen4
          param={indicatorsearchparam}
          chart={chartParam}
        />
      );
      optionToRender = <Testresultoption />;
      break;
    case 5:
      componentToRender = (
        <IndicatorNavigatorScreen5 param={indicatorsearchparam} />
      );
      optionToRender = <Scheduleoption />;
      break;
    default:
      componentToRender = null;
      break;
  }

  //:::form handlers::://
  const handlestate = (e) => {
    setStatesearch(e.target.value);
  };
  const handlelgasearch = (e) => {
    setLgasearch(e.target.value);
  };
  const handlesearchsubmit = async () => {
    let searchquery;
    try {
      if (lgasearch == "all") {
        searchquery = "state";
        setindicatorsearchparam({
          query: searchquery,
          state: "",
          lga: lgasearch,
        });
        getAllStatePatients();
      }
      if (lgasearch !== "all") {
        searchquery = "lga";
        setindicatorsearchparam({
          query: searchquery,
          state: "",
          lga: lgasearch,
        });
        getAllLgaPatients();
      }
      // setindicatorsearchparam({ query: searchquery, state: statesearch, lga: lgasearch })
      setChartParam(chart);
    } catch (error) {}
  };
  //::end:://

  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  useEffect(() => {
    setLocalGovts(stateLocalGovts[capitalizeFirstLetter(state)]);
  }, []);

  //::searchbox:://
  const Mysearchbox = () => {
    return (
      <div className="w-full flex items-center justify-center my-5">
        <div className="bg-white min-w-[95%] pl-2 py-2 flex flex-row  items-center justify-center gap-6">
          {/* 1 */}

          {/* 2 */}
          {/* {statesearch !== 'all' && */}
          <div className="flex flex-col">
            {/* <label className='text-primary90 font-[400]'>LGA</label> */}
            <select
              name="lga"
              onChange={handlelgasearch}
              value={lgasearch}
              className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C8]"
            >
              <option value="all">All LGA</option>
              {lgaAccounts?.map((localGovt, index) => (
                <option key={index} value={localGovt.lga}>
                  {localGovt.lga}
                </option>
              ))}
            </select>
          </div>
          {/* } */}
          {/* 3 */}
          {lgasearch !== "all" && (
            <div className="flex flex-col">
              {/* <label className='text-primary90 font-[400]'>Ward</label> */}
              <select
                defaultValue=""
                onChange={(e) => setWard(e.target.value)}
                className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] min-w-[180px] border border-[#C6C7C880]"
              >
                <option value={ward}>{"All wards"}</option>
              </select>
            </div>
          )}
          {/* 4 */}
          <div className="flex flex-col">
            <label className="text-primary90 font-[400]">Chart</label>
            <select
              value={chart}
              onChange={(e) => setChart(e.target.value)}
              className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] min-w-[180px] border border-[#C6C7C880]"
            >
              <option value="all">All charts</option>

              {optionToRender}
            </select>
          </div>
          <div className="flex gap-2 justify-end ml-6">
            <button
              onClick={handlesearchsubmit}
              className="bg-primary90 p-[16px] text-light10 rounded-[8px]"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      {/* content */}
      <div className="bg-primary10 w-full">
        {/* dashboard */}
        <div className="flex w-full items-center justify-between px-3 py-3">
          <div className="flex gap-2 items-center p-2">
            <RiArrowUpDownLine />
            <p className="text-secondary400 text-[18px] font-[600]">
              Indicators
            </p>
          </div>
        </div>

        {/* selectbox1 */}
        <Mysearchbox />

        {/* indicator outcome */}
        <div className="w-full flex items-center justify-center my-5">
          <div className="bg-white min-w-[1000px] w-[95%] flex flex-col items-center justify-start pl-6 py-4">
            {/* navigator */}
            <div className="flex px-3 w-full items-center justify-between gap-6">
              <div className="flex items-center flex-[3] justify-between ">
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
                {/* <div onClick={() => setNavigatorSlide(2)} className={`cursor-pointer text-center ${navigatorSlide === 2 ? 'text-primary70 border-b-4 font-[500] pb-2 border-primary70' : "text-light90 pb-2 font-[500]"}`}>First Visit</div> */}
                <div
                  onClick={() => setNavigatorSlide(3)}
                  className={`cursor-pointer text-center ${
                    navigatorSlide === 3
                      ? "text-primary70 border-b-4 font-[500] pb-2 border-primary70"
                      : "text-light90 pb-2 font-[500]"
                  }`}
                >
                  Return Visit
                </div>
                <div
                  onClick={() => setNavigatorSlide(4)}
                  className={`cursor-pointer text-center ${
                    navigatorSlide === 4
                      ? "text-primary70 border-b-4 font-[500] pb-2 border-primary70"
                      : "text-light90 pb-2 font-[500]"
                  }`}
                >
                  Test Result
                </div>
                <div
                  onClick={() => setNavigatorSlide(5)}
                  className={`cursor-pointer ${
                    navigatorSlide === 5
                      ? "text-primary70 border-b-4 font-[500] pb-2 border-primary70"
                      : "text-light90 pb-2 font-[500]"
                  }`}
                >
                  Antenatal Schedule
                </div>
              </div>
              <div className="font-[500] flex-1 text-center">
                <span className="text-primary70">{patients} </span>Patient{" "}
                {patients > 1 ? "Records" : "Record"}
              </div>
            </div>
            {/* navigator screen slides */}
            {componentToRender}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardIndicators;
