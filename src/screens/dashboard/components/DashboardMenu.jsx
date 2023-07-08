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

const DashboardMenu = () => {
    const [currentPage, setCurrentPage] = useState("");
    const location = useLocation();
    useEffect(() => {
        setCurrentPage(location.pathname);
    }, [location]);
    return (
        <div className="text-[#5a5b5c] h-auto px-2">
            <div className="flex w-full items-center justify-center">
                <Link to="/" className="w-[80px] h-[80px] flex items-center justify-center">
                    <img src="/images/Logo.png" alt="logo" className="max-w-full max-h-full" />
                </Link>
            </div>
            <div className="">
                {/* dashboard */}
                <Link
                    to="/user/dashboard"
                    className={`flex gap-2 my-2 items-center rounded-md  p-2  ${currentPage === "/user/dashboard"
                        ? "bg-primary90 text-white drop-shadow-xl"
                        : " hover:text-[black] hover:bg-gray-200"
                        }`}
                >
                    <RxDashboard />
                    <p>Dashboard</p>
                </Link>
                {/* Indicators */}
                <Link to="/user/dashboard/indicators"
                    className={`flex gap-2 my-2 items-center rounded-md  p-2  ${currentPage.includes("indicators")
                        ? "bg-primary90 text-white drop-shadow-xl"
                        : " hover:text-[black] hover:bg-gray-200"
                        }`}
                >
                    <RiArrowUpDownLine />
                    <p>Indicators</p>
                </Link>

                {/* Manage users */}
                <Link
                    to="/user/dashboard/patients"
                    className={`flex gap-2 my-2 items-center rounded-md  p-2  ${currentPage === "patients"
                        ? "bg-primary90 text-white drop-shadow-2xl"
                        : " hover:text-[black] hover:bg-gray-200"
                        }`}
                >
                    <HiOutlineUserGroup />
                    <p>Patients</p>
                </Link>
                {/* Patients Schedule */}
                <Link
                    to="/user/dashboard/patients-schedule"
                    className={`flex gap-2 my-2 items-center rounded-md  p-2  ${currentPage.includes("patients-schedule")
                        ? "bg-primary90 text-white drop-shadow-2xl"
                        : " hover:text-[black] hover:bg-gray-200"
                        }`}
                >
                    <LuCalendarDays />
                    <p>Patients Schedule</p>
                </Link>
                {/* Health Worker */}
                <Link
                    to="/user/dashboard/health-worker"
                    className={`flex gap-2 my-2 items-center rounded-md  p-2  ${currentPage.includes("health-worker")
                        ? "bg-primary90 text-white drop-shadow-2xl"
                        : " hover:text-[black] hover:bg-gray-200"
                        }`}
                >
                    <MdOutlineGroup />
                    <p>Health Worker</p>
                </Link>
                {/* Health Facility*/}
                <Link to="/user/dashboard/health-facility"
                    className={`flex gap-2 my-2 items-center rounded-md  p-2  ${currentPage.includes("health-facility")
                        ? "bg-primary90 text-white drop-shadow-xl"
                        : " hover:text-[black] hover:bg-gray-200"
                        }`}
                >
                    <IoBagAddOutline />
                    <p>Health Facility</p>
                </Link>
                {/* State */}
                <Link to="/user/dashboard/state"
                    className={`flex gap-2 my-2 items-center rounded-md  p-2  ${currentPage.includes("state")
                        ? "bg-primary90 text-white drop-shadow-xl"
                        : " hover:text-[black] hover:bg-gray-200"
                        }`}                    >
                    <CgNotes />
                    <p>State</p>
                </Link>
                {/* LGA */}
                <Link
                    to="/user/dashboard/lga"
                    className={`flex gap-2 my-2 items-center rounded-md  p-2  ${currentPage.includes("lga")
                        ? "bg-primary90 text-white drop-shadow-2xl"
                        : " hover:text-[black] hover:bg-gray-200"
                        }`}
                >
                    <BsBookmarkDash />
                    <p>LGA</p>
                </Link>
                {/* User Request */}
                <Link
                    to="/user/dashboard/user-request"
                    className={`flex gap-2 my-2 items-center rounded-md  p-2  ${currentPage.includes("user-request")
                        ? "bg-primary90 text-white drop-shadow-2xl"
                        : " hover:text-[black] hover:bg-gray-200"
                        }`}
                >
                    <HiOutlineUserPlus />
                    <p>User Request</p>
                </Link>
                {/* Message */}
                <Link
                    to="/user/dashboard/message"
                    className={`flex gap-2 my-2 items-center rounded-md  p-2  ${currentPage.includes("message")
                        ? "bg-primary90 text-white drop-shadow-2xl"
                        : " hover:text-[black] hover:bg-gray-200"
                        }`}
                >
                    <HiOutlineChatBubbleOvalLeftEllipsis />
                    <p>Message</p>
                </Link>
                {/* Settings */}
                <Link
                    to="/user/dashboard/settings"
                    className={`flex gap-2 my-2 items-center rounded-md  p-2  ${currentPage.includes("settings")
                        ? "bg-primary90 text-white drop-shadow-2xl"
                        : " hover:text-[black] hover:bg-gray-200"
                        }`}
                >
                    <FiSettings />
                    <p>Settings</p>
                </Link>
                {/* My Profile */}
                <Link
                    to="/user/dashboard/profile"
                    className={`flex gap-2 my-2 items-center rounded-md  p-2  ${currentPage.includes("profile")
                        ? "bg-primary90 text-white drop-shadow-2xl"
                        : " hover:text-[black] hover:bg-gray-200"
                        }`}
                >
                    <FaRegUser />
                    <p>My Profile</p>
                </Link>
                {/* Logout */}
                <Link
                    to="/user/dashboard/logout"
                    className={`flex gap-2 my-2 items-center rounded-md  p-2  ${currentPage.includes("logout")
                        ? "bg-primary90 text-white drop-shadow-2xl"
                        : " hover:text-[black] hover:bg-gray-200"
                        }`}
                >
                    <BiLogOut />
                    <p>Logout</p>
                </Link>
            </div>
        </div>
    )
}

export default DashboardMenu