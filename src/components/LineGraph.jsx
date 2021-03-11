import React, { Component } from 'react'
import Chart from "chart.js";
import classes from "./LineGraph.module.css";

export default class LineGraph extends Component {
    chartRef = React.createRef();
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: ["May", "Jun", "Jun", "Jul", "Jul", "Aug","Sep","Sep","Oct","Oct","Nov","Nov","Dec", "Dec", "Jan", "Jan" ],
                datasets: [
                    {
                        label: "aaaa",
                        fill: false,
                        lineTension: 0.5,
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: '#F26C4F',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: '#F26C4F',
                        pointBackgroundColor: '#F26C4F',
                        pointBorderWidth: 4,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: '#F26C4F',
                        pointHoverBorderColor: '#F26C4F',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [20, 20, 30, 35, 40, 40 , 40 , 40, 40, 40, 30, 20, 40,  50, 60, 80],
                    }
                ]
            },
            options: {
                scales: {
                    y: { // defining min and max so hiding the dataset does not change scale range
                      min: 0,
                      max: 100
                    }
                  },
                plugins: {
                    legend: {
                        labels: {
                            // This more specific font property overrides the global property
                            font: {
                                size: 30
                            }
                        }
                    }
                }
            }
        });
    }
    render() {
        return (
            <div className={classes.graphContainer}>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}