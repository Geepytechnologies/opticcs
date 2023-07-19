import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import Loader from "../components/Loader";
import useRefreshtoken from "../screens/healthFacility/hooks/useRefreshtoken";


const PersistHealthfacilityLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshtoken();
    const { healthfacilityAuth } = useAuth();

    useEffect(() => {
        let isMounted = true;
        const verifyRefreshToken = async () => {
            try {
                await refresh();
            } catch (err) {
                console.error(err);
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        };
        !healthfacilityAuth?.accessToken ? verifyRefreshToken() : setIsLoading(false);
        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <>{isLoading ? <Loader /> : <Outlet />}</>
    );
};

export default PersistHealthfacilityLogin;
