import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import {
    FaRegUser,
    FaUserCircle,
    FaDownload,
    FaUpload,
    FaUserAlt,
    FaUserAltSlash,
} from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5"
import { IoBagAddOutline } from "react-icons/io5"
import { BsFillInfoCircleFill, BsBookmarkDash } from "react-icons/bs"
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti"
import { BiLogOut } from "react-icons/bi"
import { RxDashboard } from "react-icons/rx"
import { RiArrowUpDownLine } from "react-icons/ri"
import { HiOutlineUserGroup, } from "react-icons/hi"
import { HiOutlineChatBubbleOvalLeftEllipsis, HiOutlineUserPlus } from "react-icons/hi2"
import { LuCalendarDays } from "react-icons/lu"
import { MdOutlineGroup } from "react-icons/md"
import { CgNotes } from "react-icons/cg"
import { FiSettings } from "react-icons/fi"
import { useAuth } from '../../../utils/hooks/useAuth';
import PartnerLogo from '../../../components/PartnerLogo';
import useLogout from '../../../utils/hooks/useLogout';

const DashboardMenu = () => {
    const [currentPage, setCurrentPage] = useState("");
    const { auth, setAuth } = useAuth()
    const logoutUser = useLogout()
    const location = useLocation();
    useEffect(() => {
        setCurrentPage(location.pathname);
    }, [location]);
    const logout = () => {
        logoutUser();
        console.log({ authLogout: auth })
    }
    return (
        <div className="text-[#5a5b5c]  h-auto px-2">
            <div className="flex w-full items-center justify-center">
                <Link to="/" className="w-[80px] h-[80px] flex items-center justify-center">
                    <img src="/images/Logo.png" alt="logo" className="max-w-full max-h-full" />
                </Link>
            </div>
            <div className="">
                {/* dashboard */}
                <Link
                    to="/state"
                    className={`flex gap-2 my-2 items-center rounded-md  p-2  ${currentPage === "/state"
                        ? "bg-[#141619] text-white drop-shadow-lg"
                        : " hover:text-[black] hover:bg-gray-200"
                        }`}
                >
                    <RxDashboard />
                    <p>Dashboard</p>
                </Link>
                {/* Indicators */}
                <Link to="/state/indicators"
                    className={`flex gap-2 my-2 items-center rounded-md  p-2  ${currentPage.includes("indicators")
                        ? "bg-[#141619] text-white drop-shadow-lg"
                        : " hover:text-[black] hover:bg-gray-200"
                        }`}
                >
                    <RiArrowUpDownLine />
                    <p>Indicators</p>
                </Link>

                {/* Manage users */}
                <Link
                    to="/state/patients"
                    className={`flex gap-2 my-2 items-center rounded-md  p-2  ${currentPage === "/state/patients"
                        ? "bg-[#141619] text-white drop-shadow-2xl"
                        : " hover:text-[black] hover:bg-gray-200"
                        }`}
                >
                    <HiOutlineUserGroup />
                    <p>Patients</p>
                </Link>
                {/* Patients Schedule */}
                <Link
                    to="/state/patients-schedule"
                    className={`flex gap-2 my-2 items-center rounded-md  p-2  ${currentPage.includes("patients-schedule")
                        ? "bg-[#141619] text-white drop-shadow-2xl"
                        : " hover:text-[black] hover:bg-gray-200"
                        }`}
                >
                    <LuCalendarDays />
                    <p>Patients Schedule</p>
                </Link>
                {/* Health Worker */}
                <Link
                    to="/state/health-worker"
                    className={`flex gap-2 my-2 items-center rounded-md  p-2  ${currentPage.includes("health-worker")
                        ? "bg-[#141619] text-white drop-shadow-2xl"
                        : " hover:text-[black] hover:bg-gray-200"
                        }`}
                >
                    <MdOutlineGroup />
                    <p>Health Worker</p>
                </Link>
                {/* Health Facility*/}
                <Link to="/state/health-facility"
                    className={`flex gap-2 my-2 items-center rounded-md  p-2  ${currentPage.includes("health-facility")
                        ? "bg-[#141619] text-white drop-shadow-lg"
                        : " hover:text-[black] hover:bg-gray-200"
                        }`}
                >
                    <IoBagAddOutline />
                    <p>Health Facility</p>
                </Link>
                {/* LGA */}
                <Link
                    to="/state/lga"
                    className={`flex gap-2 my-2 items-center rounded-md  p-2  ${currentPage.includes("lga")
                        ? "bg-[#141619] text-white drop-shadow-2xl"
                        : " hover:text-[black] hover:bg-gray-200"
                        }`}
                >
                    <BsBookmarkDash />
                    <p>LGA</p>
                </Link>
                {/* User Request */}
                <Link
                    to="/state/accounts"
                    className={`flex gap-2 my-2 items-center rounded-md  p-2  ${currentPage.includes("accounts")
                        ? "bg-[#141619] text-white drop-shadow-2xl"
                        : " hover:text-[black] hover:bg-gray-200"
                        }`}
                >
                    <HiOutlineUserPlus />
                    <p>Accounts</p>
                </Link>
                {/* Message */}
                <Link
                    to="/state/message"
                    className={`flex gap-2 my-2 items-center rounded-md  p-2  ${currentPage.includes("message")
                        ? "bg-[#141619] text-white drop-shadow-2xl"
                        : " hover:text-[black] hover:bg-gray-200"
                        }`}
                >
                    <HiOutlineChatBubbleOvalLeftEllipsis />
                    <p>Message</p>
                </Link>
                {/* Settings */}
                <Link
                    to="/state/settings"
                    className={`flex gap-2 my-2 items-center rounded-md  p-2  ${currentPage.includes("settings")
                        ? "bg-[#141619] text-white drop-shadow-2xl"
                        : " hover:text-[black] hover:bg-gray-200"
                        }`}
                >
                    <FiSettings />
                    <p>Settings</p>
                </Link>
                {/* My Profile */}
                <Link
                    to="/state/profile"
                    className={`flex gap-2 my-2 items-center rounded-md  p-2  ${currentPage.includes("profile")
                        ? "bg-[#141619] text-white drop-shadow-2xl"
                        : " hover:text-[black] hover:bg-gray-200"
                        }`}
                >
                    <FaRegUser />
                    <p>My Profile</p>
                </Link>
                {/* Logout */}
                <div onClick={logout}
                    className={`flex gap-2 my-2 items-center rounded-md cursor-pointer  p-2  ${currentPage.includes("logout")
                        ? "bg-[#141619] text-white drop-shadow-2xl"
                        : " hover:text-[black] hover:bg-gray-200"
                        }`}
                >
                    <BiLogOut />
                    <p>Logout</p>
                </div>
                <div className='w-full flex py-4 items-center justify-center'>

                    <PartnerLogo />
                </div>
            </div>
        </div>
    )
}

export default DashboardMenu