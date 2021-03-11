import React from "react";
import { Link } from "react-router-dom";
import style from "./Login.module.css";
import logo_login from "../images/logo_login.png";

const Login = (props) => {
  return (
    <div className={style.login}>
      <div className={style.round}></div>
      <div className={style.logo}>
        <img src={logo_login} alt="" />
      </div>
      <div className={style.title}>Data Driven Trading Analytics</div>
      <div className={style.sub_title}>
        Actionable insights to improve your trading and <br />
        discover strategies that work.
      </div>
      <div className={style.form_block}>
        <div className={style.input}>
          <input type="text" placeholder="enter Mirror wallet" />
        </div>
        <Link to="/portfolio" style={{ textDecoration: "none" }}>
          <div className={style.button}>Lookup</div>
        </Link>
      </div>
    </div>
  );
};

export default Login;
