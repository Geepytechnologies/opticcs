import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import axiosInstance from '../../../utils/axios'
import CustomToast from '../../../components/CustomToast'

const UsersList = () => {
    const array = [1, 2, 3, 4]
    const [healthworkers, setHealthworkers] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [showToast, setShowToast] = useState(false)
    const [toastmessage, setToastmessage] = useState("")
    const [toastStatus, setToastStatus] = useState("")

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }


    const loadToast = (myMessage, status) => {
        scrollToTop();
        setToastmessage(myMessage)
        setShowToast(true);
        setToastStatus(status)
    }
    const handleToastClose = () => {
        setShowToast(false);
    };


    const getAllUnverifiedworkers = async () => {
        try {
            const res = await axiosInstance.get('/users/find/unverified')
            setHealthworkers(res.data.result)
        } catch (error) {

        }
    }
    const approveWorker = async (id) => {
        try {
            const res = await axiosInstance.put(`/admin/healthfacility/verify/${id}`);
            res.data && loadToast("User Approved", "success")
        } catch (error) {

        }
    }
    useEffect(() => {
        getAllUnverifiedworkers()
    }, [])

    return (
        <>
            {showToast && (
                <CustomToast toastmessage={toastmessage} onClose={handleToastClose} status={toastStatus} />
            )}
            <div className='min-w-[1000px]'>
                <div className='flex gap-2 my-8 justify-start'>
                    <input className='outline-0 bg-transparent text-[14px] font-[400] rounded-[8px] border-secondary30 border p-2' placeholder="Patient, or SPHC or CLGA" />
                    <button className="bg-primary90 p-2 text-light10 rounded-[8px]">Search</button>
                </div>
                <table className="cursor-default w-full">
                    <tr>
                        <th>SN</th>
                        <th>State PHC Name</th>
                        <th>LGA ID</th>
                        <th>Ward</th>
                        <th>Date Created</th>
                        <th>Actions</th>
                    </tr>
                    {healthworkers?.map((item, index) => <tr key={index} className="hover:bg-[#e5e5e5] text-[#636363] h-[50px]">
                        <td>{item.id}</td>
                        <td>{item.healthFacility}</td>
                        <td>{item.lga}</td>
                        <td>{item.ward}</td>
                        <td>{item.created_at}</td>
                        <td onClick={() => approveWorker(item.id)} className='text-[#027D52] cursor-pointer'>Approve</td>
                        <td className='text-[#B02A37] cursor-pointer'>Decline</td>

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
        </>
    )
}

export default UsersList