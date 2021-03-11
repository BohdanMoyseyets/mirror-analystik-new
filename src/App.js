import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import Portfolio from "./pages/Portfolio";
import Login from "./pages/Login";
import "./App.css";

function App() {
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
