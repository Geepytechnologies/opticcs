import React, { createContext, useState, useEffect } from "react";
import { axiosPrivate } from "../axios";


const AuthContext = createContext({
  auth: null,
  rememberMe: JSON.parse(localStorage.getItem("persist") ?? "true"),
  setRememberMe: () => { },
  setAuth: () => { },
});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [rememberMe, setRememberMe] = useState(
    JSON.parse(localStorage.getItem("persist") ?? "true")
  );

  return (
    <AuthContext.Provider value={{ auth, setAuth, rememberMe, setRememberMe }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
