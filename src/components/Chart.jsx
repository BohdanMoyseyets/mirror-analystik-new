import React, { useState } from "react";
import style from "./Chart.module.scss";
import LineGraph from "./LineGraph";


const Chart = (props) => {
	const [chosenRange, setChosenRange] = useState()

	const ranges = ["ALL", "1D", "1W", "1M", "3M", "6M"]


	const rangeHandler = (e) => {
		e.target.classList.add(style.active)
		setChosenRange(e.target.innerText)
	}


	return (
		<div className={style.chart}>
			<div className={style.head}>
				<div className={style.title}>Performance chart</div>
				<div className={style.date}>
					{
						ranges.map(range => <div
							key={range} onClick={(e) => rangeHandler(e)}
							className={chosenRange === range ? style.active : style.ranges}
						>{range}</div>)
					}
				</div>
			</div>
			<div className={style.content}>
				<div className={style.line}>
					<LineGraph
						width={"1000px"}
						height={"350px"}
						chosenRange={chosenRange}
					/>
				</div>
			</div>
		</div>
	);
};
export default Chart;
