import React from 'react'
import { IoMdInformationCircle } from 'react-icons/io'
import PieChart from '../charts/Piechart'
import ExpectedDelivery from '../charts/ExpectedDelivery'
import GenericPie from '../charts/GenericPie'

const IndicatorNavigatorScreen5 = () => {
    return (
        <div>
            {/* chart 1 */}
            <div className='grid mt-9'>
                {/* Pie chart (Gravidity) */}
                <div className=' min-w-[250px] shadow-xl'>
                    <div className='flex items-center justify-between px-2 py-4'>
                        <div className='flex flex-col'>
                            <p className='font-[500] text-black'>Antenatal Schdules</p>
                            <p className='font-[400] text-[#4F4F4F] text-[14px]'>5,987,34</p>
                        </div>
                        <IoMdInformationCircle className='text-[#BDBDBD] text-[25px]' />

                    </div>
                    <hr />
                    {/* The pie chart diagram */}
                    <GenericPie
                        series={[60, 40]}
                        colors={["#14A673", "#F3722C"]}
                    />
                    {/* info about chart */}
                    <div className='flex gap-7 px-2 py-4'>
                        <div className='flex gap-2 items-center'>
                            <div className='w-[7px] h-[7px] rounded-full bg-primary70'></div>
                            <span>Attended</span>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <div className='w-[7px] h-[7px] rounded-full bg-[#F3722C]'></div>
                            <span>Miss Appointment</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndicatorNavigatorScreen5