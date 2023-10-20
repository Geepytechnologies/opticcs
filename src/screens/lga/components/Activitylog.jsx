import React from "react"
import Activitychart from "../charts/Activitychart"
import { BsFillInfoCircleFill } from "react-icons/bs"


const Activitylog = () => {
    const data = [120, 20, 40, 23, 56, 54, 22, 12, 2, 4, 56, 32]
    const objectArray = data.map(number => ({ number }));
    return (
        <div>
            <div className="shadow-2xl bg-white w-[600px]">
                <div className="pt-[25px] px-[25px]">
                    <div className="flex justify-between">
                        <p className="text-black font-inter font-[500] tet-[20px]">Activity Chart</p>
                        <BsFillInfoCircleFill className="text-[#BDBDBD] text-[22px]" />
                    </div>

                </div>
                <Activitychart series={objectArray} />

            </div>
        </div>
    )
}

export default Activitylog