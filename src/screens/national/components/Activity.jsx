import React from 'react'
import { LuCalendarDays } from 'react-icons/lu'
import { motion } from "framer-motion"

const Activity = () => {
    return (
        <motion.div initial={{
            opacity: 0,
        }}
            animate={{
                opacity: 1,
            }}
            transition={{
                duration: 1.5,
            }} className='grid grid-cols-1 lg:grid-cols-2 gap-5 min-w-[1000px] overflow-x-scroll mt-7'>
            {/* Activity 1 */}
            <div className=' flex flex-col gap-5 min-w-[500px] '>
                <p className='text-primary90 text-[24px] font-[600]'>Activity 1</p>
                <div className='bg-primary10 flex flex-col items-center justify-center'>
                    <p className='text-primary90 text-[12px] font-[500]'>To Increase the number of ANC visits, following the first antenatal visit until delivery, thereby reducing dropout rates
                    </p>
                </div>
                {/* information tab */}
                <div className='flex flex-col gap-2'>
                    <p className='font-[500] text-[14px] text-dark90'>Number of women who attended ANC after a follow- up visit or call from WDC/CHIPS/Health provider</p>
                    {/* 1 indicator alone */}
                    <div className=''>
                        <div className='flex items-center px-4 bg-primary90 gap-8 min-h-[100px] min-w-[100%] rounded-[20px]'>
                            <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                                <LuCalendarDays className='text-white' />
                            </div>
                            <div className='flex flex-col text-white'>
                                <h2 className='text-[20px] font-[600]'>0</h2>
                                <h2 className='text-[10px] font-[400]'>This is the total number of women who had missed their ANC appointments but later visited the health facility after a follow-up call or visit from the CHIPS/WDCs agents</h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* information tab2 */}
                <div className='flex flex-col gap-2'>
                    <p className='font-[500] text-[14px] text-dark90'>Number of women attending ANC who reported they were satisfied with services received</p>
                    {/* 2 indicators side by side */}
                    <div className='flex items-center gap-3'>
                        <div className='flex items-center px-4 bg-primary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]'>
                            <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                                <LuCalendarDays className='text-white' />
                            </div>
                            <div className='flex flex-col text-white'>
                                <h2 className='text-[20px] font-[600]'>0</h2>
                                <h2 className='text-[10px] font-[400]'> Number of women who attended ANC and reported being satified with ANC services received</h2>
                            </div>
                        </div>
                        <div className='flex items-center px-4 bg-secondary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]'>
                            <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                                <LuCalendarDays className='text-dark50' />
                            </div>
                            <div className='flex flex-col text-dark50'>
                                <h2 className='text-[20px] font-[600]'>0</h2>
                                <h2 className='text-[10px] font-[400]'>Total number of women who attended antenatal care and were interviewed</h2>
                            </div>
                        </div>
                    </div>
                    {/* 1 indicator alone */}
                    <div className=''>
                        <div className='flex items-center px-4 bg-primary90 gap-8 min-h-[100px] min-w-[400px] rounded-[20px]'>
                            <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                                <LuCalendarDays className='text-white' />
                            </div>
                            <div className='flex flex-col text-white'>
                                <h2 className='text-[20px] font-[600]'>0</h2>
                                <h2 className='text-[10px] font-[400]'>Numerator/Denominator</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Activity 2 */}
            <div className=' flex flex-col min-w-[500px] gap-5'>
                <p className='text-primary90 text-[24px] font-[600]'>Activity 2</p>
                <div className='bg-primary10 flex flex-col items-center justify-center'>
                    <p className='text-primary90 text-[12px] font-[500]'>To build capacity of healthcare workers on the provision of quality ANC services and integrated of PHC
                    </p>
                </div>
                {/* information tab */}
                <div className='flex flex-col gap-2'>
                    <p className='font-[500] text-[14px] text-dark90'>Number of antenatal clinic staff trained in the control of malaria during pregnancy</p>
                    {/* 1 indicator alone */}
                    <div className=''>
                        <div className='flex items-center px-4 bg-primary90 gap-8 min-h-[100px] min-w-[400px] rounded-[20px]'>
                            <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                                <LuCalendarDays className='text-white' />
                            </div>
                            <div className='flex flex-col text-white'>
                                <h2 className='text-[20px] font-[600]'>0</h2>
                                <h2 className='text-[10px] font-[400]'>This is the number of antenatal care providers who received training on malaria during pregnancy in the past 12 months</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='font-[500] text-[14px] text-dark90'>Number of antenatal clinic staff trained in PMTCT services</p>
                    {/* 1 indicator alone */}
                    <div className=''>
                        <div className='flex items-center px-4 bg-primary90 gap-8 min-h-[100px] min-w-[400px] rounded-[20px]'>
                            <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                                <LuCalendarDays className='text-white' />
                            </div>
                            <div className='flex flex-col text-white'>
                                <h2 className='text-[20px] font-[600]'>0</h2>
                                <h2 className='text-[10px] font-[400]'>This is the number of antenatal care providers who received training on PMTCT services provision in the past 12 months</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='font-[500] text-[14px] text-dark90'>Number of antenatal clinic staff trained on COVID-19 vaccination in pregnancy</p>
                    {/* 1 indicator alone */}
                    <div className=''>
                        <div className='flex items-center px-4 bg-primary90 gap-8 min-h-[100px] min-w-[400px] rounded-[20px]'>
                            <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                                <LuCalendarDays className='text-white' />
                            </div>
                            <div className='flex flex-col text-white'>
                                <h2 className='text-[20px] font-[600]'>0</h2>
                                <h2 className='text-[10px] font-[400]'>This is the number of antenatal care providers who received training on COVID-19 in pregnancy in the past 12 months</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='font-[500] text-[14px] text-dark90'>Number of antenatal clinic staff trained in TB/HIV services</p>
                    {/* 1 indicator alone */}
                    <div className=''>
                        <div className='flex items-center px-4 bg-primary90 gap-8 min-h-[100px] min-w-[400px] rounded-[20px]'>
                            <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                                <LuCalendarDays className='text-white' />
                            </div>
                            <div className='flex flex-col text-white'>
                                <h2 className='text-[20px] font-[600]'>0</h2>
                                <h2 className='text-[10px] font-[400]'>This is the number of antenatal care providers who received training on TB/HIV services provision in the past 12 months</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Activity 3 */}
            <div className=' flex flex-col min-w-[500px] gap-5'>
                <p className='text-primary90 text-[24px] font-[600]'>Activity 3</p>
                <div className='bg-primary10 flex flex-col items-center justify-center'>
                    <p className='text-primary90 text-[12px] font-[500]'>To obtain data that can be used towards informing policy makers on ANC optimizat
                    </p>
                </div>
                {/* information tab */}
                <div className='flex flex-col gap-2'>
                    <p className='font-[500] text-[14px] text-dark90'>Proportion of selected health facilities with complete ANC service data</p>
                    {/* 2 indicators side by side */}
                    <div className='flex items-center gap-3'>
                        <div className='flex items-center px-4 bg-primary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]'>
                            <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                                <LuCalendarDays className='text-white' />
                            </div>
                            <div className='flex flex-col text-white'>
                                <h2 className='text-[20px] font-[600]'>0</h2>
                                <h2 className='text-[10px] font-[400]'>Number of intervention facilities with complete, accurate and timely data reporting</h2>
                            </div>
                        </div>
                        <div className='flex items-center px-4 bg-secondary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]'>
                            <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                                <LuCalendarDays className='text-dark50' />
                            </div>
                            <div className='flex flex-col text-dark50'>
                                <h2 className='text-[20px] font-[600]'>0</h2>
                                <h2 className='text-[10px] font-[400]'>Total number of intervention facilities</h2>
                            </div>
                        </div>
                    </div>
                    {/* 1 indicator alone */}
                    <div className=''>
                        <div className='flex items-center px-4 bg-primary90 gap-8 min-h-[100px] min-w-[400px] rounded-[20px]'>
                            <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                                <LuCalendarDays className='text-white' />
                            </div>
                            <div className='flex flex-col text-white'>
                                <h2 className='text-[20px] font-[600]'>0</h2>
                                <h2 className='text-[10px] font-[400]'>Numerator/Denominator</h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* information tab2 */}
                <div className='flex flex-col gap-2'>
                    <p className='font-[500] text-[14px] text-dark90'>Number of women attending ANC who reported they were satisfied with services received</p>
                    {/* 2 indicators side by side */}
                    <div className='flex items-center gap-3'>
                        <div className='flex items-center px-4 bg-primary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]'>
                            <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                                <LuCalendarDays className='text-white' />
                            </div>
                            <div className='flex flex-col text-white'>
                                <h2 className='text-[20px] font-[600]'>0</h2>
                                <h2 className='text-[10px] font-[400]'> Number of women who attended ANC and reported being satified with ANC services received</h2>
                            </div>
                        </div>
                        <div className='flex items-center px-4 bg-secondary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]'>
                            <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                                <LuCalendarDays className='text-dark50' />
                            </div>
                            <div className='flex flex-col text-dark50'>
                                <h2 className='text-[20px] font-[600]'>0</h2>
                                <h2 className='text-[10px] font-[400]'>Total number of women who attended antenatal care and were interviewed</h2>
                            </div>
                        </div>
                    </div>
                    {/* 1 indicator alone */}
                    <div className=''>
                        <div className='flex items-center px-4 bg-primary90 gap-8 min-h-[100px] min-w-[400px] rounded-[20px]'>
                            <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                                <LuCalendarDays className='text-white' />
                            </div>
                            <div className='flex flex-col text-white'>
                                <h2 className='text-[20px] font-[600]'>0</h2>
                                <h2 className='text-[10px] font-[400]'>Numerator/Denominator</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Activity