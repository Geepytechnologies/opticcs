import React, { useState, useEffect } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import axiosInstance from '../../../utils/axios'
import moment from 'moment'

const UsersList = () => {
    const [stateusers, setStateusers] = useState()
    const [isActive, setIsActive] = useState(1)

    const getStateUsers = async () => {
        try {
            const res = await axiosInstance.get("/admin/state/find/users")
            setStateusers(res.data.result)
            console.log(res.data.result)
        } catch (error) {

        }
    }
    useEffect(() => {
        getStateUsers()
    }, [])
    return (
        <div className='min-w-[1000px]'>
            <div className='flex gap-2 my-8 justify-start'>
                <input className='outline-0 bg-transparent text-[14px] font-[400] rounded-[8px] border-secondary30 border p-2' placeholder="Patient, or SPHC or CLGA" />
                <button className="bg-primary90 p-2 text-light10 rounded-[8px]">Search</button>
            </div>
            <table className="cursor-default w-full">
                <thead>
                    <tr>
                        <th>SN</th>
                        <th>Staff Name</th>
                        <th>Staff ID</th>
                        <th>Account Type</th>
                        <th>Date Created</th>
                        <th>Phone Number</th>
                        <th>Cadre</th>
                    </tr>

                </thead>
                <tbody>
                    {stateusers?.map((item, index) => <tr key={index} className="hover:bg-[#e5e5e5] text-[#636363] h-[50px]">
                        <td>{item.id}</td>
                        <td>{item.staffname}</td>
                        <td>{item.staffid}</td>
                        <td>{item.accounttype}</td>
                        <td>{moment(item.createdat).fromNow()}</td>
                        <td className=''>{item.phone}</td>
                        <td className=''>{item.cadre}</td>

                    </tr>)}

                </tbody>

            </table>
            {/* pagination */}
            <div className='flex items-center justify-center mt-4'>
                <div className="flex items-center cursor-pointer gap-3">
                    <AiOutlineArrowLeft className='bg-primary90 text-white rounded-lg font-[600]' />
                    <div className={`text-center ${isActive && 'text-red-600'}`}>1</div>
                    <div className=" text-center">2</div>
                    <div className=" text-center">3</div>
                    <div className=" text-center">4</div>
                    <AiOutlineArrowRight className='bg-primary90 text-white rounded-lg font-[600]' />
                </div>
            </div>
        </div>
    )
}

export default UsersList