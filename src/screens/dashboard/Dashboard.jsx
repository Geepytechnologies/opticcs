import React from "react";
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
import UserRequest from "./pages/UserRequest";
import Messages from "./pages/Messages";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";


const Dashboard = () => {
    return (
        <>
            <div className="flex w-full">
                <div id="menu" className="flex-1 min-w-[250px] adminmenu overflow-y-scroll">
                    <DashboardMenu />
                </div>
                <div id="page" className="flex-[4] bg-[#f8f9fa]">
                    <DashboardNavbar />
                    <div className="">
                        <Routes>
                            <Route index path="/" element={<DashboardHome />}></Route>
                            <Route index path="/indicators" element={<DashboardIndicators />}></Route>
                            <Route index path="/patients" element={<Patients />}></Route>
                            <Route index path="/patients-schedule" element={<PatientsSchedule />}></Route>
                            <Route index path="/health-worker" element={<HealthWorker />}></Route>
                            <Route index path="/health-facility" element={<HealthFacility />}></Route>
                            <Route index path="/state" element={<State />}></Route>
                            <Route index path="/lga" element={<LGA />}></Route>
                            <Route index path="/user-request" element={<UserRequest />}></Route>
                            <Route index path="/message" element={<Messages />}></Route>
                            <Route index path="/settings" element={<Settings />}></Route>
                            <Route index path="/profile" element={<Profile />}></Route>
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
