import React, { useEffect, useState, FC } from "react";
import style from "./Chart.module.scss";
import LineGraph from "./LineGraph";

const ranges = ["ALL", "1D", "1W", "1M", "3M", "6M"];
const percents = [
  "0%",
  "20%",
  "20%",
  "30%",
  "30%",
  "40%",
  "40%",
  "40%",
  "40%",
  "40%",
  "30%",
  "20%",
  "40%",
  "50%",
  "60%",
  "80%",
];
const months = [
  "May",
  "Jun",
  "Jun",
  "Jul",
  "Jul",
  "Aug",
  "Sep",
  "Sep",
  "Oct",
  "Oct",
  "Nov",
  "Nov",
  "Dec",
  "Dec",
  "Jan",
  "Jan",
];
const month = ["Week 1", "Week 2", "Week 3", "Week 4"];
const week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const day = ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "24:00"];

const Chart: FC = () => {
  const [chosenRange, setChosenRange] = useState<string>("ALL");
  const [axisY, setAxisY] = useState<any>(percents);
  const [axisX, setAxisX] = useState<string[]>(months);

  const rangeHandler = (e: any) => {
    //  FIX
    setChosenRange(e.target.innerText);
    e.target.classList.add(style.active);
  };

  useEffect(() => {
    manageRange(chosenRange);
  }, [chosenRange]);

  function manageRange(chosenRange: string) {
    if (chosenRange) {
      switch (chosenRange) {
        case "ALL":
          setAxisY(percents);
          setAxisX(months);
          break;
        case "1D":
          setAxisY(percents);
          setAxisX(day);
          break;
        case "1W":
          setAxisY(percents);
          setAxisX(week);
          break;
        case "1M":
          setAxisY(percents);
          setAxisX(month);
          break;
        case "3M":
          setAxisY(percents);
          setAxisX(months.slice(-3));
          break;
        case "6M":
          setAxisY(percents);
          setAxisX(months.slice(-6));
          break;
        default:
          break;
      }
    }
  }

  return (
    <div className={style.chart}>
      <div className={style.head}>
        <div className={style.title}>Performance chart</div>
        <div className={style.date}>
          {ranges.map((range) => (
            <div
              key={range}
              onClick={(e) => rangeHandler(e)}
              className={chosenRange === range ? style.active : style.ranges}
            >
              {range}
            </div>
          ))}
        </div>
      </div>
      <div className={style.content}>
        <div className={style.line}>
          <LineGraph
            width={"1000px"}
            height={"350px"}
            axisY={axisY ?? percents}
            axisX={axisX ?? months}
          />
        </div>
      </div>
    </div>
  );
};
export default Chart;
