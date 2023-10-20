import React, { useState } from "react"
import { HiArrowsUpDown } from "react-icons/hi2"
import ActiveUsers from "../components/ActiveUsers";
import Activitylog from "../components/Activitylog";
import { LuCalendarDays } from "react-icons/lu";
import { useEffect } from "react";
import axiosInstance from "../../../utils/axios";

const UsageAnalytics = () => {
    const [navigatorSlide, setNavigatorSlide] = useState(1);
    let componentToRender;

    switch (navigatorSlide) {
        case 1:
            componentToRender = <Activitylog />;
            break;
        case 2:
            componentToRender = <ActiveUsers />;
            break;
        default:
            componentToRender = null;
            break;
    }
    const [healthWorkers, setHealthWorkers] = useState(0)
    const [patients, setPatients] = useState(0)
    const [statenumbers, setStatenumbers] = useState(0)
    const [hfnumbers, setHfnumbers] = useState(0)

    const getAllHealthWorkers = async () => {
        try {
            const res = await axiosInstance.get('/users/find');
            const filtered = res.data.result.filter((item) => item.healthfacility == healthfacilityid)
            setHealthWorkers(filtered.length)
        } catch (err) {

        }
    }
    const getAllPatients = async () => {
        try {
            const res = await axiosInstance.get('/patients/find');
            const filtered = res.data.result.filter((item) => item.healthfacility == healthfacilityid)

            setPatients(filtered.length)
        } catch (err) {

        }
    }

    useEffect(() => {
        getAllHealthWorkers()
        getAllPatients()
    }, [])
    return (
        <div>
            <div className='bg-primary10'>
                {/* dashboard */}
                <div className='flex w-full items-center justify-between px-3 py-3'>
                    <div className='flex gap-2 items-center p-2'>
                        <HiArrowsUpDown />
                        <p className='text-secondary400 text-[18px] font-[600]'>Usage Analytics</p>
                    </div>
                </div>
                {/* box indicators */}
                <div className='flex items-center justify-center gap-3 mt-5'>
                    {/* indicator1 */}
                    <div className='flex items-center px-4 bg-[#7A6EFE] gap-8 h-[100px] w-[200px] rounded-[20px]'>
                        <div className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                            <LuCalendarDays className='text-white' />
                        </div>
                        <div className='flex items-center flex-col text-white'>
                            <h2 className='text-[32px] font-[600]'>{patients}</h2>
                            <h2 className='text-[14px] font-[400]'>Patients</h2>
                        </div>
                    </div>
                    {/* indicator2 */}
                    <div className='flex items-center px-4 bg-[#FF5363] gap-8 h-[100px] w-[200px] rounded-[20px]'>
                        <div className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                            <LuCalendarDays className='text-white' />
                        </div>
                        <div className='flex flex-col items-center text-white'>
                            <h2 className='text-[32px] font-[600]'>{healthWorkers}</h2>
                            <h2 className='text-[14px] text-center font-[400]'>Health Workers</h2>
                        </div>
                    </div>
                </div>
                <div className='w-full flex items-center justify-center font-inter my-5'>
                    <div className='bg-white w-[95%] flex flex-col items-center justify-start pl-6 py-4'>
                        {/* navigator */}
                        <div className='flex items-center gap-4 w-full mb-8'>
                            <div onClick={() => setNavigatorSlide(1)} className={`cursor-pointer text-center ${navigatorSlide === 1 ? 'text-primary70 border-b-4 font-[500] pb-2 border-primary70' : "text-light90 pb-2 font-[500]"}`}>Activity Log</div>
                            <div onClick={() => setNavigatorSlide(2)} className={`cursor-pointer text-center ${navigatorSlide === 2 ? 'text-primary70 border-b-4 font-[500] pb-2 border-primary70' : "text-light90 pb-2 font-[500]"}`}>Active Users  </div>

                        </div>

                        {componentToRender}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsageAnalytics;