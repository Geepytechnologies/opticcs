import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { HiOutlineUserGroup } from 'react-icons/hi2'
import axiosInstance from '../../../utils/axios'
import Filterbox from '../../../components/Filterbox'
import Pagination from '../../../components/Pagination'
import moment from 'moment'

const Patients = () => {
    //filter
    const [selectedDateTo, setSelectedDateTo] = useState();
    const [selectedDateFrom, setSelectedDateFrom] = useState();
    const filterdata = ["firstname", "state", "lga", "HealthFacility"]
    const [filter, setFilter] = useState(filterdata[0]);
    const [searchitem, setSearchitem] = useState()
    const formattedDateFrom = moment(selectedDateFrom).format("yyyy-MM-DD")
    const formattedDateTo = moment(selectedDateTo).format("yyyy-MM-DD")
    //
    const [patients, setPatients] = useState()
    const [isActive, setIsActive] = useState(1)
    const [currentpage, setCurrentpage] = useState(1)


    if (new Date(patients && patients[0]?.createdat).getTime() > new Date(selectedDateFrom).getTime()) {
        console.log("greater")
    } else {
        console.log("less than")
    }
    const getAllPatients = async () => {
        try {
            const res = await axiosInstance.get('/patients/findwithworkers');
            console.log(res.data.result)
            setPatients(res.data.result)
        } catch (err) {

        }
    }
    useEffect(() => {
        // getAllPatients()
    }, [])
    const filterPatients = (patients, searchitem, filter) => {
        if (!patients) return []; // Return an empty array if patients is falsy

        if (searchitem && selectedDateFrom && selectedDateTo) {
            return patients.filter(item =>
                item[filter].toLowerCase().includes(searchitem.toLowerCase()) &&
                (new Date(item.createdat).getTime() >= new Date(selectedDateFrom).getTime() &&
                    new Date(item.createdat).getTime() <= new Date(selectedDateTo).getTime())
            );
        } else if (searchitem) {
            return patients.filter(item =>
                item[filter].toLowerCase().includes(searchitem.toLowerCase())
            );
        } else if (selectedDateFrom && selectedDateTo) {
            return patients.filter(item =>
            (new Date(item.createdat).getTime() >= new Date(selectedDateFrom).getTime() &&
                new Date(item.createdat).getTime() <= new Date(selectedDateTo).getTime())
            );
        } else {
            return patients;
        }



    }
    const filteredPatients = filterPatients(patients, searchitem, filter);
    return (
        <div>
            <div className='bg-primary10'>
                {/* dashboard */}
                <div className='flex w-full items-center justify-between px-3 py-3'>
                    <div className='flex gap-2 items-center p-2'>
                        <HiOutlineUserGroup />
                        <p className='text-secondary400 text-[18px] font-[600]'>Patients</p>
                    </div>
                    <div className='flex gap-2 justify-end'>
                        <input className='outline-0 bg-transparent text-[14px] font-[400] rounded-[8px] border-secondary30 border p-2' placeholder="Patient, or SPHC or CLGA" />
                        <button className="bg-primary90 p-2 text-light10 rounded-[8px]">Search</button>
                    </div>
                </div>

                {/* selectbox1 */}
                <Filterbox filterdata={filterdata} selectedDateTo={selectedDateTo} setSearchitem={setSearchitem} setSelectedDateTo={setSelectedDateTo} selectedDateFrom={selectedDateFrom} setSelectedDateFrom={setSelectedDateFrom} setFilter={setFilter} filter={filter} />

                {/* patients table */}
                <div className='w-full flex items-center justify-center font-inter my-5'>
                    <div className='bg-white w-[95%] flex flex-col items-center justify-start pl-6 py-4'>

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
                                ).map((item, index) => (

                                    <tr key={index} className="hover:bg-[#e5e5e5] text-[#636363] h-[50px]">
                                        <td>{index + 1}</td>
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
                        {/* pagination */}
                        <Pagination currentpage={currentpage} setCurrentpage={setCurrentpage} pages={patients?.length / 10} />

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Patients