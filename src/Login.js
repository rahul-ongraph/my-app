import React, { useEffect, useState } from 'react';
import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useHistory
} from "react-router-dom";
import { Redirect } from 'react-router-dom';
import DashBoard from './Dashboard';
import Forgot from './Forgot'
export default function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const [errorVisiblity, setErrorVisiblity] = useState(false)
	const onChangeEmail = (e) => {
		setEmail(e.target.value)
		setErrorVisiblity(false)
	}
	const onChangePassword = (e) => {
		setPassword(e.target.value)
		setErrorVisiblity(false)
	}
	const onSubmit = (e) => {
		let ele;
		e.preventDefault()
		let olddata = localStorage.getItem('userData')
		let oldArr = JSON.parse(olddata)
		oldArr.map(arr => {
			if (email.length > 0 && password.length > 0) {
				if (arr.email == email && (arr.password == password)) {
					let user = email;
					history.push({ pathname: "/DashBoard", user: email });
				} else if (arr.email == email && arr.password !== password) {
					setError('Please check your password')
					setErrorVisiblity(true)
				}
				else {
					setError('User does not exist')
					setErrorVisiblity(true)
				}
			}
		}
		)
	}
	const history = useHistory();
	const handleClick = () => {
		history.push('/SignUp');
	}
  const ForgotScreen = () => {
		history.push('/Forgot');
	} 
 
	return (
		<div style={{ backgroundColor: '#305961', height: 520, flex: 1 }}>
			<div style={{ textAlign: 'center' }}>
				<h3>Login Form</h3>
				<div style={{ marginTop: 50, marginLeft: 360, height: 350, width: '40%', backgroundColor: 'white' }}>
					<div>
						<h3>Login to Pirix</h3>
					</div>
					<form style={{ marginTop: 50 }} onSubmit={onSubmit} >
						<div className="form-group">
							<label style={{ fontWeight: 'bold' }}>Email
							<input style={{ marginLeft: 35, height: 20 }} type="text" className="form-control" value={email} onChange={onChangeEmail} required />
							</label>
						</div>
						<div style={{ marginTop: 20 }} className="form-group">
							<label style={{ fontWeight: 'bold' }}>Password
							<input style={{ marginLeft: 15, height: 20 }} type="password" className="form-control" value={password} onChange={onChangePassword} required />
							</label>
						</div>
						{errorVisiblity ?
							<p style={{ color: 'red' }} className="error">
								{error}
							</p>
							:
							null
						}
					</form>
					<div style={{ marginTop: 30 }}>
						<h5 onClick={ForgotScreen} style={{ color: '#48d9cf' }}>Forgot your password?</h5>
						<h5 style={{ fontWeight: 'normal' }}>Rember Me</h5>
						<button style={{ width: '25%', borderRadius: 10, backgroundColor: '#48d971', borderColor: '#48d971' }} type="submit">Sign in</button><th></th>
						<p onClick={handleClick} style={{ color: '#48d9cf' }}>Not yet joined? Click here to join the benefits revolution</p>
					</div>
				</div>
			</div>
		</div>
	);
}