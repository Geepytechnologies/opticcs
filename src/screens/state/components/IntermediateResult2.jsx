import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { LuCalendarDays } from "react-icons/lu";
import { useState } from "react";
import axiosInstance from "../../../utils/axios";
import { useAuth } from "../hooks/useAuth";

const IntermediateResult2 = ({ patients, searchitem, filter, filteritem }) => {
  const { stateAuth } = useAuth();
  const { state } = stateAuth.others;
  //   console.log(filter);
  //   console.log(searchitem);
  const [data, setData] = useState();

  const getIntermediateResult2 = async (searchitem) => {
    try {
      const res = await axiosInstance.get(
        `/admin/indicators/intermediateresult2?state=${state}&lga=${searchitem?.lga}&healthfacility=${searchitem?.healthFacility}&from=${searchitem?.datefrom}&to=${searchitem?.dateto}&filter=${filteritem}`
      );
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getIntermediateResult2(searchitem);
  }, []);

  useEffect(() => {
    getIntermediateResult2(searchitem);
  }, [searchitem]);

  const getFraction = (numerator, denominator) => {
    let result;
    if (numerator !== 0 && denominator !== 0) {
      result = (numerator / denominator).toFixed(3);
    } else {
      result = 0;
    }
    return result;
  };
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex items-center justify-center w-full mt-7"
    ></motion.div>
  );
};

export default IntermediateResult2;
