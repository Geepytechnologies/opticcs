import React from "react";
import { useAuth } from "./useAuth";
import axiosInstance from "../../../utils/axios";

const useLogout = () => {
  const { setHealthfacilityAuth } = useAuth();
  const logout = async () => {
    setHealthfacilityAuth({});
    try {
      const response = await axiosInstance.get(
        "/admin/healthfacility/signout",
        {
          withCredentials: true,
        }
      );
    } catch (err) {
      console.error(err);
    }
  };
  return logout;
};

export default useLogout;
