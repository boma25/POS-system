import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import Login from './screens/Login'
  import Admin from './screens/Admin'
  import Cashier from './screens/Cashier'
  

  export default function MainRouter() {
    return (
      <Router>
          <Switch>
            <Route path={"/login"}>
              <Login />
            </Route>
            {/* {<Route path={"/"}>
              <Login />
            </Route>} */}
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/cashier">
              <Cashier />
            </Route>
          </Switch>
      </Router>
    );
  }