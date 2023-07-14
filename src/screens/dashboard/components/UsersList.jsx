import React from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

const UsersList = () => {
    const array = [1, 2, 3, 4]

    return (
        <div className='min-w-[1000px]'>
            <div className='flex gap-2 my-8 justify-start'>
                <input className='outline-0 bg-transparent text-[14px] font-[400] rounded-[8px] border-secondary30 border p-2' placeholder="Patient, or SPHC or CLGA" />
                <button className="bg-primary90 p-2 text-light10 rounded-[8px]">Search</button>
            </div>
            <table className="cursor-default w-full">
                <tr>
                    <th>SN</th>
                    <th>Staff Name</th>
                    <th>Staff ID</th>
                    <th>Staff</th>
                    <th>Date Created</th>
                    <th>Phone Number</th>
                    <th>Cadre</th>
                </tr>
                {array.map((index) => <tr key={index} className="hover:bg-[#e5e5e5] text-[#636363] h-[50px]">
                    <td>01</td>
                    <td>Bagiwa Clinic</td>
                    <td>26223</td>
                    <td>Giwa</td>
                    <td>21.03.2021</td>
                    <td className=''>08052672772</td>
                    <td className=''>PSI</td>

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
            </div></div>
    )
}

export default UsersList