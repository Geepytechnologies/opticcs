import React from 'react'

const CustomToast = (toastmessage) => {
    return (
        <div className='flex items-center justify-center absolute p-2 w-full z-[999] top-0 '>
            <div className='bg-teal-300 rounded-md w-[250px] flex items-center justify-center h-[80px]'><p className='font-[600] text-[20px]'>{Object.values(toastmessage)}</p></div>
        </div>
    )
}

export default CustomToast