import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { HiOutlineUserGroup } from 'react-icons/hi2'
import { IoBagAddOutline } from 'react-icons/io5'
import { LuCalendarDays } from 'react-icons/lu'
import axiosInstance from '../../../utils/axios'

const HealthFacility = () => {
    const [healthFacilities, setHealthfacilities] = useState()
    const getHealthfacilities = async () => {
        try {
            const res = await axiosInstance.get('/admin/healthfacility/find');
            setHealthfacilities(res.data)
        } catch (err) {

        }
    }
    useEffect(() => {
        getHealthfacilities()
    }, [])
    return (
        <div>
            <div className='bg-primary10'>
                {/* dashboard */}
                <div className='flex w-full items-center justify-between px-3 py-3'>
                    <div className='flex gap-2 items-center p-2'>
                        <IoBagAddOutline />
                        <p className='text-secondary400 text-[18px] font-[600]'>Health Facility</p>
                    </div>
                    <div className='flex gap-2 justify-end'>
                        <input className='outline-0 bg-transparent text-[14px] font-[400] rounded-[8px] border-secondary30 border p-2' placeholder="Patient, or SPHC or CLGA" />
                        <button className="bg-primary90 p-2 text-light10 rounded-[8px]">Search</button>
                    </div>
                </div>

                {/* selectbox1 */}
                <div className='w-full flex items-center justify-center my-5'>
                    <div className='bg-white w-auto m-3 min-w-[95%] py-2 flex flex-row items-center justify-around gap-3'>
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
                {/* patients table */}
                <div className='w-full flex items-center justify-center font-inter my-5'>
                    <div className='bg-white w-[95%] flex flex-col items-center justify-start pl-6 py-4'>

                        <table className="cursor-default w-full">
                            <tr>
                                <th>SN</th>
                                <th>Health facility Name</th>
                                <th>Healthfacility ID</th>
                                <th>Ward</th>
                                <th>Date Created</th>
                                <th>Actions</th>
                            </tr>
                            {healthFacilities?.map((item, index) => <tr key={index} className="hover:bg-[#e5e5e5] text-[#636363] h-[50px]">
                                <td>{item.id}</td>
                                <td>{item.healthfacilityname}</td>
                                <td>{item.healthfacilityID}</td>
                                <td>{item.ward}</td>
                                <td>{moment(item.createdat).fromNow()}</td>
                                <td className='text-primary90'>Message</td>
                                <td className='text-[#B02A37]'>Deactivate</td>

                            </tr>)}

                        </table>
                        {/* pagination */}
                        <div className="flex items-center mt-4">
                            <AiOutlineArrowLeft />
                            <div className=" text-center">1</div>
                            <div className=" text-center">2</div>
                            <div className=" text-center">3</div>
                            <div className=" text-center">4</div>
                            <AiOutlineArrowRight />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HealthFacility