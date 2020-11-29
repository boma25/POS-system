/** @format */

import React, { useState } from "react"
import { Redirect } from "react-router-dom"
//import { Button } from "react-bootstrap"
import {login,  getDetails} from "../Api/endpoint"
import {useStoreContext} from "../util/store"

const Login = () => {
	const {
		isLoggedIn,
		setIsLoggedIn,
		setName
	}=useStoreContext()

	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [isLoading, setIsLoading] = useState(false)
	const [to, setTO] = useState("")
	const handleSubmit = async  (evt) => {
		try{
			evt.preventDefault()
			if(username==="" ||  password===""){
				
				alert("username or password cannot be empty")
			}else{
				setIsLoading(true)
				const response = await login(username,password) 
				alert(response)
				if(response==="login successful"){
					const details = await getDetails(username)
					setName(`${details.firstName}  ${details.lastName}`)
					const getTo = details.permission
					if(getTo){
						setTO("Admin")
					}else{
						setTO("Cashier")
					}
					setIsLoggedIn(true)
				}
			
			setIsLoading(false)
			}
			

		}catch(e){
			alert(e)
			setIsLoading(false)
		}
		
	}
	return isLoggedIn ? (
		<Redirect to={to} />
	) : (
		<div className="container">
			<div className="login">
				<div className="login-form">
					<div className="login-form-header">
						<h1 className="login-title">POS SYSTEM</h1>
						<h2 className="login-sub-title"> LOGIN</h2>
					</div>
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder="Username"
							className="login-input"
							onChange={(e) => setUsername(e.target.value)}
						/>
						<p />
						<input
							type="password"
							placeholder="Password"
							className="login-input"
							onChange={(e) => setPassword(e.target.value)}
						/>
						<p />
						{isLoading ? (
							<div class="spinner-border login-form-spinner " role="status">
								<span class="sr-only">Loading...</span>
							</div>
						) : (
							<input
								type="submit"
								value="Login"
								className="login-form-bottom"
							/>
						)}
					</form>
					<p />
					<a href="/" className="login-form-forgot">
						{" "}
						Forgot Password?
					</a>{" "}
				</div>
			</div>
		</div>
	)
}

export default Login
