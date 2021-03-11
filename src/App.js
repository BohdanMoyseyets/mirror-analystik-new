import { useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import Portfolio from "./pages/Portfolio";
import Login from "./pages/Login";
import "./App.css";
import React from "react";

const session = window.sessionStorage;

function App() {
  useEffect(() => {
    const address = session.getItem("address");
    if (!address) history.push("/");
  }, []);

  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
