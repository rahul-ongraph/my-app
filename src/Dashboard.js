import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import logo from './image/logo.png'
import banner from './image/banner.jpg'
import debit from './image/debit.png'
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
    <div className="Menu" style={{ flex: 1 }}>
      <div style={{ backgroundColor: '#a19e97', height: 40, display: 'flex', justifyContent: 'flex-end' }}>
        <button style={{ borderRadius: 20, borderColor: 'green', width: 130, height: 25, marginTop: 10, color: 'green' }}>Sign in</button>
        <button style={{ borderRadius: 20, borderColor: 'green', width: 130, height: 25, marginTop: 10, color: 'green', marginLeft: 10 }}>Join</button>
      </div>
      <div style={{ height: 20, display: 'flex' }}>
        <h2 style={{ marginLeft: 30 }}>Pirix</h2>
        <div style={{ marginLeft: '66%', display: 'flex' }}>
          <h6 style={{ marginLeft: 30 }}>Benefits</h6>
          <h6 style={{ marginLeft: 30, color: 'green' }}>Pricing</h6>
          <h6 style={{ marginLeft: 30 }}>FAQs</h6>
          <h6 style={{ marginLeft: 30 }}>About</h6>
          <h6 style={{ marginLeft: 30 }}>Contact</h6>
        </div>
      </div>
      <div style={{ marginTop: 35 }}>
        <img width="100%" height="130" src={banner} />
      </div>
      <div style={{ marginLeft: 30, display: 'flex', height: 30 }}>
        <h2 style={{ color: '#34eb3d', width: '100%' }}>Pay as little as 13 pence per day</h2><br></br>
        <img width="20%" height="80" style={{ marginEnd: 40, marginTop: 70 }} src={debit} />
      </div>
      <div style={{ marginLeft: 30, width: '70%', height: 50 }}>
        <p style={{ marginTop: 30, fontSize: 12 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
        <p style={{ fontSize: 12 }}>enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla</p>
        <p style={{ fontSize: 12 }}>pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div style={{ marginTop: 50, height: 80, backgroundColor: '#4287f5' }}>
        <div style={{ marginLeft: 30 }}>
          <p style={{ width: '60%', fontSize: 12 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
        </div>
      </div>
      <div style={{ marginTop: 10, marginLeft: 30 }}>
        <p >Join the Pirix Movement</p>
        <p style={{ fontSize: 12, width: '90%' }}>The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.)
   that doesn't distract from the layout. A practice not without controversy, laying out pages</p>
        <p style={{ fontSize: 12 }}>with meaningless filler text can be very useful when the focus is meant to be on design, not content.The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during
     the 90s as desktop publishers bundled the text with their software.</p>
        <p style={{ fontSize: 12, width: '90%' }}>The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.)
   that doesn't distract from the layout. A practice not without controversy, laying out pages</p>
      </div>
      <div style={{ backgroundColor: '#4287f5', height: 150 }}>
        <div style={{ marginLeft: 30, display: 'flex', height: 30 }}>
          <h2 style={{ color: '#34eb3d', width: '100%' }}>Pay as little as 13 pence per day</h2><br></br>
          <img width="20%" height="80" style={{ marginEnd: 40, marginTop:50 }} src={debit} />
        </div>
        <div style={{ marginLeft: 30, width: '70%', height: 50 }}>
          <p style={{ marginTop: 30, fontSize: 12 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
          <p style={{ fontSize: 12 }}>enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla</p>
          <p style={{ fontSize: 12 }}>pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div style={{ marginLeft: 30, display: 'flex', height: 30 }}>
        <h2 style={{width:'100%',color:'#42d7f5' }}>Personalize Your Pirx </h2><br></br>
        <img width="20%" height="80" style={{ marginEnd: 40, marginTop:50}} src={debit} />
      </div>
      <div style={{ marginLeft: 30, width: '70%', height:40 }}>
        <p style={{ marginTop: 30, fontSize: 12 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
        <p style={{ fontSize: 12 }}>enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla</p>
      </div>
      <div style={{height:40,backgroundColor:'#305961',marginTop:40 ,display:'flex', justifyContent:'space-evenly' }}>
        <p style={{marginLeft:30,fontSize:12}}>Pirix Limited,60 St Martin's Lane,London,WC2n4js</p>
        <p style={{fontSize:12}}>Terms & condition Privacy policy cookie Policy </p>
        <p style={{fontSize:12}}>Copyright Price Ltd.All rights reserves</p>
      </div>

      <div style={{ height: 30 }}>

      </div>
    </div>

  );
}