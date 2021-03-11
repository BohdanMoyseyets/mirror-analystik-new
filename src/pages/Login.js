import React, { useState } from "react";
import style from "./Login.module.css";
import logo_login from "../images/logo_login.png";
import history from '../history';

const session = window.sessionStorage;

const Login = (props) => {
  const [input, setInput] = useState("");

  // On login form submit
  const onSubmit = (e) => {
    e.preventDefault();
    const isAddress = input.slice(0, 5).toLowerCase() === "terra" ? true : false;
    if (isAddress) {
      setInput('');
      session.setItem('address', input);
      history.push('/portfolio');
      return;
    }
    alert('Error! Address should start from `terra`!')
  };

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
      <form onSubmit={(e) => onSubmit(e)} className={style.form_block}>
        <div className={style.input}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="enter Mirror wallet"
          />
        </div>
        <button type="submit" className={style.button}>
          Lookup
        </button>
      </form>
    </div>
  );
};

export default Login;
