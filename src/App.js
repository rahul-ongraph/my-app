import React,{Component} from 'react';
import './App.css';
import Login from './Login'
import SignUp from './SignUp'
import DashBoard from './Dashboard'
import UserDetail from './UserDetail'
import Forgot from './Forgot'
//import Routes from './Routes'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/Login" component={Login} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route path="/DashBoard" component={DashBoard} />
        <Route path="/UserDetail" component={UserDetail} />
        <Route path="/Forgot" component={Forgot} />
        </Switch>
      </Router>
  );
}


