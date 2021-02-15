import React,{Component} from 'react';
import './App.css';
import Login from './Login'
import SignUp from './SignUp'
import DashBoard from './Dashboard'
//import Routes from './Routes'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

export default function UserDetail() {
  return (
   <div style={{flex:1}}>
       <h3 style={{textAlign:'center'}}>User Detail Page</h3>
   </div>
  );
}


