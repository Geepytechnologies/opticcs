import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import axiosInstance from '../../../utils/axios'

const StateList = () => {
    const array = [1, 2, 3, 4]
    const [facilitylist, setFacilityList] = useState()
    const getHealthfacilities = async () => {
        try {
            const res = await axiosInstance.get("/admin/healthfacility/find")
            setFacilityList(res.data)
        } catch (error) {

        }
    }
    useEffect(() => {
        getHealthfacilities()
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
                        <th>Health Facility</th>
                        <th>Health Facility ID</th>
                        <th>Office Address</th>
                        <th>Date Created</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                    </tr>
                    {facilitylist?.map((item, index) => <tr key={index} className="hover:bg-[#e5e5e5] text-[#636363] h-[50px]">
                        <td>{item.id}</td>
                        <td>{item.healthfacilityname}</td>
                        <td>{item.healthfacilityID}</td>
                        <td>{item.officeaddress}</td>
                        <td>{item.createdAt}</td>
                        <td className=''>{item.phone}</td>
                        <td className=''>{item.email}</td>

                    </tr>)}

                </table>

            </div>
            {/* pagination */}
            <div className="flex items-center mt-4">
                <AiOutlineArrowLeft />
                <div className=" text-center">1</div>
                <div className=" text-center">2</div>
                <div className=" text-center">3</div>
                <div className=" text-center">4</div>
                <AiOutlineArrowRight />
            </div></div>
    )
}

export default StateList