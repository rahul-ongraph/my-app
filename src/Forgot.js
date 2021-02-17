import React,{Component} from 'react';
import './App.css';
import Login from './Login'
import SignUp from './SignUp'
import DashBoard from './Dashboard'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

export default function Forgot() {
  return (
   <div style={{flex:1}}>
       <h3 style={{textAlign:'center'}}>Forgot Password</h3>
       
   </div>
  );
}


