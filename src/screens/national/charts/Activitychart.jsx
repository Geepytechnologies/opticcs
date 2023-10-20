import React from "react";


import ReactApexChart from "react-apexcharts";


const Activitychart = ({ title, series, colors, data }) => {
    const ActivitychartOptions = {
        series: [{
            data: [{
                x: 'JAN',
                y: series && series[0].number
            },
            {
                x: 'FEB',
                y: series && series[1].number
            },
            {
                x: 'MARCH',
                y: series && series[2].number
            },
            {
                x: 'APRIL',
                y: series && series[3].number
            },
            {
                x: 'MAY',
                y: series && series[3].number
            },
            {
                x: 'JUNE',
                y: series && series[3].number
            },
            {
                x: 'JULY',
                y: series && series[3].number
            },
            {
                x: 'AUGUST',
                y: series && series[3].number
            },
            {
                x: 'SEPTEMBER',
                y: series && series[3].number
            },
            {
                x: 'OCTOBER',
                y: series && series[3].number
            },
            {
                x: 'NOVEMBER',
                y: series && series[3].number
            },
            {
                x: 'DECEMBER',
                y: series && series[3].number
            },
            ]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 1000
            },
            plotOptions: {
                bar: {
                    borderRadius: 10,
                    dataLabels: {
                        position: 'top', // top, center, bottom
                    },
                }
            },

            dataLabels: {
                enabled: false
            },
            colors
        },

    };
    return (
        <div className="flex flex-1 flex-col w-full content-between justify-center items-center pl-[3.5px] py-2 gap-2 rounded-[15px] min-h-[300px] ">
            {(series[0].number < 1 && series[1].number < 1 && series[2].number < 1 && series[3].number < 1) ?
                <p className="text-primary90 font-500 text-[20px]">No Data</p>
                : <ReactApexChart
                    series={ActivitychartOptions.series}
                    options={ActivitychartOptions}
                />
            }
        </div>
    )
}

export default Activitychart