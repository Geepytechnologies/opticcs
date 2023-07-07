import React from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2"
import { IoMdNotificationsOutline } from "react-icons/io"
import { LuCalendarDays } from 'react-icons/lu'
import { RxDashboard } from 'react-icons/rx'
import IndicatorOutcome from '../components/IndicatorOutcome'
import IntermediateResult1 from '../components/IntermediateResult1'
import Activity from '../components/Activity'


const DashboardHome = () => {
    return (
        <div>
            {/* content */}
            <div className='bg-primary10'>
                {/* dashboard */}
                <div className='flex gap-2 items-center p-2'>
                    <RxDashboard />
                    <p className='text-secondary400 text-[18px] font-[600]'>Dashboard</p>
                </div>
                {/* box indicators */}
                <div className='flex items-center justify-center gap-3 mt-5'>
                    {/* indicator1 */}
                    <div className='flex items-center px-4 bg-[#7A6EFE] gap-8 h-[100px] w-[200px] rounded-[20px]'>
                        <div className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                            <LuCalendarDays className='text-white' />
                        </div>
                        <div className='flex flex-col text-white'>
                            <h2 className='text-[32px] font-[600]'>2390</h2>
                            <h2 className='text-[14px] font-[400]'>Patients</h2>
                        </div>
                    </div>
                    {/* indicator2 */}
                    <div className='flex items-center px-4 bg-[#FF5363] gap-8 h-[100px] w-[200px] rounded-[20px]'>
                        <div className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                            <LuCalendarDays className='text-white' />
                        </div>
                        <div className='flex flex-col text-white'>
                            <h2 className='text-[32px] font-[600]'>2390</h2>
                            <h2 className='text-[14px] font-[400]'>Health Workers</h2>
                        </div>
                    </div>
                    {/* indicator3 */}
                    <div className='flex items-center px-4 bg-[#FFA901] gap-8 h-[100px] w-[200px] rounded-[20px]'>
                        <div className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                            <LuCalendarDays className='text-white' />
                        </div>
                        <div className='flex flex-col text-white'>
                            <h2 className='text-[32px] font-[600]'>2390</h2>
                            <h2 className='text-[14px] font-[400]'>State</h2>
                        </div>
                    </div>
                    {/* indicator4 */}
                    <div className='flex items-center px-4 bg-[#22A9FA] gap-8 h-[100px] w-[200px] rounded-[20px]'>
                        <div className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                            <LuCalendarDays className='text-white' />
                        </div>
                        <div className='flex flex-col text-white'>
                            <h2 className='text-[32px] font-[600]'>2390</h2>
                            <h2 className='text-[14px] font-[400]'>Health Facility</h2>
                        </div>
                    </div>
                </div>
                {/* download csv */}
                <div className='flex items-center justify-end mt-[40px] pr-4'>
                    <button className='bg-primary90 rounded-[8px] text-light10 text-[14px] p-2'>Download CSV</button>
                </div>
                {/* selectbox1 */}
                <div className='w-full flex items-center justify-center my-5'>
                    <div className='bg-white w-[95%] py-2 flex flex-row items-center justify-around gap-3'>
                        {/* 1 */}
                        <div className='flex flex-col'>
                            <label className='text-primary90 font-[400]'>Filter</label>
                            <select defaultValue="" className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] min-w-[180px] border border-[#C6C7C880]">
                                <option value="" disabled >
                                    General
                                </option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>

                        </div>
                        {/* 2 */}
                        <div className='flex flex-col'>
                            <label className='text-primary90 font-[400]'>Type</label>
                            <select defaultValue="" className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] min-w-[180px] border border-[#C6C7C880]">
                                <option value="" disabled >
                                    General
                                </option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>

                        </div>
                        {/* 3 */}
                        <div className='flex flex-col'>
                            <label className='text-primary90 font-[400]'>Date From</label>
                            <select defaultValue="" className="p-[16px] myselect text-secondary30 bg-transparent outline-none min-w-[180px] rounded-[8px] border border-[#C6C7C880]">
                                <option value="" disabled >
                                    Date From
                                </option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>

                        </div>
                        {/* 4 */}
                        <div className='flex flex-col'>
                            <label className='text-primary90 font-[400]'>Date To</label>
                            <select defaultValue="" className="p-[16px] myselect text-secondary30 bg-transparent outline-none min-w-[180px] rounded-[8px] border border-[#C6C7C880]">
                                <option value="" disabled >
                                    Date To
                                </option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>

                        </div>
                    </div>
                </div>
                {/* indicator outcome */}
                <div className='w-full flex items-center justify-center my-5'>
                    <div className='bg-white w-[95%] flex flex-col items-center justify-start pl-6 py-4'>
                        {/* navigator */}
                        <div className='flex items-center gap-4'>
                            <div className='text-primary70 border-b-4 font-[500] pb-2 border-primary70'>Outcome</div>
                            <div className='text-light90 border-b-4 font-[500] pb-2 border-primary70'>Intermediate Result 1</div>
                            <div className='text-primary70 border-b-4 font-[500] pb-2 border-primary70'>Intermediate Result 2</div>
                            <div className='text-primary70 border-b-4 font-[500] pb-2 border-primary70'>Activity 1-3</div>
                        </div>
                        {/* outcome analysis */}
                        <IndicatorOutcome />
                    </div>
                </div>
                {/* intermediate Result1 analysis */}
                <IntermediateResult1 />
                {/* activity analysis */}
                <Activity />
            </div>
        </div>
    )
}

export default DashboardHome