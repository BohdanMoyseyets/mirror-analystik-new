import React from "react";
import style from "./Chart.module.css";
import LineGraph from "./LineGraph";
import { Line } from 'react-chartjs-2';

const Chart = (props) => {
  const data = {
    labels: ["May", "Jun", "Jun", "Jul", "Jul", "Aug", "Sep", "Sep", "Oct", "Oct", "Nov", "Nov", "Dec", "Dec", "Jan", "Jan"],
    datasets: [
      {
        label: "Percent",
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
        fontColor: '#000',
        data: [20, 20, 30, 35, 40, 40, 40, 40, 40, 40, 30, 20, 40, 50, 60, 80],
        
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
                    color: "red",
                      size: 60
                  },
                  
                  
              }
          }
      }
  }
       
      }
    ]
    
  };

  return (
    <div className={style.chart}>
      <div className={style.head}>
        <div className={style.title}>Performance chart</div>
        <div className={style.date}>
          <div className={style.active}>ALL</div>
          <div>1D</div>
          <div>1W</div>
          <div>1M</div>
          <div>3M</div>
          <div>6M</div>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.line_y}>
          <div>70%</div>
          <div>60%</div>
          <div>50%</div>
          <div>40%</div>
          <div>30%</div>
          <div>20%</div>
          <div>10%</div>
        </div>
        <div className={style.line}>
          <Line data={data} width={"1000px"} height={"350px"} font-size={"30px"} />
          {/* <LineGraph /> */}
        </div>
      </div>
      <div className={style.line_x}>
        <div>May</div>
        <div>Jun</div>
        <div>Jun</div>
        <div>Jul</div>
        <div>Jul</div>
        <div>Aug</div>
        <div>Sep</div>
        <div>Sep</div>
        <div>Oct</div>
        <div>Oct</div>
        <div>Nov</div>
        <div>Nov</div>
        <div>Dec</div>
        <div>Dec</div>
        <div>Jan</div>
        <div>Jan</div>
      </div>
    </div>
  );
};
export default Chart;
