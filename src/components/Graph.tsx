import React from 'react';
import style from './Graph.module.scss';
import { PieChart } from 'react-minimal-pie-chart';


const Graph = () => {

    return (
        <div className={style.graph}>
            <div className={style.left}>
                
                <div className={style.round}>
                    <PieChart data={[
                        { title: 'mTWTR', value: 25, color: '#6170A6' },
                        { title: 'mTSLA', value: 25, color: '#A66161' },
                        { title: 'UST', value: 25, color: '#CC6751' },
                        { title: 'mTWTR', value: 25, color: '#A69F61' },
                    ]}
                    />
                    <div className={style.center_round}>
                        <div className={style.center_round_name}>Current <br/> Holdings</div>
                    </div>

                </div>
                <div className={style.list}>
                    <div className={style.block_1}><div></div> <span>UST</span></div>
                    <div className={style.block_2}><div></div> <span>mTWTR</span></div>
                    <div className={style.block_3}><div></div> <span>mTWTR</span></div>
                    <div className={style.block_4}><div></div> <span>mTSLA</span></div>
                </div>
            </div>
            <div className={style.right}>
                <div className={style.info}>
                    <div className={style.row}>
                        <div>Profitable Trades</div>
                        <div>25</div>
                    </div>
                    <div className={style.row}>
                        <div>Trades</div>
                        <div>68</div>
                    </div>
                    <div className={style.row}>
                        <div>Buy Trades</div>
                        <div>34</div>
                    </div>
                    <div className={style.row}>
                        <div>Sell Trades</div>
                        <div>30</div>
                    </div>
                </div>
                <div className={style.info}>
                    <div className={style.row}>
                        <div>Equity</div>
                        <div>25,251 UST</div>
                    </div>
                    <div className={style.row}>
                        <div>Age</div>
                        <div>8 mo</div>
                    </div>
                    <div className={style.row}>
                        <div>Total Deposits</div>
                        <div>2</div>
                    </div>
                    <div className={style.row}>
                        <div>Total Withdraws</div>
                        <div>6</div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Graph;