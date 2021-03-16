import React from 'react';
import style from './Eventlog.module.scss';


const Eventlog = () => {

    return (
        <div className={style.event}>
            <div className={style.title}>Event Log</div>
            <div className={style.table_titles}>
                <div>Type</div>
                <div>Change</div>
                <div>Time</div>
            </div>
            <div className={style.table_row}>
                <div>Withdraw rewards</div>
                <div>0.241852 MIR</div>
                <div>2020.12.23 07:37:13 (CST)</div>
            </div>
            <div className={style.table_row}>
                <div>Provided Liquidity</div>
                <div>0.3 MIR and 1.675 UST</div>
                <div>2020.12.23 07:37:13 (CST)</div>
            </div>
            <div className={style.table_row}>
                <div>Bought</div>
                <div>0.178894 MIR with 1 UST</div>
                <div>2020.12.23 07:37:13 (CST)</div>
            </div>
        </div>
    );
}
export default Eventlog;