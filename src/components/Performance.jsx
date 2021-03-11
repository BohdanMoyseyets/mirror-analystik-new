import React from 'react';
import style from './Performance.module.css';
import info_img from './../images/info_img.png'


const Performance = (props) => {

    return (
        <div className={style.performance}>
            <div className={style.title}>
                <div>Portfolio Performance</div>
                <div>terra1n6tx...kv2kuc</div>
            </div>
            <div className={style.content}>
                <div className={style.block}>
                    <div>
                        <span className={style.block_name}>Performance</span>
                        <span className={style.info_icon}><img src={info_img} alt=""/></span>
                    </div>
                    <div className={style.block_text}>10%</div>
                </div>
                <div className={style.block}>
                    <div>
                        <span className={style.block_name}>Equity</span>
                        <span className={style.info_icon}><img src={info_img} alt=""/></span>
                    </div>
                    <div className={style.block_text}>25,251 UST</div>
                </div>
                <div className={style.block}>
                    <div>
                        <span className={style.block_name}>Trades Profitable</span>
                        <span className={style.info_icon}><img src={info_img} alt=""/></span>
                    </div>
                    <div className={style.block_text}>98</div>
                </div>
                <div className={style.block}>
                    <div>
                        <span className={style.block_name}>Daily PNL</span>
                        <span className={style.info_icon}><img src={info_img} alt=""/></span>
                    </div>
                    <div className={style.block_text}>+0.1%</div>
                </div>

            </div>
        </div>
    );
}
export default Performance;