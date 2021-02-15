import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import {logo,Linkdin,banner} from './icon'
import UserDetail from './UserDetail';
export default function DashBoard() {
  const history = useHistory();
  const handleClick = () => {
    history.push('/Login');
  }

 const userDetail = () => {
  history.push('/UserDetail');
 }
  return (
    <div className="" style={{flex:1}}>
      <h3 style={{textAlign:'center' ,color:'green'}}>Dashboard Page</h3>
      <div style={{height:'30' , width:'100',backgroundColor:'red'}}>
      <img  width="100" height="30" src={require('./image/logo.png')} />
        <button style={{marginLeft:40}} type="submit" onClick={userDetail}  >UserDetail</button>
        <button style={{marginLeft:'70%'}} type="submit" onClick={handleClick} >Logout</button>
      </div>
      <div className="body" style={{display:'flex'}} >
        <img src={require('./image/logo.png')}  width="100" height="30" />
          <h3 style={{marginLeft:'45%'}}>Body</h3>
      </div>
      <div  className="body" style={{height:100 , marginLeft:20}}>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6> 
        <h6>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h6>
        <h6> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h6>
        <h6> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h6>
      </div>
      <div style={{ marginTop:280,width:"100%"}}>
      </div>
      <div className="footer" style={{backgroundColor:'#3275a8'}}>
      <h3 style={{textAlign:'center'}}>This is footer</h3>
      </div>
    </div>
  );
}