import React,{useState,useEffect} from 'react';
import './App.css';
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
	return (
		<div className="App">
			<h3>Registration Form</h3>
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label>Name</label>
					<input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} required />
				</div>
				<div className="form-group">
					<label>Email</label>
					<input type="Email" className="form-control" value={email} onChange={onChangeEmail} required />
				</div>
				<div className="form-group">
					<label>Phone</label>
					<input type="tel" className="form-control"  value={phone} onChange={onChangePhone} required />
				</div>
				<div className="form-group">
					<label>Password</label>
					<input type="Password" className="form-control"  value={password} onChange={onChangePassword} required />
				</div>
				<button type="submit" className="btn btn-primary btn-block" >Registerd</button>
			</form>
		</div>
	);
}


