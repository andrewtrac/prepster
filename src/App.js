import React from "react";
import Body from "./components/Body";
import Landing from "./components/Landing";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Redirect,
} from "react-router-dom";


import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/home">
            <Body />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
