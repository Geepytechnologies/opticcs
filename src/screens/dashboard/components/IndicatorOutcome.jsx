import React from 'react'
import { LuCalendarDays } from 'react-icons/lu'

const IndicatorOutcome = () => {
    return (
        <div className='flex items-center justify-center w-full mt-7'>
            <div className='w-[80%] flex flex-col gap-5'>
                <p className='text-primary90 text-[24px] font-[600]'>Indicator Outcome</p>
                <div className='bg-primary10 flex flex-col items-center justify-center'>
                    <p className='text-primary90 text-[12px] font-[500]'>To optimize ante-natal care (ANC) uptake by ensuring every pregnant woman
                        attending ANC in PHCs receives quality integrated PHC services and care
                    </p>
                </div>
                <p className=''>Proportion of pregnant women with at least 4 ANC visits across intervention facilities before (baseline) and after (endline) project</p>
                {/* 2 indicators side by side */}
                <div className='flex items-center gap-3'>
                    <div className='flex items-center px-4 bg-primary90 gap-8 h-[100px] w-[200px] rounded-[20px]'>
                        <div className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                            <LuCalendarDays className='text-white' />
                        </div>
                        <div className='flex flex-col text-white'>
                            <h2 className='text-[32px] font-[600]'>2390</h2>
                            <h2 className='text-[14px] font-[400]'>Patients</h2>
                        </div>
                    </div>
                    <div className='flex items-center px-4 bg-secondary90 gap-8 h-[100px] w-[200px] rounded-[20px]'>
                        <div className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                            <LuCalendarDays className='text-dark50' />
                        </div>
                        <div className='flex flex-col text-dark50'>
                            <h2 className='text-[32px] font-[600]'>2390</h2>
                            <h2 className='text-[14px] font-[400]'>Patients</h2>
                        </div>
                    </div>
                </div>
                {/* 1 indicator alone */}
                <div className='pl-3'>
                    <div className='flex items-center px-4 bg-primary90 gap-8 h-[100px] w-[400px] rounded-[20px]'>
                        <div className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                            <LuCalendarDays className='text-white' />
                        </div>
                        <div className='flex flex-col text-white'>
                            <h2 className='text-[32px] font-[600]'>2390</h2>
                            <h2 className='text-[14px] font-[400]'>Patients</h2>
                        </div>
                    </div>
                </div>
                {/* change in the anc */}
                <div className='flex items-center justify-center text-dark50'>
                    <p>Change in the ANC 4 coverage of intervention facilities across project period</p>
                </div>
                {/* 1 indicator alone */}
                <div>
                    <div className='flex items-center px-4 bg-primary90 gap-8 h-[100px] w-[200px] rounded-[20px]'>
                        <div className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                            <LuCalendarDays className='text-white' />
                        </div>
                        <div className='flex flex-col text-white'>
                            <h2 className='text-[32px] font-[600]'>2390</h2>
                            <h2 className='text-[14px] font-[400]'>Patients</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndicatorOutcome