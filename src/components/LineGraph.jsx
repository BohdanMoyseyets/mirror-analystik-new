import React, { useEffect } from 'react'
import Chart from "chart.js";
import classes from "./LineGraph.module.scss";
Chart.defaults.global.defaultFontFamily = "'Montserrat', sans-serif";
Chart.defaults.global.legend.display = false;
Chart.defaults.global.defaultFontColor = '#A9AEB8';
Chart.defaults.global.defaultFontSize = 12;
Chart.defaults.global.defaultFontStyle = '600';
Chart.defaults.global.defaultFontLineHeight = 15;




export default function LineGraph({ axisX = [], axisY = [] }) {

	const chartRef = React.createRef();


	useEffect(() => {
		const myChartRef = chartRef.current.getContext("2d");

		new Chart(myChartRef, {
			type: "line",
			data: {
				//Bring in data
				labels: axisX,
				datasets: [
					{
						label: "Percent",
						fill: false,
						lineTension: 0.5,
						backgroundColor: 'rgba(75,192,192,0.4)',
						borderColor: '#F26C4F',
						borderCapStyle: 'butt',
						borderDash: [],
						gridLineColor: "red",
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
						data: axisY,
					}
				]
			},
			options: {
				plugins: {
					legend: {
						labels: {
							// This more specific font property overrides the global property
							font: {
								size: 40
							}
						}
					}
				},
				scales: {
					xAxes: [{
						gridLines: {
							color: "#1B1E25",
							borderDash: [2, 2],
						},
						display: true,

					}],
					yAxes: [{
						type: 'category',
						labels: ['100%', '90%', '80%', '70%', '60%', '50%', '40%', '30%', '20%', '10%', '0%'],
						// type: "linear",
						ticks: {
							min: '100%',
							max: '0%'
						},
						gridLines: {
							color: "#1B1E25",
							borderDash: [2, 2],
						},
						display: true,
						position: "left"
					}]
				},
				responsive: true
			}
		});


	}, [axisY, axisX])

	console.log(" LineGraph ", axisY, axisX)

	return (
		<div className={classes.graphContainer} >
			<canvas
				id="myChart"
				ref={chartRef}
			/>
		</div>
	)
}
