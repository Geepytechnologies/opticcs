import React, { useState, useEffect } from 'react'
import { RiArrowUpDownLine } from 'react-icons/ri'
import IndicatorNavigatorScreen1 from '../components/IndicatorNavigatorScreen1'
import IndicatorNavigatorScreen2 from '../components/IndicatorNavigatorScreen2'
import IndicatorNavigatorScreen3 from '../components/IndicatorNavigatorScreen3'
import IndicatorNavigatorScreen4 from '../components/IndicatorNavigatorScreen4'
import IndicatorNavigatorScreen5 from '../components/IndicatorNavigatorScreen5'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axiosInstance from '../../../utils/axios'
import Filterbox from '../../../components/Filterbox'
import stateLocalGovts from '../../../utils/stateandlgas'

const DashboardIndicators = () => {
    const [localGovts, setLocalGovts] = useState([]);
    const [statesearch, setStatesearch] = useState("all")
    const [lgasearch, setLgasearch] = useState("all")
    const [ward, setWard] = useState("all")
    const [indicatorsearchparam, setindicatorsearchparam] = useState({ query: "", state: "", lga: "" })

    //navigation
    const [navigatorSlide, setNavigatorSlide] = useState(1);
    //data
    const [patients, setPatients] = useState(0)


    let componentToRender;

    switch (navigatorSlide) {
        case 1:
            componentToRender = <IndicatorNavigatorScreen1 param={indicatorsearchparam} />;
            break;
        case 2:
            componentToRender = <IndicatorNavigatorScreen2 />;
            break;
        case 3:
            componentToRender = <IndicatorNavigatorScreen3 param={indicatorsearchparam} />;
            break;
        case 4:
            componentToRender = <IndicatorNavigatorScreen4 param={indicatorsearchparam} />;
            break;
        case 5:
            componentToRender = <IndicatorNavigatorScreen5 param={indicatorsearchparam} />;
            break;
        default:
            componentToRender = null;
            break;
    }
    const getAllPatients = async () => {
        try {
            const res = await axiosInstance.get('/patients/find');
            setPatients(res.data.result.length)
        } catch (err) {

        }
    }
    const getAllStatePatients = async () => {
        try {
            const res = await axiosInstance.get(`/patients/state/find?state=${statesearch}`);
            setPatients(res.data.result.length)
        } catch (err) {

        }
    }
    const getAllLgaPatients = async () => {
        try {
            const res = await axiosInstance.get(`/patients/lga/find?lga=${lgasearch}`);
            setPatients(res.data.result.length)
        } catch (err) {

        }
    }
    const handlestate = (e) => {
        setStatesearch(e.target.value)
    }
    const handlelgasearch = (e) => {
        setLgasearch(e.target.value)
    }
    const handlesearchsubmit = async () => {
        let searchquery;
        try {
            if (statesearch == "all") {
                searchquery = "national"
                setindicatorsearchparam({ query: searchquery, state: statesearch, lga: lgasearch })
                getAllPatients()
            }
            if (statesearch !== "all" && lgasearch == "all") {
                searchquery = "state"
                setindicatorsearchparam({ query: searchquery, state: statesearch, lga: lgasearch })
                getAllStatePatients()
            }
            if (statesearch !== "all" && lgasearch !== "all") {
                searchquery = "lga"
                setindicatorsearchparam({ query: searchquery, state: statesearch, lga: lgasearch })
                getAllLgaPatients()
            }
            // setindicatorsearchparam({ query: searchquery, state: statesearch, lga: lgasearch })
        } catch (error) {

        }
    }
    useEffect(() => {
        getAllPatients()
    }, [])

    const capitalizeFirstLetter = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };
    useEffect(() => {
        if (statesearch !== "all") {
            setLocalGovts(stateLocalGovts[capitalizeFirstLetter(statesearch)]);

        }
    }, [statesearch])
    const Mysearchbox = () => {
        return (
            <div className='w-full flex items-center justify-center my-5'>
                <div className='bg-white min-w-[95%] pl-2 py-2 flex flex-row  items-center justify-center gap-6'>
                    {/* 1 */}
                    <div className='flex flex-col'>
                        <label className='text-primary90 font-[400]'>Filter</label>
                        <select defaultValue="" onChange={(e) => setFilter(e.target.value)} className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] min-w-[180px] border border-[#C6C7C880]">
                            <option>{"state"}</option>
                        </select>

                    </div>
                    <div className='flex flex-col'>
                        <label className='text-primary90 font-[400]'>State</label>
                        <select name="state" value={statesearch} onChange={(e) => handlestate(e)} className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C8]">
                            <option value="all" >
                                All states
                            </option>
                            <option value="Abia">Abia</option>
                            <option value="Adamawa">Adamawa</option>
                            <option value="Akwa Ibom">Akwa Ibom</option>
                            <option value="Anambra">Anambra</option>
                            <option value="Bauchi">Bauchi</option>
                            <option value="Bayelsa">Bayelsa</option>
                            <option value="Benue">Benue</option>
                            <option value="Borno">Borno</option>
                            <option value="Cross River">Cross River</option>
                            <option value="Delta">Delta</option>
                            <option value="Ebonyi">Ebonyi</option>
                            <option value="Edo">Edo</option>
                            <option value="Ekiti">Ekiti</option>
                            <option value="Enugu">Enugu</option>
                            <option value="FCT">FCT</option>
                            <option value="Gombe">Gombe</option>
                            <option value="Imo">Imo</option>
                            <option value="Jigawa">Jigawa</option>
                            <option value="Kaduna">Kaduna</option>
                            <option value="Kano">Kano</option>
                            <option value="Katsina">Katsina</option>
                            <option value="Kebbi">Kebbi</option>
                            <option value="Kogi">Kogi</option>
                            <option value="Kwara">Kwara</option>
                            <option value="Lagos">Lagos</option>
                            <option value="Nasarawa">Nasarawa</option>
                            <option value="Niger">Niger</option>
                            <option value="Ogun">Ogun</option>
                            <option value="Ondo">Ondo</option>
                            <option value="Osun">Osun</option>
                            <option value="Oyo">Oyo</option>
                            <option value="Plateau">Plateau</option>
                            <option value="Rivers">Rivers</option>
                            <option value="Sokoto">Sokoto</option>
                            <option value="Taraba">Taraba</option>
                            <option value="Yobe">Yobe</option>
                            <option value="Zamfara">Zamfara</option>
                        </select>

                    </div>
                    {/* 2 */}
                    {statesearch !== 'all' &&
                        <div className='flex flex-col'>
                            <label className='text-primary90 font-[400]'>LGA</label>
                            <select name="lga" onChange={handlelgasearch} value={lgasearch} className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C8]">
                                <option value="all" >
                                    All LGA
                                </option>
                                {localGovts?.map((localGovt) => (
                                    <option key={localGovt} value={localGovt}>{localGovt}</option>
                                ))}
                            </select>

                        </div>}
                    {/* 3 */}
                    {lgasearch !== 'all' && <div className='flex flex-col'>
                        <label className='text-primary90 font-[400]'>Ward</label>
                        <select defaultValue="" onChange={(e) => setWard(e.target.value)} className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] min-w-[180px] border border-[#C6C7C880]">

                            <option value={ward}>{"All wards"}</option>


                        </select>

                    </div>
                    }
                    <div className='flex gap-2 justify-end ml-6'>
                        <button onClick={handlesearchsubmit} className="bg-primary90 p-[16px] text-light10 rounded-[8px]">Search</button>
                    </div>
                </div>
            </div>
        )
    }
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
                <Mysearchbox />

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