import React, { Component } from 'react'

import ReactApexChart from "react-apexcharts";


export default class Barchart extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: "sales",
                data: [{
                    x: '2019/01/01',
                    y: 400
                }, {
                    x: '2019/04/01',
                    y: 430
                }, {
                    x: '2019/07/01',
                    y: 448
                }, {
                    x: '2019/10/01',
                    y: 470
                }, {
                    x: '2020/01/01',
                    y: 540
                }, {
                    x: '2020/04/01',
                    y: 580
                }, {
                    x: '2020/07/01',
                    y: 690
                }, {
                    x: '2020/10/01',
                    y: 690
                }]
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 380
                },
                xaxis: {
                    type: 'category',
                    labels: {
                        formatter: function (val) {
                            return "Q" + dayjs(val).quarter()
                        }
                    },
                    group: {
                        style: {
                            fontSize: '10px',
                            fontWeight: 700
                        },
                        groups: [
                            { title: '2019', cols: 4 },
                            { title: '2020', cols: 4 }
                        ]
                    }
                },
                title: {
                    text: 'Grouped Labels on the X-axis',
                },
                tooltip: {
                    x: {
                        formatter: function (val) {
                            return "Q" + dayjs(val).quarter() + " " + dayjs(val).format("YYYY")
                        }
                    }
                },
            },


        };
    }
    render() {
        <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={380} />
        </div>
    }
}
