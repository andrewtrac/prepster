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
import { useCookies } from "react-cookie";


import "./App.css";

function App() {

  const [cookies, setCookie] = useCookies(["users"]);

  const cookieSetter = (email) => {
    setCookie('user', `${email}`, { path: '/' });
  }


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Landing cookieSetter={cookieSetter} cookies={cookies}/>
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
