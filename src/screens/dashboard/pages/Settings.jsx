import React from 'react'
import { FiSettings } from 'react-icons/fi'

const Settings = () => {
    return (
        <div>
            <div className='bg-primary10'>
                {/* dashboard */}
                <div className='flex w-full items-center justify-between px-3 py-3'>
                    <div className='flex gap-2 items-center p-2'>
                        <FiSettings />
                        <p className='text-secondary400 text-[18px] font-[600]'>Settings</p>
                    </div>

                </div>
                <div className='w-full flex items-center justify-center font-inter my-5'>
                    <div className='bg-white w-[95%] flex flex-col pl-6 py-4'>
                        <div className=' mt-6 max-w-[380px]'>
                            <p className='font-[600] text-[32px] text-secondary400'>Reset Password</p>
                            <p className='font-[400] text-[13px] text-secondary400'>Add a password to male your account more secure </p>
                            <div className='flex flex-col mt-6 gap-6'>
                                <div className="flex flex-col">
                                    <label className="text-[16px] font-[500] text-dark50">
                                        Email address<span className="ml-2 text-red-500">*</span>
                                    </label>
                                    <input
                                        className="p-[16px] text-[#959596] bg-transparent outline-none rounded-[8px] border border-[#959596]"
                                        placeholder="XXXX XXXX X4380"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-[16px] font-[500] text-dark50">
                                        Verify Password<span className="ml-2 text-red-500">*</span>
                                    </label>
                                    <input
                                        className="p-[16px] text-[#959596] bg-transparent outline-none rounded-[8px] border border-[#959596]"
                                        placeholder="XXXX XXXX X4380"
                                    />
                                </div>
                                <button className="bg-primary90 font-[500] font-popp text-[16px] max-w-[380px] flex items-center justify-center rounded-[100px] text-primary10 py-[16px]">
                                    Continue
                                </button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Settings