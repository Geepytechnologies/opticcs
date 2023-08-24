import React from 'react'
import { AiOutlinePrinter } from 'react-icons/ai'
import { IoReturnUpBackOutline } from 'react-icons/io5'

const Patientdetailschedule = () => {
    return (
        <div className='p-3'>
            <div className='flex gap-2 items-center justify-between px-2'>
                <div className='flex gap-2 items-center justify-center'>
                    <AiOutlinePrinter />
                    <span>Print Page</span>
                </div>
                <div className='text-white bg-primary90 text-[12px] font-[500] p-2 rounded-[10px]'>Download PDF</div>
            </div>
            <div onClick={() => navigate(-1)} className='flex cursor-pointer flex-1 items-center gap-2 my-8 font-[600] text-[24px] text-primary90'>
                <IoReturnUpBackOutline />
                <p>Patient View</p>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-8'>
                {/* 1 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Hospital Number<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{""}</p>
                    </div>
                    <div>
                        <label>First Name<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{""}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Patientdetailschedule