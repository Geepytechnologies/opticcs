import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import DashboardHome from "./pages/DashboardHome";
import DashboardMenu from "./components/DashboardMenu";
import DashboardNavbar from "./components/DashboardNavbar";
import DashboardIndicators from "./pages/DashboardIndicators";
import Patients from "./pages/Patients";
import PatientsSchedule from "./pages/PatientsSchedule";
import HealthWorker from "./pages/HealthWorker";
import HealthFacility from "./pages/HealthFacility";
import State from "./pages/State";
import LGA from "./pages/LGA";
import Messages from "./pages/Messages";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import LoadPage from "../LoadPage";
import Accounts from "./pages/Accounts";
import Notifications from "./components/Notifications";


const Dashboard = () => {
    const [loaderFinished, setLoaderFinished] = useState(false);
    const finished = () => {
        setLoaderFinished(true);
    }
    return (
        <>
            {!loaderFinished ? <LoadPage loaderFinished={finished} /> :
                <div className="flex w-full">
                    <div id="menu" className="flex-1 min-w-[250px] custom-scrollbar adminmenu overflow-y-scroll">
                        <DashboardMenu />
                    </div>
                    <div id="page" className="flex-[4] bg-[#f8f9fa]">
                        <DashboardNavbar />
                        <div className="">
                            <Routes>
                                <Route index path="/" element={<DashboardHome />}></Route>
                                <Route index path="/admin/indicators" element={<DashboardIndicators />}></Route>
                                <Route index path="/admin/patients" element={<Patients />}></Route>
                                <Route index path="/admin/patients-schedule" element={<PatientsSchedule />}></Route>
                                <Route index path="/admin/health-worker" element={<HealthWorker />}></Route>
                                <Route index path="/admin/health-facility" element={<HealthFacility />}></Route>
                                <Route index path="/admin/state" element={<State />}></Route>
                                <Route index path="/admin/lga" element={<LGA />}></Route>
                                <Route index path="/admin/accounts" element={<Accounts />}></Route>
                                <Route index path="/admin/message" element={<Messages />}></Route>
                                <Route index path="/admin/settings" element={<Settings />}></Route>
                                <Route index path="/admin/profile" element={<Profile />}></Route>
                                <Route index path="/admin/notifications" element={<Notifications />}></Route>
                            </Routes>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default Dashboard;
