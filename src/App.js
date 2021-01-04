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

  const [cookies, setCookie, removeCookie] = useCookies(["prepster-user-x0145"]);

  const cookieSetter = (email) => {
    setCookie('prepster-user-x0145', `${email}`, { path: '/' });
  }

  const cookieRemover = () => {
    removeCookie("prepster-user-x0145", { path: "/" });
  };



  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Landing cookieSetter={cookieSetter} cookies={cookies}/>
          </Route>
          <Route exact path="/home">
            <Body cookieSetter={cookieSetter} cookies={cookies} cookieRemover={cookieRemover}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
