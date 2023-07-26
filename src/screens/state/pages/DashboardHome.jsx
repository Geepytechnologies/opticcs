import React, { useState, useEffect } from 'react'
import { LuCalendarDays } from 'react-icons/lu'
import { RxDashboard } from 'react-icons/rx'
import IndicatorOutcome from '../components/IndicatorOutcome'
import IntermediateResult1 from '../components/IntermediateResult1'
import Activity from '../components/Activity'
import IntermediateResult2 from '../components/IntermediateResult2'
import axiosInstance from '../../../utils/axios'
import { useRef } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useAuth } from '../hooks/useAuth'



const DashboardHome = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [navigatorSlide, setNavigatorSlide] = useState(1);
    const [healthWorkers, setHealthWorkers] = useState(0)
    const [patients, setPatients] = useState(0)
    const [statenumbers, setStatenumbers] = useState(0)
    const [hfnumbers, setHfnumbers] = useState(0)
    const { stateAuth } = useAuth()

    const getAllHealthWorkers = async () => {
        try {
            const res = await axiosInstance.get('/users/find');
            setHealthWorkers(res.data.length)
        } catch (err) {

        }
    }
    const getAllPatients = async () => {
        try {
            const res = await axiosInstance.get('/patients/findwithworkers');
            const statepatients = res.data.filter((obj) => obj.state == stateAuth.others.state)
            setPatients(statepatients.length)
        } catch (err) {

        }
    }
    const getAllstates = async () => {
        try {
            const res = await axiosInstance.get('/admin/state/find');
            setStatenumbers(res.data.result.length)
        } catch (err) {

        }
    }
    const getHealthfacilities = async () => {
        try {
            const res = await axiosInstance.get('/admin/healthfacility/find');
            console.log({ state: res.data })
            setHfnumbers(res.data.length)
        } catch (err) {

        }
    }
    useEffect(() => {
        getAllHealthWorkers()
        getAllPatients()
        getAllstates()
        getHealthfacilities()
    })
    function downloadTable() {
        const table = tableRef.current;

        if (table) {
            const rows = Array.from(table.rows);
            const headers = Array.from(rows.shift()?.cells || []).map(
                (cell) => cell.textContent
            );
            const csv = [headers.join(",")];

            for (const row of rows) {
                const cells = Array.from(row.cells).map((cell) => cell.textContent);
                csv.push(cells.join(","));
            }

            const blob = new Blob([csv.join("\n")], {
                type: "text/csv;charset=utf-8;",
            });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.setAttribute("href", url);
            link.setAttribute("download", "mytable.csv");
            link.style.display = "none";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            alert("Table downloaded as CSV!");
        }
    }

    let componentToRender;

    switch (navigatorSlide) {
        case 1:
            componentToRender = <IndicatorOutcome />;
            break;
        case 2:
            componentToRender = <IntermediateResult1 />;
            break;
        case 3:
            componentToRender = <IntermediateResult2 />;
            break;
        case 4:
            componentToRender = <Activity />;
            break;
        default:
            componentToRender = null;
            break;
    }
    const tableRef = useRef()
    return (
        <div>
            {/* content */}
            <div ref={tableRef} className='bg-primary10'>
                {/* dashboard */}
                <div className='flex gap-2 items-center p-2'>
                    <RxDashboard />
                    <p className='text-secondary400 text-[18px] font-[600]'>Dashboard</p>
                </div>
                {/* box indicators */}
                <div className='flex items-center justify-center gap-3 mt-5'>
                    {/* indicator1 */}
                    <div className='flex items-center px-4 bg-[#7A6EFE] gap-8 h-[100px] w-[200px] rounded-[20px]'>
                        <div className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                            <LuCalendarDays className='text-white' />
                        </div>
                        <div className='flex flex-col text-white'>
                            <h2 className='text-[32px] font-[600]'>{patients}</h2>
                            <h2 className='text-[14px] font-[400]'>Patients</h2>
                        </div>
                    </div>
                    {/* indicator2 */}
                    <div className='flex items-center px-4 bg-[#FF5363] gap-8 h-[100px] w-[200px] rounded-[20px]'>
                        <div className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                            <LuCalendarDays className='text-white' />
                        </div>
                        <div className='flex flex-col text-white'>
                            <h2 className='text-[32px] font-[600]'>{healthWorkers}</h2>
                            <h2 className='text-[14px] font-[400]'>Health Workers</h2>
                        </div>
                    </div>
                    {/* indicator3 */}
                    <div className='flex items-center px-4 bg-[#FFA901] gap-8 h-[100px] w-[200px] rounded-[20px]'>
                        <div className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                            <LuCalendarDays className='text-white' />
                        </div>
                        <div className='flex flex-col text-white'>
                            <h2 className='text-[32px] font-[600]'>2390</h2>
                            <h2 className='text-[14px] font-[400]'>State</h2>
                        </div>
                    </div>
                    {/* indicator4 */}
                    <div className='flex items-center px-4 bg-[#22A9FA] gap-8 h-[100px] w-[200px] rounded-[20px]'>
                        <div className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                            <LuCalendarDays className='text-white' />
                        </div>
                        <div className='flex flex-col text-white'>
                            <h2 className='text-[32px] font-[600]'>2390</h2>
                            <h2 className='text-[14px] font-[400]'>Health Facility</h2>
                        </div>
                    </div>
                </div>
                {/* download csv */}
                <div className='flex items-center justify-end mt-[40px] pr-4'>
                    <button onClick={downloadTable} className='bg-primary90 rounded-[8px] text-light10 text-[14px] p-2'>Download CSV</button>
                </div>
                {/* selectbox1 */}
                <div className='w-full flex items-center justify-center my-5'>
                    <div className='bg-white min-w-[95%] py-2 flex flex-row items-center justify-around gap-3'>
                        {/* 1 */}
                        <div className='flex flex-col'>
                            <label className='text-primary90 font-[400]'>Filter</label>
                            <select defaultValue="" className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] min-w-[180px] border border-[#C6C7C880]">
                                <option value="">
                                    General
                                </option>
                                <option value="national">National</option>
                                <option value="state">State</option>
                                <option value="lga">LGA</option>
                                <option value="healthFacility">Health Facility</option>
                            </select>

                        </div>
                        {/* 2 */}
                        <div className='flex flex-col'>
                            <label className='text-primary90 font-[400]'>Type</label>
                            <select defaultValue="" className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] min-w-[180px] border border-[#C6C7C880]">
                                <option value="" disabled >
                                    General
                                </option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>

                        </div>
                        {/* 3 */}
                        <div className='flex flex-col'>
                            <label className='text-primary90 font-[400]'>Date From</label>
                            {/* <select defaultValue="" className="p-[16px] myselect text-secondary30 bg-transparent outline-none min-w-[180px] rounded-[8px] border border-[#C6C7C880]">
                                <option value="" disabled >
                                    Date From
                                </option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select> */}
                            <DatePicker
                                className="custom-datepicker p-[16px] myselect text-secondary30 bg-transparent outline-none min-w-[180px] rounded-[8px] border border-[#C6C7C880]"
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                dateFormat="yyyy-MM-dd"
                                defaultValue={selectedDate}
                            />

                        </div>
                        {/* 4 */}
                        <div className='flex flex-col'>
                            <label className='text-primary90 font-[400]'>Date To</label>
                            <select defaultValue="" className="p-[16px] myselect text-secondary30 bg-transparent outline-none min-w-[180px] rounded-[8px] border border-[#C6C7C880]">
                                <option value="" disabled >
                                    Date To
                                </option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>

                        </div>
                    </div>
                </div>
                {/* indicator outcome */}
                <div className='w-full flex items-center justify-center my-5'>
                    <div className='bg-white w-[95%] flex flex-col items-center justify-start pl-6 py-4'>
                        {/* navigator */}
                        <div className='flex items-center gap-4'>
                            <div onClick={() => setNavigatorSlide(1)} className={`cursor-pointer text-center ${navigatorSlide === 1 ? 'text-primary70 border-b-4 font-[500] pb-2 border-primary70' : "text-light90 pb-2 font-[500]"}`}>Outcome</div>
                            <div onClick={() => setNavigatorSlide(2)} className={`cursor-pointer text-center ${navigatorSlide === 2 ? 'text-primary70 border-b-4 font-[500] pb-2 border-primary70' : "text-light90 pb-2 font-[500]"}`}>Intermediate Result 1</div>
                            <div onClick={() => setNavigatorSlide(3)} className={`cursor-pointer text-center ${navigatorSlide === 3 ? 'text-primary70 border-b-4 font-[500] pb-2 border-primary70' : "text-light90 pb-2 font-[500]"}`}>Intermediate Result 2</div>
                            <div onClick={() => setNavigatorSlide(4)} className={`cursor-pointer text-center ${navigatorSlide === 4 ? 'text-primary70 border-b-4 font-[500] pb-2 border-primary70' : "text-light90 pb-2 font-[500]"}`}>Activity 1-3</div>
                        </div>
                        {/* outcome analysis */}
                        {componentToRender}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardHome