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
					setError( 'Please check your password')
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
	return (
		<div className="App">
			<h3>Login Form</h3>
			<form onSubmit={onSubmit} >

				<div className="form-group">
					<label>Email</label>
					<input type="text" className="form-control" value={email} onChange={onChangeEmail} required />
				</div>
				<div className="form-group">
					<label>Password</label>
					<input type="password" className="form-control" value={password} onChange={onChangePassword} required />
				</div>
				{errorVisiblity ?
					<p style={{color:'red'}} className="error">
						{error}
					</p>
					:
					null
				}
				<button type="submit">Login</button><th></th>
				<button onClick={handleClick} type="submit" >SignUp</button>
			</form>
		</div>
	);
}
