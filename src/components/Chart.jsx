import React from "react";
import style from "./Chart.module.scss";
import LineGraph from "./LineGraph";


const Chart = (props) => {

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
        <div className={style.line}>
          <LineGraph width={"1000px"} height={"350px"}/>
        </div>
      </div>
    </div> 
  );
};
export default Chart;
