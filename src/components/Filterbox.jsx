import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Filterbox = ({ selectedDateTo, setSelectedDateTo, selectedDateFrom, setSelectedDateFrom, filter, setFilter }) => {
    const handleDateToChange = (date) => {
        if (date >= selectedDateFrom) {
            setSelectedDateTo(date);
        }
    };
    const handleDateFromChange = (date) => {
        if (date <= Date.now()) {
            setSelectedDateFrom(date);
        }
    };
    return (
        <div className='w-full flex items-center justify-center my-5'>
            <div className='bg-white min-w-[95%] py-2 flex flex-row items-center justify-around gap-3'>
                {/* 1 */}
                <div className='flex flex-col'>
                    <label className='text-primary90 font-[400]'>Filter</label>
                    <select defaultValue="" onChange={(e) => setFilter(e.target.value)} className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] min-w-[180px] border border-[#C6C7C880]">
                        <option value="general">
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
                    <label className='text-primary90 font-[400]'>Date From</label>
                    <DatePicker
                        className="custom-datepicker p-[16px] myselect text-secondary30 bg-transparent outline-none min-w-[180px] rounded-[8px] border border-[#C6C7C880]"
                        selected={selectedDateFrom}
                        onChange={(date) => handleDateFromChange(date)}
                        dateFormat="yyyy-MM-dd"
                        defaultValue={selectedDateFrom}
                    />

                </div>
                {/* 3 */}
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
    )
}

export default Filterbox