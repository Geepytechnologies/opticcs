import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineFileSearch } from 'react-icons/ai'
import { HiOutlineUserGroup } from 'react-icons/hi2'
import axiosInstance from '../../../utils/axios'
import Filterbox from '../../../components/Filterbox'
import Pagination from '../../../components/Pagination'
import moment from 'moment'
import Notfound from '../../../components/Notfound'
import Patientview from '../components/Patientview'
import { useNavigate } from 'react-router-dom'

const Patients = () => {
    //filter
    const [selectedDateTo, setSelectedDateTo] = useState();
    const [selectedDateFrom, setSelectedDateFrom] = useState();
    const filterdata = ["firstname", "state", "lga", "HealthFacility"]
    const [filter, setFilter] = useState(filterdata[0]);
    const [searchitem, setSearchitem] = useState()

    //
    const [patients, setPatients] = useState()
    const [isActive, setIsActive] = useState(1)
    const [currentpage, setCurrentpage] = useState(1)



    const getIndicatordata = async () => {
        try {
            const res = await axiosInstance.get("/admin/national/data/general")
            setData(res.data)
        } catch (error) {

        }
    }
    useEffect(() => {
        getIndicatordata()
    }, [])
    const getAllPatients = async () => {
        try {
            const res = await axiosInstance.get('/patients/findwithworkers');
            setPatients(res.data.result)
        } catch (err) {

        }
    }
    useEffect(() => {
        getAllPatients()
    }, [])
    const filterPatients = (patients, searchitem, filter) => {
        if (!patients) return []; // Return an empty array if patients is falsy
        let filteredpage;
        if (searchitem && selectedDateFrom && selectedDateTo) {
            filteredpage = patients.filter(item =>
                item[filter].toLowerCase().includes(searchitem.toLowerCase()) &&
                (new Date(item.createdat).getTime() >= new Date(selectedDateFrom).getTime() &&
                    new Date(item.createdat).getTime() <= new Date(selectedDateTo).getTime())
            );
            return filteredpage
        } else if (searchitem) {
            filteredpage = patients.filter(item =>
                item[filter].toLowerCase().includes(searchitem.toLowerCase())
            );
            return filteredpage
        } else if (selectedDateFrom && selectedDateTo) {
            filteredpage = patients.filter(item =>
            (new Date(item.createdat).getTime() >= new Date(selectedDateFrom).getTime() &&
                new Date(item.createdat).getTime() <= new Date(selectedDateTo).getTime())
            );
            return filteredpage
        } else {
            return patients;
        }




    }
    const filteredPatients = filterPatients(patients, searchitem, filter);
    useEffect(() => {
        setCurrentpage(1)
    }, [filteredPatients])
    const navigate = useNavigate();

    const handleItemClick = (itemId) => {
        navigate(`/national/patients/${itemId}`);
    };
    return (
        <div>
            <div className='bg-primary10 flex flex-col min-h-screen'>
                {/* dashboard */}
                <div className='flex w-full items-center justify-between px-3 py-3'>
                    <div className='flex gap-2 items-center p-2'>
                        <HiOutlineUserGroup />
                        <p className='text-secondary400 text-[18px] font-[600]'>Patients</p>
                    </div>
                    {/* <div className='flex gap-2 justify-end'>
                        <input className='outline-0 bg-transparent text-[14px] font-[400] rounded-[8px] border-secondary30 border p-2' placeholder="Patient, or SPHC or CLGA" />
                        <button className="bg-primary90 p-2 text-light10 rounded-[8px]">Search</button>
                    </div> */}
                </div>

                {/* selectbox1 */}
                <Filterbox filterdata={filterdata} selectedDateTo={selectedDateTo} setSearchitem={setSearchitem} setSelectedDateTo={setSelectedDateTo} selectedDateFrom={selectedDateFrom} setSelectedDateFrom={setSelectedDateFrom} setFilter={setFilter} filter={filter} />

                {/* patients table */}
                <div className='w-full flex-1 flex items-center justify-center font-inter my-5'>
                    <div className='bg-white min-h-[500px] w-[95%] flex flex-col items-center justify-between pl-6 py-4'>

                        <table className="cursor-default w-full">
                            <tr>
                                <th>SN</th>
                                <th>Patient Name</th>
                                <th>Patient ID</th>
                                <th>State</th>
                                <th>LGA</th>
                                <th>Health Facility</th>
                                <th>Last Visit</th>
                            </tr>
                            {patients
                                ? (searchitem || (selectedDateTo && selectedDateFrom)
                                    ? filteredPatients
                                    : patients
                                ).slice((10 * currentpage) - 10, (10 * currentpage)).map((item, index) => (
                                    <tr onClick={() => handleItemClick(item.id)} key={item.id} className="hover:bg-[#e5e5e5] text-[#636363] h-[50px]">
                                        <td>{currentpage == 1 ? index + 1 : ((10 * currentpage) + (index + 1)) - 10}</td>
                                        <td>{item.firstname}</td>
                                        <td>{item.id}</td>
                                        <td>{item.state}</td>
                                        <td>{item.lga}</td>
                                        <td>{item.healthFacility}</td>
                                        <td>{moment(item.last_visit).fromNow()}</td>
                                    </tr>
                                ))
                                : null
                            }


                        </table>
                        {!filteredPatients.length &&
                            <Notfound />
                        }
                        {/* pagination */}
                        <Pagination currentpage={currentpage} setCurrentpage={setCurrentpage} pages={filteredPatients ? filteredPatients.length / 10 : patients?.length / 10} />

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Patients