import React, { useEffect, useState } from "react";


import ReactApexChart from "react-apexcharts";


const ExpectedDelivery = ({ title, series, colors, data }) => {
    const ExpectedDeliveryOptions = {
        series: [{
            data: [400, 430, 448, 470]
        }],
        chart: {
            type: 'bar',
            height: 500
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ['First quarter of the year', 'Second quarter of the year', 'Third quarter of the year', 'Fourth quarter of the year'],
        },
        // colors: ["#1A73E8"],

    };
    return (
        <div>
            <ReactApexChart
                series={ExpectedDeliveryOptions.series}
                options={ExpectedDeliveryOptions}
            />
        </div>
    )
}

export default ExpectedDelivery