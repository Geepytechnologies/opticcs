import React from "react";
import { useAuth } from "./useAuth";
import { Navigate } from "react-router-dom";
import axiosInstance from "../../../utils/axios";

const useLogout = () => {
  const { setStateAuth } = useAuth();
  const logout = async () => {
    setStateAuth({});
    try {
      Navigate("/state/login");
      const response = await axiosInstance.get("/admin/state/signout", {
        withCredentials: true,
      });
    } catch (err) {
      console.error(err);
    }
  };
  return logout;
};

export default useLogout;
