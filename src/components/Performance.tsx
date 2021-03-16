import React from "react";
import style from "./Performance.module.scss";
import info_img from "./../images/info_img.png";
import ReactTooltip from 'react-tooltip'

const session = window.sessionStorage;

const Performance = () => {
  const address = session.getItem('address') || 'terra1n6tx...kv2kuc';

  return (
    <div className={style.performance}>
      <div className={style.title}>
        <div>Portfolio Performance</div>
        <div>{address}</div>
      </div>
      <div className={style.content}>
        <div className={style.block}>
          <div>
            <span className={style.block_name}>Performance</span>
            <span className={style.info_icon}>
              <img  data-tip='Total value of all Performance' src={info_img} alt="" />
              <ReactTooltip type="light"  place="top" />
            </span>
          </div>
          <div className={style.block_text}>10%</div>
        </div>
        <div className={style.block}>
          <div>
            <span className={style.block_name}>Equity</span>
            <span className={style.info_icon}>
              <img data-tip='Total value of all Equity' src={info_img} alt="" />
              <ReactTooltip type="light"  place="top" />
            </span>
          </div>
          <div className={style.block_text}>25,251 UST</div>
        </div>
        <div className={style.block}>
          <div>
            <span className={style.block_name}>Trades Profitable</span>
            <span className={style.info_icon}>
              <img data-tip='Total value of all Trades Profitable' src={info_img} alt="" />
              <ReactTooltip type="light"  place="top" />
            </span>
          </div>
          <div className={style.block_text}>98</div>
        </div>
        <div className={style.block}>
          <div>
            <span className={style.block_name}>Daily PNL</span>
            <span className={style.info_icon}>
              <img data-tip='Total value of all Daily PNL' src={info_img} alt="" />
              <ReactTooltip type="light"  place="top" />
            </span>
          </div>
          <div className={style.block_text}>+0.1%</div>
        </div>
      </div>
    </div>
  );
};
export default Performance;
