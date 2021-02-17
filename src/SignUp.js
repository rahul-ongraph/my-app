import React,{useState,useEffect} from 'react';
import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useHistory
} from "react-router-dom";
export default function SignUp() {
	const [email,setEmail] = useState('')
	const [name,setName] = useState('')
  const [phone,setPhone] = useState('')
	const [password,setPassword] = useState('')	
	// const onChangeName = (e) =>{
	// 	console.log(e)
  // }
 const  onChangeEmail = (e) =>{
    setEmail(e.target.value)
  }
 const  onChangePhone = (e) =>{
    setPhone(e.target.value)
  }
 const onChangePassword = (e) =>{
    setPassword(e.target.value)
  }	
const onSubmit = (e) =>{
	console.log('Hello')
    let userData = {
      name:name,
      email:email,
      phone:phone,
      password:password,
    }
    let olddata = localStorage.getItem('userData');
	console.log( 'beforeSignup',olddata)
    if(olddata==null){
      olddata = []
      olddata.push(userData)
      localStorage.setItem('userData',JSON.stringify(olddata));
			console.log('Data saved',olddata)
    }else{
      let oldArr = JSON.parse(olddata)
      oldArr.push(userData)
      localStorage.setItem("userData", JSON.stringify(oldArr))
      console.log(oldArr,'hhg')
    }   
  }
	const history = useHistory();
	const handleClick = () => {
		history.push('/Login');
	}
	return (
		<div style={{ backgroundColor: '#305961', height: 520, flex: 1 }}>
		<div style={{ textAlign: 'center' }}>
			<h3>Registration Form</h3>
			<div style={{ marginTop: 50, marginLeft: 360, height: 350, width: '40%', backgroundColor: 'white' }}>
					<div>
						<h3>Sign Up to Pirix</h3>
					</div>
			<form style={{ marginTop: 30 }} onSubmit={onSubmit}>
				<div className="form-group">
					<label style={{ fontWeight: 'bold' }}>Name</label>
					<input style={{ marginLeft: 30, height: 20 }} type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} required />
				</div>
				<div  className="form-group">
					<label style={{ fontWeight: 'bold' }}>Email</label>
					<input style={{ marginLeft: 35, height: 20  , marginTop:10}} type="Email" className="form-control" value={email} onChange={onChangeEmail} required />
				</div>
				<div className="form-group">
					<label style={{ fontWeight: 'bold' }}>Phone</label>
					<input style={{ marginLeft: 30, height: 20, marginTop:10 }} type="tel" className="form-control"  value={phone} onChange={onChangePhone} required />
				</div>
				<div className="form-group">
					<label style={{ fontWeight: 'bold' }}>Password</label>
					<input style={{ marginLeft:14, height: 20 ,marginTop:10}} type="Password" className="form-control"  value={password} onChange={onChangePassword} required />
				</div>
				<div style={{marginTop:20}}>
				<button  style={{ width: '25%', borderRadius: 10, backgroundColor: '#48d971', borderColor: '#48d971' }} type="submit" className="btn btn-primary btn-block" >Registerd</button>
				</div>
				<div style={{display:'flex' ,marginLeft:180}}>
					<h5 style={{fontSize:12, textAlign:'center'}}>Already have an account?</h5>
					<h5 onClick={handleClick} style={{fontSize:12, textAlign:'center' , color:'#48d971'}}>Log In</h5>
				</div>
			</form>
		</div>
		</div>
		</div>
	);
}


