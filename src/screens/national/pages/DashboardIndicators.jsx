import React, { useState } from 'react'
import { RiArrowUpDownLine } from 'react-icons/ri'
import IndicatorNavigatorScreen1 from '../components/IndicatorNavigatorScreen1'
import IndicatorNavigatorScreen2 from '../components/IndicatorNavigatorScreen2'
import IndicatorNavigatorScreen3 from '../components/IndicatorNavigatorScreen3'
import IndicatorNavigatorScreen4 from '../components/IndicatorNavigatorScreen4'
import IndicatorNavigatorScreen5 from '../components/IndicatorNavigatorScreen5'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DashboardIndicators = () => {
    const [navigatorSlide, setNavigatorSlide] = useState(1);

    let componentToRender;

    switch (navigatorSlide) {
        case 1:
            componentToRender = <IndicatorNavigatorScreen1 />;
            break;
        case 2:
            componentToRender = <IndicatorNavigatorScreen2 />;
            break;
        case 3:
            componentToRender = <IndicatorNavigatorScreen3 />;
            break;
        case 4:
            componentToRender = <IndicatorNavigatorScreen4 />;
            break;
        case 5:
            componentToRender = <IndicatorNavigatorScreen5 />;
            break;
        default:
            componentToRender = null;
            break;
    }

    return (
        <div>
            {/* content */}
            <div className='bg-primary10'>
                {/* dashboard */}
                <div className='flex w-full items-center justify-between px-3 py-3'>
                    <div className='flex gap-2 items-center p-2'>
                        <RiArrowUpDownLine />
                        <p className='text-secondary400 text-[18px] font-[600]'>Indicators</p>
                    </div>
                    <div className='flex gap-2 justify-end'>
                        <input className='outline-0 bg-transparent text-[14px] font-[400] rounded-[8px] border-secondary30 border p-2' placeholder="Patient, or SPHC or CLGA" />
                        <button className="bg-primary90 p-2 text-light10 rounded-[8px]">Search</button>
                    </div>
                </div>

                {/* selectbox1 */}
                <div className='w-full flex items-center justify-center my-5'>
                    <div className='bg-white m-3 w-auto min-w-[95%] py-2 flex flex-row items-center justify-around gap-3'>
                        {/* 1 */}
                        <div className='flex flex-col '>
                            <label className='text-primary90 font-[400]'>Filter</label>
                            <select defaultValue="" className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] min-w-[180px] border border-[#C6C7C880]">
                                <option value="" disabled >
                                    General
                                </option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>

                        </div>
                        {/* 2 */}
                        <div className='flex flex-col'>
                            <label className='text-primary90 font-[400]'>Date From</label>
                            <DatePicker
                                className="custom-datepicker p-[16px] myselect text-secondary30 bg-transparent outline-none min-w-[180px] rounded-[8px] border border-[#C6C7C880]"
                                selected={selectedDateFrom}
                                onChange={(date) => handleDateFromChange(date)}
                                dateFormat="yyyy-MM-dd"
                                defaultValue={selectedDateFrom}
                            />

                        </div>
                        {/* 4 */}
                        <div className='flex flex-col'>
                            <label className='text-primary90 font-[400]'>Date To</label>
                            <DatePicker
                                className="custom-datepicker p-[16px] myselect text-secondary30 bg-transparent outline-none min-w-[180px] rounded-[8px] border border-[#C6C7C880]"
                                selected={selectedDateTo}
                                onChange={(date) => handleDateToChange(date)}
                                dateFormat="yyyy-MM-dd"
                                defaultValue={selectedDateTo}
                            />

                        </div>
                    </div>
                </div>
                {/* indicator outcome */}
                <div className='w-full flex items-center justify-center my-5'>
                    <div className='bg-white w-[95%] flex flex-col items-center justify-start pl-6 py-4'>
                        {/* navigator */}
                        <div className='flex px-3 w-full items-center gap-4'>
                            <div onClick={() => setNavigatorSlide(1)} className={`cursor-pointer text-center ${navigatorSlide === 1 ? 'text-primary70 border-b-4 font-[500] pb-2 border-primary70' : "text-light90 pb-2 font-[500]"}`}>General</div>
                            <div onClick={() => setNavigatorSlide(2)} className={`cursor-pointer text-center ${navigatorSlide === 2 ? 'text-primary70 border-b-4 font-[500] pb-2 border-primary70' : "text-light90 pb-2 font-[500]"}`}>First Visit</div>
                            <div onClick={() => setNavigatorSlide(3)} className={`cursor-pointer text-center ${navigatorSlide === 3 ? 'text-primary70 border-b-4 font-[500] pb-2 border-primary70' : "text-light90 pb-2 font-[500]"}`}>Every Visit</div>
                            <div onClick={() => setNavigatorSlide(4)} className={`cursor-pointer text-center ${navigatorSlide === 4 ? 'text-primary70 border-b-4 font-[500] pb-2 border-primary70' : "text-light90 pb-2 font-[500]"}`}>Test Result</div>
                            <div onClick={() => setNavigatorSlide(5)} className={`cursor-pointer ${navigatorSlide === 5 ? 'text-primary70 border-b-4 font-[500] pb-2 border-primary70' : "text-light90 pb-2 font-[500]"}`}>Antenatal Schedule</div>
                            <div className='ml-auto font-[500]'><span className='text-primary70'>2000 </span>Patient Generated</div>
                        </div>
                        {/* navigator screen slides */}
                        {componentToRender}


                    </div>
                </div>
                {/* intermediate Result1 analysis */}
                {/* <IntermediateResult1 /> */}
                {/* activity analysis */}
                {/* <Activity /> */}
            </div>
        </div>
    )
}

export default DashboardIndicators