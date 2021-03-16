import React from 'react';
import style from './Header.module.scss'
import logo from './../images/logo.png';


const Header = () => {

    return (
        <div className={style.header+ " " + style.padd}>
                <img src={logo} alt="" />
        </div>
    );
}
export default Header;