import React from "react"


const ActiveUsers = () => {
    const data = [1, 2, 3, 4]
    return (
        <div className="w-full">
            <table className="cursor-default w-full">
                <thead>
                    <tr className="h-[50px]">
                        <th>SN</th>
                        <th>Name</th>
                        <th>ID</th>
                        <th>User Type</th>
                        <th>Last Session</th>
                        <th>Time Active</th>
                    </tr>

                </thead>
                <tbody>
                    {data.map((index) => (<tr key={index} className="text-[#636363] h-[50px]">
                        <td>{index}</td>
                        <td>Usman Fori</td>
                        <td>2356</td>
                        <td>State</td>
                        <td>21/08/2023</td>
                        <td>20 mins</td>
                    </tr>))}
                </tbody>
            </table>
        </div>
    )
}

export default ActiveUsers