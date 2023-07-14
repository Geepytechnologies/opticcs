import React from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { HiOutlineChatBubbleOvalLeftEllipsis } from 'react-icons/hi2'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { useAuth } from '../../../utils/hooks/useAuth'

const DashboardNavbar = () => {
    const { auth, setAuth } = useAuth();
    const { firstname } = auth?.others;
    const capitalizeFirstLetter = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };

    return (
        <div className='h-[90px] flex items-center justify-between px-2 bg-white'>
            <div className='flex flex-col'>
                <h1 className='text-[22px] text-secondary400 font-[500]'>Welcome, {capitalizeFirstLetter(firstname)}</h1>
                <h2>Have a nice day at work</h2>
            </div>
            <div className='flex flex-row gap-2 items-center'>
                <HiOutlineChatBubbleOvalLeftEllipsis />
                <IoMdNotificationsOutline />
                <div className='rounded-full flex items-center text-[16px] font-[500] justify-center bg-primary50 text-light10 w-[40px] h-[40px]'>
                    <span>{firstname.charAt(0).toUpperCase()}</span>
                </div>
                <h2 className='text-[12px] font-[500] text-[#000]'>{capitalizeFirstLetter(firstname)}</h2>
                <FiChevronDown />
            </div>
        </div>
    )
}

export default DashboardNavbar