import React, { useState, useEffect } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import axiosInstance from '../../../utils/axios'
import moment from "moment"
import Pagination from '../../../components/Pagination'

const StateList = () => {
    const [states, setStates] = useState()
    const [isActive, setIsActive] = useState(1)
    //pagination
    const [currentpage, setCurrentpage] = useState(1)


    const getAllStates = async () => {
        try {
            const res = await axiosInstance.get("/admin/state/find")
            setStates(res.data.result)
        } catch (error) {

        }
    }
    useEffect(() => {
        getAllStates()
    }, [])
    return (
        <div className='w-full '>
            <div className='flex gap-2 my-8 justify-start'>
                <input className='outline-0 bg-transparent text-[14px] font-[400] rounded-[8px] border-secondary30 border p-2' placeholder="Name or ID" />
                <button className="bg-primary90 p-2 text-light10 rounded-[8px]">Search</button>
            </div>
            <div className='w-full flex items-center justify-center'>
                <table className="cursor-default w-[95%]">
                    <tr>
                        <th>SN</th>
                        <th>State</th>
                        <th>State ID</th>
                        <th>Office Address</th>
                        <th>Date Created</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                    </tr>
                    {states?.map((item, index) =>
                        <tr key={index} className="hover:bg-[#e5e5e5] text-[#636363] h-[50px]">
                            <td>{item.id}</td>
                            <td>{item.state}</td>
                            <td>{item.stateid}</td>
                            <td>{item.officeaddress}</td>
                            <td>{moment(item.createdat).fromNow()}</td>
                            <td className=''>{item.phone}</td>
                            <td className=''>{item.email}</td>

                        </tr>)}

                </table>

            </div>
            {/* pagination */}
            <Pagination currentpage={currentpage} setCurrentpage={setCurrentpage} pages={states?.length / 10} />
        </div>
    )
}

export default StateList