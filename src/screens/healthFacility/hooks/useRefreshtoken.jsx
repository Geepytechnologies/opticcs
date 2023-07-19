import axios from "axios";
import React from "react";
import { useAuth } from "./useAuth";
import axiosInstance from "../../../utils/axios";

const useRefreshtoken = () => {
  const { setHealthfacilityAuth } = useAuth();

  const refresh = async () => {
    const response = await axiosInstance.get("/admin/healthfacility/refresh", {
      withCredentials: true,
    });
    setHealthfacilityAuth((prev) => {
      return {
        ...prev,
        accessToken: response.data.accessToken,
        others: response.data.others,
      };
    });
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshtoken;
