import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import axiosInstance from '../../../utils/axios'
import CustomToast from '../../../components/CustomToast'
import Pagination from '../../../components/Pagination'
import moment from 'moment'
import { useAuth } from '../hooks/useAuth'

const UsersList = () => {
    const { healthfacilityAuth } = useAuth()
    const { healthfacilityid } = healthfacilityAuth.others;
    const [healthworkers, setHealthworkers] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [showToast, setShowToast] = useState(false)
    const [toastmessage, setToastmessage] = useState("")
    const [toastStatus, setToastStatus] = useState("")
    //pagination
    const [currentpage, setCurrentpage] = useState(1)
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
            const filtered = res.data.result.filter((item) => item.healthfacility == healthfacilityid)
            setHealthworkers(filtered)
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
                        <td>{item.healthworker}</td>
                        <td>{item.lga}</td>
                        <td>{item.ward}</td>
                        <td>{moment(item.createdat).format("yyyy-MM-DD")}</td>
                        <td onClick={() => approveWorker(item.id)} className='text-[#027D52] cursor-pointer'>Approve</td>
                        <td className='text-[#B02A37] cursor-pointer'>Decline</td>

                    </tr>)}

                </table>
                {/* pagination */}
                <Pagination currentpage={currentpage} setCurrentpage={setCurrentpage} pages={healthworkers?.length / 10} />

            </div>
        </>
    )
}

export default UsersList