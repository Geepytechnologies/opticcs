import React from "react";
import { useAuth } from "./useAuth";
import axiosInstance from "../../../utils/axios";

const useLogout = () => {
  const { setNationalAuth } = useAuth();
  const logout = async () => {
    setNationalAuth({});
    try {
      const response = await axiosInstance.get("/admin/national/signout", {
        withCredentials: true,
      });
    } catch (err) {
      console.error(err);
    }
  };
  return logout;
};

export default useLogout;
