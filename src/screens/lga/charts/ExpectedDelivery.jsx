import React, { useEffect, useState } from "react";


import ReactApexChart from "react-apexcharts";


const ExpectedDelivery = ({ title, series, colors, data }) => {
    const ExpectedDeliveryOptions = {
        series: [{
            data: series
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
            categories: ['Q1', 'Q2', 'Q3', 'Q4'],
        },
        colors

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