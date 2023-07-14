import React from 'react'
import { IoMdInformationCircle } from 'react-icons/io'
import PieChart from '../charts/Piechart'
import ExpectedDelivery from '../charts/ExpectedDelivery'
import BabysMovement from '../charts/BabysMovement'
import FirstBabyMovement from '../charts/FirstBabyMovement'
import Frightened from '../charts/Frightened'
import Livewith from '../charts/Livewith'
import BabyLessAYear from '../charts/BabyLessAYear'
import HeavyLoads from '../charts/HeavyLoads'
import WalkLong from '../charts/WalkLong'
import WorkOutsideHome from '../charts/WorkOutsideHome'
import Parity from '../charts/Parity'

const IndicatorNavigatorScreen3 = () => {
    return (
        <div className='w-full'>
            <div>
                <p className='text-primary90 font-[500] my-5'>Assessment of General Well-Being and Blood Pressure </p>
                {/* chart 1 */}
                <div className='grid grid-cols-2 gap-5'>
                    {/* Pie chart (Parity) */}
                    <div className=' min-w-[250px] shadow-xl'>
                        <div className='flex items-center justify-between px-2 py-4'>
                            <div className='flex flex-col'>
                                <p className='font-[500] text-black'>Parity</p>
                                <p className='font-[400] text-[#4F4F4F] text-[14px]'>Rate</p>
                            </div>
                            <IoMdInformationCircle className='text-[#BDBDBD] text-[25px]' />

                        </div>
                        <hr />
                        {/* The pie chart diagram */}
                        <Parity
                            colors={["#14A673", "#D1FF60"]} series={[70, 30]}
                        />
                        {/* info about chart */}
                        <div className='flex gap-7 px-2 py-4'>
                            <div className='flex gap-2 items-center'>
                                <div className='w-[7px] h-[7px] rounded-full bg-primary70'></div>
                                <span>1 - 7</span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <div className='w-[7px] h-[7px] rounded-full bg-[#D1FF60]'></div>
                                <span>Above 8</span>
                            </div>
                        </div>
                    </div>
                    {/* Pie chart (Gravidity) */}
                    <div className=' min-w-[250px] shadow-xl'>
                        <div className='flex items-center justify-between px-2 py-4'>
                            <div className='flex flex-col'>
                                <p className='font-[500] text-black'>Baby's movement</p>
                                <p className='font-[400] text-[#4F4F4F] text-[14px]'>client felt the baby's movement</p>
                            </div>
                            <IoMdInformationCircle className='text-[#BDBDBD] text-[25px]' />

                        </div>
                        <hr />
                        {/* The pie chart diagram */}
                        <BabysMovement colors={["#14A673", "#14A673", "#2FCF97", "#52F7BE"]} series={[25, 25, 25, 25]} />
                        {/* info about chart */}
                        <div className='flex gap-7 px-2 py-4'>
                            <div className='flex gap-2 items-center'>
                                <div className='w-[7px] h-[7px] rounded-full bg-primary90'></div>
                                <span>Yes</span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <div className='w-[7px] h-[7px] rounded-full bg-primary70'></div>
                                <span>No</span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <div className='w-[7px] h-[7px] rounded-full bg-[#2FCF97]'></div>
                                <span>I don't Know</span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <div className='w-[7px] h-[7px] rounded-full bg-[#52F7BE]'></div>
                                <span>Not Applicable</span>
                            </div>
                        </div>
                    </div>
                    {/* Pie chart (FirstBabyMovement) */}
                    <div className=' min-w-[250px] shadow-xl'>
                        <div className='flex items-center justify-between px-2 py-4'>
                            <div className='flex flex-col'>
                                <p className='font-[500] text-black'>first baby movement</p>
                                <p className='font-[400] text-[#4F4F4F] text-[14px]'>Do you know the date of the first baby movement?</p>
                            </div>
                            <IoMdInformationCircle className='text-[#BDBDBD] text-[25px]' />

                        </div>
                        <hr />
                        {/* The pie chart diagram */}
                        <FirstBabyMovement colors={["#14A673", "#D1FF60"]} series={[70, 30]} />
                        {/* info about chart */}
                        <div className='flex gap-7 px-2 py-4'>
                            <div className='flex gap-2 items-center'>
                                <div className='w-[7px] h-[7px] rounded-full bg-primary70'></div>
                                <span>24 weeks</span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <div className='w-[7px] h-[7px] rounded-full bg-[#D1FF60]'></div>
                                <span>Above 24 weeks</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <p className='text-primary90 font-[500] my-5'>Daily Habits and Lifestyle </p>
                {/* chart 1 */}
                <div className='grid grid-cols-2 gap-5'>
                    {/* Pie chart (Parity) */}
                    <div className=' min-w-[250px] shadow-xl'>
                        <div className='flex items-center justify-between px-2 py-4'>
                            <div className='flex flex-col'>
                                <p className='font-[500] text-black'>Work outside the home</p>
                                <p className='font-[400] text-[#4F4F4F] text-[14px]'>Do you work outside the home?</p>
                            </div>
                            <IoMdInformationCircle className='text-[#BDBDBD] text-[25px]' />

                        </div>
                        <hr />
                        {/* The pie chart diagram */}
                        <WorkOutsideHome
                            colors={["#14A673", "#D1FF60"]} series={[60, 40]}
                        />
                        {/* info about chart */}
                        <div className='flex gap-7 px-2 py-4'>
                            <div className='flex gap-2 items-center'>
                                <div className='w-[7px] h-[7px] rounded-full bg-primary70'></div>
                                <span>Yes</span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <div className='w-[7px] h-[7px] rounded-full bg-[#D1FF60]'></div>
                                <span>No</span>
                            </div>
                        </div>
                    </div>
                    {/* Pie chart (Gravidity) */}
                    <div className=' min-w-[250px] shadow-xl'>
                        <div className='flex items-center justify-between px-2 py-4'>
                            <div className='flex flex-col'>
                                <p className='font-[500] text-black'>Walk long distances</p>
                                <p className='font-[400] text-[#4F4F4F] text-[14px]'>Do you walk long distances?</p>
                            </div>
                            <IoMdInformationCircle className='text-[#BDBDBD] text-[25px]' />

                        </div>
                        <hr />
                        {/* The pie chart diagram */}
                        <WalkLong colors={["#14A673", "#D1FF60"]} series={[60, 40]} />
                        {/* info about chart */}
                        <div className='flex gap-7 px-2 py-4'>
                            <div className='flex gap-2 items-center'>
                                <div className='w-[7px] h-[7px] rounded-full bg-primary90'></div>
                                <span>Yes</span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <div className='w-[7px] h-[7px] rounded-full bg-primary70'></div>
                                <span>No</span>
                            </div>
                        </div>
                    </div>
                    {/* Pie chart (FirstBabyMovement) */}
                    <div className=' min-w-[250px] shadow-xl'>
                        <div className='flex items-center justify-between px-2 py-4'>
                            <div className='flex flex-col'>
                                <p className='font-[500] text-black'>Heavy loads</p>
                                <p className='font-[400] text-[#4F4F4F] text-[14px]'>Do you carry heavy loads or do heavy physical labour</p>
                            </div>
                            <IoMdInformationCircle className='text-[#BDBDBD] text-[25px]' />

                        </div>
                        <hr />
                        {/* The pie chart diagram */}
                        <HeavyLoads colors={["#14A673", "#D1FF60"]} series={[70, 30]} />
                        {/* info about chart */}
                        <div className='flex gap-7 px-2 py-4'>
                            <div className='flex gap-2 items-center'>
                                <div className='w-[7px] h-[7px] rounded-full bg-primary70'></div>
                                <span>yes</span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <div className='w-[7px] h-[7px] rounded-full bg-[#D1FF60]'></div>
                                <span>No</span>
                            </div>
                        </div>
                    </div>
                    <div className=' min-w-[250px] shadow-xl'>
                        <div className='flex items-center justify-between px-2 py-4'>
                            <div className='flex flex-col'>
                                <p className='font-[500] text-black'>Baby less than 1yr</p>
                                <p className='font-[400] text-[#4F4F4F] text-[14px]'>Do you have a baby that is currently less than one year old?</p>
                            </div>
                            <IoMdInformationCircle className='text-[#BDBDBD] text-[25px]' />

                        </div>
                        <hr />
                        {/* The pie chart diagram */}
                        <BabyLessAYear colors={["#14A673", "#D1FF60"]} series={[70, 30]} />
                        {/* info about chart */}
                        <div className='flex gap-7 px-2 py-4'>
                            <div className='flex gap-2 items-center'>
                                <div className='w-[7px] h-[7px] rounded-full bg-primary70'></div>
                                <span>yes</span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <div className='w-[7px] h-[7px] rounded-full bg-[#D1FF60]'></div>
                                <span>No</span>
                            </div>
                        </div>
                    </div>
                    <div className=' min-w-[250px] shadow-xl'>
                        <div className='flex items-center justify-between px-2 py-4'>
                            <div className='flex flex-col'>
                                <p className='font-[500] text-black'>Live with</p>
                                <p className='font-[400] text-[#4F4F4F] text-[14px]'>Who do you Live with?</p>
                            </div>
                            <IoMdInformationCircle className='text-[#BDBDBD] text-[25px]' />

                        </div>
                        <hr />
                        {/* The pie chart diagram */}
                        <Livewith colors={["#F94144", "#F3722C", "#F8961E", "#F9C74F", "#90BE6D"]} series={[20, 10, 20, 25, 25]} />
                        {/* info about chart */}
                        <div className='flex flex-wrap gap-7 w-full px-2 py-4'>
                            <div className='flex gap-2 items-center'>
                                <div className='w-[7px] h-[7px] rounded-full bg-[#F94144]'></div>
                                <span>Partner</span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <div className='w-[7px] h-[7px] rounded-full bg-[#F3722C]'></div>
                                <span>Relative</span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <div className='w-[7px] h-[7px] rounded-full bg-[#F8961E]'></div>
                                <span>Alone</span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <div className='w-[7px] h-[7px] rounded-full bg-[#F9C74F]'></div>
                                <span>Friend</span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <div className='w-[7px] h-[7px] rounded-full bg-[#90BE6D]'></div>
                                <span>Others</span>
                            </div>
                        </div>
                    </div>
                    <div className=' min-w-[250px] shadow-xl'>
                        <div className='flex items-center justify-between px-2 py-4'>
                            <div className='flex flex-col'>
                                <p className='font-[500] text-black'>Frightened by anyone</p>
                                <p className='font-[400] text-[#4F4F4F] text-[14px]'>Do you feel frightened by anyone?</p>
                            </div>
                            <IoMdInformationCircle className='text-[#BDBDBD] text-[25px]' />

                        </div>
                        <hr />
                        {/* The pie chart diagram */}
                        <Frightened colors={["#14A673", "#D1FF60"]} series={[70, 30]} />
                        {/* info about chart */}
                        <div className='flex gap-7 px-2 py-4'>
                            <div className='flex gap-2 items-center'>
                                <div className='w-[7px] h-[7px] rounded-full bg-primary70'></div>
                                <span>yes</span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <div className='w-[7px] h-[7px] rounded-full bg-[#D1FF60]'></div>
                                <span>No</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default IndicatorNavigatorScreen3