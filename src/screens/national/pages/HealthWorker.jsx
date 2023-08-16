import React, { useState, useEffect } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { HiOutlineUserGroup } from 'react-icons/hi2'
import { MdOutlineGroup } from 'react-icons/md'
import axiosInstance from '../../../utils/axios'
import Pagination from '../../../components/Pagination'
import Filterbox from '../../../components/Filterbox'
import moment from "moment"

const HealthWorker = () => {
    const [workers, setWorkers] = useState()
    //filter
    const [selectedDateTo, setSelectedDateTo] = useState();
    const [selectedDateFrom, setSelectedDateFrom] = useState();
    const filterdata = ["healthWorker", "state", "lga", "HealthFacility", "cadre"]
    const [filter, setFilter] = useState(filterdata[0]);
    const [searchitem, setSearchitem] = useState()
    const formattedDateFrom = moment(selectedDateFrom).format("yyyy-MM-DD")
    const formattedDateTo = moment(selectedDateTo).format("yyyy-MM-DD")
    //pagination
    const [currentpage, setCurrentpage] = useState(1)
    const getworkers = async () => {
        try {
            const res = await axiosInstance.get("/users/find")
            setWorkers(res.data.result)
        } catch (error) {

        }
    }
    useEffect(() => {
        getworkers()
    }, [])
    const filterworkers = (workers, searchitem, filter) => {
        if (!workers) return []; // Return an empty array if patients is falsy

        if (searchitem && selectedDateFrom && selectedDateTo) {
            return workers.filter(item =>
                item[filter].toLowerCase().includes(searchitem.toLowerCase()) &&
                (new Date(item.createdat).getTime() >= new Date(selectedDateFrom).getTime() &&
                    new Date(item.createdat).getTime() <= new Date(selectedDateTo).getTime())
            );
        } else if (searchitem) {
            return workers.filter(item =>
                item[filter].toLowerCase().includes(searchitem.toLowerCase())
            );
        } else if (selectedDateFrom && selectedDateTo) {
            return workers.filter(item =>
            (new Date(item.createdat).getTime() >= new Date(selectedDateFrom).getTime() &&
                new Date(item.createdat).getTime() <= new Date(selectedDateTo).getTime())
            );
        } else {
            return workers;
        }



    }
    const filteredworkers = filterworkers(workers, searchitem, filter);
    return (
        <div>
            <div className='bg-primary10'>
                {/* dashboard */}
                <div className='flex w-full items-center justify-between px-3 py-3'>
                    <div className='flex gap-2 items-center p-2'>
                        <MdOutlineGroup />
                        <p className='text-secondary400 text-[18px] font-[600]'>Health Worker</p>
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
                            <thead>
                                <tr>
                                    <th>SN</th>
                                    <th>Name</th>
                                    <th>Client ID</th>
                                    <th>Carde</th>
                                    <th>State</th>
                                    <th>LGA</th>
                                    <th>Health Facility</th>
                                    <th>Phone Number</th>
                                </tr>

                            </thead>
                            <tbody>

                                {workers
                                    ? (searchitem || (selectedDateTo && selectedDateFrom)
                                        ? filteredworkers
                                        : workers
                                    ).map((item, index) => (

                                        <tr key={index} className="hover:bg-[#e5e5e5] text-[#636363] h-[50px]">
                                            <td>{item.id}</td>
                                            <td>{item.healthworker}</td>
                                            <td>{item.id}</td>
                                            <td>{item.cadre}</td>
                                            <td>{item.state}</td>
                                            <td>{item.lga}</td>
                                            <td>{item.healthfacility}</td>
                                            <td>{item.phone}</td>

                                        </tr>
                                    ))
                                    : null
                                }
                            </tbody>

                        </table>
                        {/* pagination */}
                        <Pagination currentpage={currentpage} setCurrentpage={setCurrentpage} pages={workers?.length / 10 || (filteredworkers && filteredworkers?.length / 10)} />

                    </div>
                </div>

            </div>
        </div>
    )
}

export default HealthWorker