import React, { useState, useEffect } from 'react'
import { RiArrowUpDownLine } from 'react-icons/ri'
import IndicatorNavigatorScreen1 from '../components/IndicatorNavigatorScreen1'
import IndicatorNavigatorScreen2 from '../components/IndicatorNavigatorScreen2'
import IndicatorNavigatorScreen3 from '../components/IndicatorNavigatorScreen3'
import IndicatorNavigatorScreen4 from '../components/IndicatorNavigatorScreen4'
import IndicatorNavigatorScreen5 from '../components/IndicatorNavigatorScreen5'
import axiosInstance from '../../../utils/axios'
import { useAuth } from '../hooks/useAuth'


const DashboardIndicators = () => {
    const { healthfacilityAuth } = useAuth()
    const { healthfacility, lga, state } = healthfacilityAuth.others;

    //navigation
    const [navigatorSlide, setNavigatorSlide] = useState(1);
    //data
    const [patients, setPatients] = useState(0)


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
    const getAllPatients = async () => {
        try {
            const res = await axiosInstance.get(`/patients/healthfacility/find?healthfacility=${healthfacility}`);
            setPatients(res.data.result.length)
        } catch (err) {

        }
    }
    useEffect(() => {
        getAllPatients()
    }, [])

    const capitalizeFirstLetter = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };

    return (
        <div>
            {/* content */}
            <div className='bg-primary10 w-full'>
                {/* dashboard */}
                <div className='flex w-full items-center justify-between px-3 py-3'>
                    <div className='flex gap-2 items-center p-2'>
                        <RiArrowUpDownLine />
                        <p className='text-secondary400 text-[18px] font-[600]'>Indicators</p>
                    </div>

                </div>

                {/* selectbox1 */}

                {/* indicator outcome */}
                <div className='w-full flex items-center justify-center my-5'>
                    <div className='bg-white min-w-[1000px] w-[95%] flex flex-col items-center justify-start pl-6 py-4'>
                        {/* navigator */}
                        <div className='flex px-3 w-full items-center justify-between gap-6'>
                            <div className='flex items-center flex-[3] justify-between '>
                                <div onClick={() => setNavigatorSlide(1)} className={`cursor-pointer text-center ${navigatorSlide === 1 ? 'text-primary70 border-b-4 font-[500] pb-2 border-primary70' : "text-light90 pb-2 font-[500]"}`}>First Visit</div>
                                {/* <div onClick={() => setNavigatorSlide(2)} className={`cursor-pointer text-center ${navigatorSlide === 2 ? 'text-primary70 border-b-4 font-[500] pb-2 border-primary70' : "text-light90 pb-2 font-[500]"}`}>First Visit</div> */}
                                <div onClick={() => setNavigatorSlide(3)} className={`cursor-pointer text-center ${navigatorSlide === 3 ? 'text-primary70 border-b-4 font-[500] pb-2 border-primary70' : "text-light90 pb-2 font-[500]"}`}>Return Visit</div>
                                <div onClick={() => setNavigatorSlide(4)} className={`cursor-pointer text-center ${navigatorSlide === 4 ? 'text-primary70 border-b-4 font-[500] pb-2 border-primary70' : "text-light90 pb-2 font-[500]"}`}>Test Result</div>
                                <div onClick={() => setNavigatorSlide(5)} className={`cursor-pointer ${navigatorSlide === 5 ? 'text-primary70 border-b-4 font-[500] pb-2 border-primary70' : "text-light90 pb-2 font-[500]"}`}>Antenatal Schedule</div>
                            </div>
                            <div className='font-[500] flex-1 text-center'><span className='text-primary70'>{patients} </span>Patient {patients > 1 ? 'Records' : 'Record'}</div>
                        </div>
                        {/* navigator screen slides */}
                        {componentToRender}


                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardIndicators