import React from 'react'
import { LuCalendarDays } from 'react-icons/lu'
import { motion } from "framer-motion"

const IntermediateResult1 = ({ patients }) => {
    return (
        <motion.div initial={{
            opacity: 0,
        }}
            animate={{
                opacity: 1,
            }}
            transition={{
                duration: 1.5,
            }} className='flex items-center justify-center w-full mt-7'>
            <div className='w-[80%] flex flex-col gap-5'>
                <p className='text-primary90 text-[24px] font-[600]'>Intermediate Result 1</p>
                <div className='bg-primary10 flex flex-col items-center justify-center'>
                    <p className='text-primary90 text-[12px] font-[500]'>To improve integration of ANC with other PHC services (HIV, Tuberculosis, Malaria, COVID-19 and Routine Immunization)
                    </p>
                </div>
                {/* information tab */}
                <div className='flex flex-col gap-2'>
                    <p className='font-[500] text-[14px] text-dark90'>Proportion of pregnant women who received two or more doses of IPTp while attending antenatal care from intervention facilities</p>
                    {/* 2 indicators side by side */}
                    <div className='flex items-center gap-3'>
                        <div className='flex items-center px-4 bg-primary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]'>
                            <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                                <LuCalendarDays className='text-white' />
                            </div>
                            <div className='flex flex-col text-white'>
                                <h2 className='text-[20px] font-[600]'>0</h2>
                                <h2 className='text-[10px] font-[400]'>Number of women aged 15-49, receiving antenatal care and reported to have received two or more doses of IPTp</h2>
                            </div>
                        </div>
                        <div className='flex items-center px-4 bg-secondary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]'>
                            <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                                <LuCalendarDays className='text-dark50' />
                            </div>
                            <div className='flex flex-col text-dark50'>
                                <h2 className='text-[20px] font-[600]'>{patients}</h2>
                                <h2 className='text-[10px] font-[400]'>Total number of women who attended antenatal clinic</h2>
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
                    <p className='font-[500] text-[14px] text-dark90'>Proportion of health facilities providing PMTCT services</p>
                    {/* 2 indicators side by side */}
                    <div className='flex items-center gap-3'>
                        <div className='flex items-center px-4 bg-primary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]'>
                            <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                                <LuCalendarDays className='text-white' />
                            </div>
                            <div className='flex flex-col text-white'>
                                <h2 className='text-[20px] font-[600]'>0</h2>
                                <h2 className='text-[10px] font-[400]'>Number of intervention facilitities providing ANC services and also reported providing PMTCT services during the facility supervisiory visits</h2>
                            </div>
                        </div>
                        <div className='flex items-center px-4 bg-secondary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]'>
                            <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                                <LuCalendarDays className='text-dark50' />
                            </div>
                            <div className='flex flex-col text-dark50'>
                                <h2 className='text-[20px] font-[600]'>0</h2>
                                <h2 className='text-[10px] font-[400]'>Total number of intervention sites</h2>
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
                {/* information tab3 */}
                <div className='flex flex-col gap-2'>
                    <p className='font-[500] text-[14px] text-dark90'>Proportion of of pregnant women who are tested for malaria during their antenatal care visits.</p>
                    {/* 2 indicators side by side */}
                    <div className='flex items-center gap-3'>
                        <div className='flex items-center px-4 bg-primary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]'>
                            <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                                <LuCalendarDays className='text-white' />
                            </div>
                            <div className='flex flex-col text-white'>
                                <h2 className='text-[20px] font-[600]'>0</h2>
                                <h2 className='text-[10px] font-[400]'>Number of pregnant women who are tested for malaria</h2>
                            </div>
                        </div>
                        <div className='flex items-center px-4 bg-secondary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]'>
                            <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                                <LuCalendarDays className='text-dark50' />
                            </div>
                            <div className='flex flex-col text-dark50'>
                                <h2 className='text-[20px] font-[600]'>0</h2>
                                <h2 className='text-[10px] font-[400]'>Total number of women who attended antenatal clinic</h2>
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
                {/* information tab4 */}
                <div className='flex flex-col gap-2'>
                    <p className='font-[500] text-[14px] text-dark90'>Proportion of pregnant women who are HIV-positive and commenced on HAART</p>
                    {/* 2 indicators side by side */}
                    <div className='flex items-center gap-3'>
                        <div className='flex items-center px-4 bg-primary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]'>
                            <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                                <LuCalendarDays className='text-white' />
                            </div>
                            <div className='flex flex-col text-white'>
                                <h2 className='text-[20px] font-[600]'>0</h2>
                                <h2 className='text-[10px] font-[400]'>Number of pregnant women are commneced on HAART after testing positive for HIV</h2>
                            </div>
                        </div>
                        <div className='flex items-center px-4 bg-secondary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]'>
                            <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                                <LuCalendarDays className='text-dark50' />
                            </div>
                            <div className='flex flex-col text-dark50'>
                                <h2 className='text-[20px] font-[600]'>0</h2>
                                <h2 className='text-[10px] font-[400]'> Total number of HIV-positive women attending ANC</h2>
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
                {/* information tab5 */}
                <div className='flex flex-col gap-2'>
                    <p className='font-[500] text-[14px] text-dark90'>Percentage of pregnant women who test positive for malaria and receive appropriate treatment</p>
                    {/* 2 indicators side by side */}
                    <div className='flex items-center gap-3'>
                        <div className='flex items-center px-4 bg-primary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]'>
                            <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                                <LuCalendarDays className='text-white' />
                            </div>
                            <div className='flex flex-col text-white'>
                                <h2 className='text-[20px] font-[600]'>0</h2>
                                <h2 className='text-[10px] font-[400]'>Number of pregnant women who having tested positive malaria receive treatment for malaria. </h2>
                            </div>
                        </div>
                        <div className='flex items-center px-4 bg-secondary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]'>
                            <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                                <LuCalendarDays className='text-dark50' />
                            </div>
                            <div className='flex flex-col text-dark50'>
                                <h2 className='text-[20px] font-[600]'>0</h2>
                                <h2 className='text-[10px] font-[400]'>Total number of women test positive for malaria</h2>
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
                {/* information tab6 */}
                <div className='flex flex-col gap-2'>
                    <p className='font-[500] text-[14px] text-dark90'>Percentage of pregnant women who test positive for malaria and receive appropriate treatment</p>
                    {/* 2 indicators side by side */}
                    <div className='flex items-center gap-3'>
                        <div className='flex items-center px-4 bg-primary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]'>
                            <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                                <LuCalendarDays className='text-white' />
                            </div>
                            <div className='flex flex-col text-white'>
                                <h2 className='text-[20px] font-[600]'>0</h2>
                                <h2 className='text-[10px] font-[400]'>Number of pregnant women who having tested positive malaria receive treatment for malaria. </h2>
                            </div>
                        </div>
                        <div className='flex items-center px-4 bg-secondary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]'>
                            <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                                <LuCalendarDays className='text-dark50' />
                            </div>
                            <div className='flex flex-col text-dark50'>
                                <h2 className='text-[20px] font-[600]'>0</h2>
                                <h2 className='text-[10px] font-[400]'>Total number of women test positive for malaria</h2>
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
                {/* information tab7 */}
                <div className='flex flex-col gap-2'>
                    <p className='font-[500] text-[14px] text-dark90'>Percentage of antenatal (ANC) clients who are counseled and tested for HIV</p>
                    {/* 2 indicators side by side */}
                    <div className='flex items-center gap-3'>
                        <div className='flex items-center px-4 bg-primary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]'>
                            <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                                <LuCalendarDays className='text-white' />
                            </div>
                            <div className='flex flex-col text-white'>
                                <h2 className='text-[20px] font-[600]'>0</h2>
                                <h2 className='text-[10px] font-[400]'>Number of women age 15-49 who attended ANC clinic and was counseled and tested for HIV</h2>
                            </div>
                        </div>
                        <div className='flex items-center px-4 bg-secondary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]'>
                            <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                                <LuCalendarDays className='text-dark50' />
                            </div>
                            <div className='flex flex-col text-dark50'>
                                <h2 className='text-[20px] font-[600]'>0</h2>
                                <h2 className='text-[10px] font-[400]'>Total number of women aged 15-49 who attended antenatal clinic</h2>
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
                {/* information tab8 */}
                <div className='flex flex-col gap-2'>
                    <p className='font-[500] text-[14px] text-dark90'>Proportion of pregnant women who are screened for TB during ANC visits</p>
                    {/* 2 indicators side by side */}
                    <div className='flex items-center gap-3'>
                        <div className='flex items-center px-4 bg-primary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]'>
                            <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                                <LuCalendarDays className='text-white' />
                            </div>
                            <div className='flex flex-col text-white'>
                                <h2 className='text-[20px] font-[600]'>0</h2>
                                <h2 className='text-[10px] font-[400]'>Number of pregnant women screened for TB during their ANC.</h2>
                            </div>
                        </div>
                        <div className='flex items-center px-4 bg-secondary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]'>
                            <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                                <LuCalendarDays className='text-dark50' />
                            </div>
                            <div className='flex flex-col text-dark50'>
                                <h2 className='text-[20px] font-[600]'>0</h2>
                                <h2 className='text-[10px] font-[400]'>Total number of women who attended antenatal clinic.</h2>
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
                {/* information tab9 */}
                <div className='flex flex-col gap-2'>
                    <p className='font-[500] text-[14px] text-dark90'>Percentage of pregnant women who are referred to specialized care for TB and HIV if needed.</p>
                    {/* 2 indicators side by side */}
                    <div className='flex items-center gap-3'>
                        <div className='flex items-center px-4 bg-primary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]'>
                            <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                                <LuCalendarDays className='text-white' />
                            </div>
                            <div className='flex flex-col text-white'>
                                <h2 className='text-[20px] font-[600]'>0</h2>
                                <h2 className='text-[10px] font-[400]'>Number of  pregnant women referred to specialized care for TB and HIV.</h2>
                            </div>
                        </div>
                        <div className='flex items-center px-4 bg-secondary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]'>
                            <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                                <LuCalendarDays className='text-dark50' />
                            </div>
                            <div className='flex flex-col text-dark50'>
                                <h2 className='text-[20px] font-[600]'>0</h2>
                                <h2 className='text-[10px] font-[400]'>Total number of women with diagnosed TB and HIV</h2>
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
                                <h2 className='text-[20px] font-[600]'>0</h2>
                                <h2 className='text-[10px] font-[400]'>Numerator/Denominator</h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* information tab10 */}
                <div className='flex flex-col gap-2'>
                    <p className='font-[500] text-[14px] text-dark90'>Proportion of pregnant women who test positive for COVID-19 and receive appropriate care and treatment including referal.</p>
                    {/* 2 indicators side by side */}
                    <div className='flex items-center gap-3'>
                        <div className='flex items-center px-4 bg-primary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]'>
                            <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                                <LuCalendarDays className='text-white' />
                            </div>
                            <div className='flex flex-col text-white'>
                                <h2 className='text-[20px] font-[600]'>0</h2>
                                <h2 className='text-[10px] font-[400]'>Number of pregnant women who having tested positive malaria receive treatment for COVID-19 and refered</h2>
                            </div>
                        </div>
                        <div className='flex items-center px-4 bg-secondary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]'>
                            <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                                <LuCalendarDays className='text-dark50' />
                            </div>
                            <div className='flex flex-col text-dark50'>
                                <h2 className='text-[20px] font-[600]'>0</h2>
                                <h2 className='text-[10px] font-[400]'>Total number of women test positive for COVID-19</h2>
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
                {/* information tab11 */}
                <div className='flex flex-col gap-2'>
                    <p className='font-[500] text-[14px] text-dark90'>Percentage of pregnant women who receive preventive treatment for tuberculosis if they have latent tuberculosis infection.</p>
                    {/* 2 indicators side by side */}
                    <div className='flex items-center gap-3'>
                        <div className='flex items-center px-4 bg-primary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]'>
                            <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                                <LuCalendarDays className='text-white' />
                            </div>
                            <div className='flex flex-col text-white'>
                                <h2 className='text-[20px] font-[600]'>0</h2>
                                <h2 className='text-[10px] font-[400]'>Number of pregnant women who receive preventive treatment for tuberculosis if they have latent tuberculosis infection</h2>
                            </div>
                        </div>
                        <div className='flex items-center px-4 bg-secondary90 gap-8 h-[100px] w-[200px] rounded-[20px]'>
                            <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                                <LuCalendarDays className='text-dark50' />
                            </div>
                            <div className='flex flex-col text-dark50'>
                                <h2 className='text-[20px] font-[600]'>0</h2>
                                <h2 className='text-[10px] font-[400]'>Total number of pregnant women with latent TB infection</h2>
                            </div>
                        </div>
                    </div>
                    {/* 1 indicator alone */}
                    <div className=''>
                        <div className='flex items-center px-4 bg-primary90 gap-8 h-[100px] w-[400px] rounded-[20px]'>
                            <div className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                                <LuCalendarDays className='text-white' />
                            </div>
                            <div className='flex flex-col text-white'>
                                <h2 className='text-[20px] font-[600]'>0</h2>
                                <h2 className='text-[10px] font-[400]'>Numerator/Denominator</h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* information tab12 */}
                <div className='flex flex-col gap-2'>
                    <p className='font-[500] text-[14px] text-dark90'>Proportion of healthcare facilities with the necessary equipment and supplies to provide integrated antenatal care and COVID-19 prevention and control measures.</p>
                    {/* 2 indicators side by side */}
                    <div className='flex items-center gap-3'>
                        <div className='flex items-center px-4 bg-primary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]'>
                            <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                                <LuCalendarDays className='text-white' />
                            </div>
                            <div className='flex flex-col text-white'>
                                <h2 className='text-[20px] font-[600]'>0</h2>
                                <h2 className='text-[10px] font-[400]'>Number of health facilities with the necessary equipment and supplies to provide integrated antenatal care and COVID-19 prevention and control measures.</h2>
                            </div>
                        </div>
                        <div className='flex items-center px-4 bg-secondary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]'>
                            <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                                <LuCalendarDays className='text-dark50' />
                            </div>
                            <div className='flex flex-col text-dark50'>
                                <h2 className='text-[20px] font-[600]'>0</h2>
                                <h2 className='text-[10px] font-[400]'>Total number of intervention sites.</h2>
                            </div>
                        </div>
                    </div>
                    {/* 1 indicator alone */}
                    <div className=''>
                        <div className='flex items-center px-4 bg-primary90 gap-8 h-[100px] w-[400px] rounded-[20px]'>
                            <div className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                                <LuCalendarDays className='text-white' />
                            </div>
                            <div className='flex flex-col text-white'>
                                <h2 className='text-[20px] font-[600]'>0</h2>
                                <h2 className='text-[10px] font-[400]'>Numerator/Denominator</h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* information tab13 */}
                <div className='flex flex-col gap-2'>
                    <p className='font-[500] text-[14px] text-dark90'>Percentage of pregnant women who are screened for COVID-19 symptoms during their antenatal care visits.</p>
                    {/* 2 indicators side by side */}
                    <div className='flex items-center gap-3'>
                        <div className='flex items-center px-4 bg-primary90 gap-8 h-[100px] min-w-[200px] rounded-[20px]'>
                            <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                                <LuCalendarDays className='text-white' />
                            </div>
                            <div className='flex flex-col text-white'>
                                <h2 className='text-[20px] font-[600]'>0</h2>
                                <h2 className='text-[10px] font-[400]'>Number of pregnant women screened for COVID-19</h2>
                            </div>
                        </div>
                        <div className='flex items-center px-4 bg-secondary90 gap-8 h-[100px] min-w-[200px] rounded-[20px]'>
                            <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                                <LuCalendarDays className='text-dark50' />
                            </div>
                            <div className='flex flex-col text-dark50'>
                                <h2 className='text-[20px] font-[600]'>0</h2>
                                <h2 className='text-[10px] font-[400]'>Total number of pregnant women who present with symptoms of COVID-19 (cough, fever, sore throat, weakness)</h2>
                            </div>
                        </div>
                    </div>
                    {/* 1 indicator alone */}
                    <div className=''>
                        <div className='flex items-center px-4 bg-primary90 gap-8 h-[100px] w-[400px] rounded-[20px]'>
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

export default IntermediateResult1