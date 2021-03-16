import React from 'react';
import style from './Holdings.module.scss';


const Holdings = () => {

    return (
        <div className={style.hold}>
            <div className={style.title}>Holdings</div>
            <div className={style.sub_title}>Total holding value <span>1500 UST</span></div>
            <div className={style.table_titles}>
                <div>Ticker</div>
                <div>Underlying Name</div>
                <div>Price</div>
                <div>Balance</div>
                <div>Value</div>
                <div>Port. Ratio</div>
            </div>
            <div className={style.table_row}>
                <div>mGOOGLE</div>
                <div>Google</div>
                <div>0.957 UST | 8.73%</div>
                <div>0.9999</div>
                <div>500 UST</div>
                <div>33%</div>
            </div>
            <div className={style.table_row}>
                <div>mTWTR</div>
                <div>Twitter</div>
                <div>1,738.317 UST | 1.23%</div>
                <div>0.9999</div>
                <div>500 UST</div>
                <div>33%</div>
            </div>
            <div className={style.table_row}>
                <div>mTSLA</div>
                <div>Tesla</div>
                <div>663 UST | 1.23%</div>
                <div>0.9999</div>
                <div>500 UST</div>
                <div>33%</div>
            </div>
        </div>
    );
}
export default Holdings;