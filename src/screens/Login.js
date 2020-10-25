/** @format */

import React, { useState } from "react"
import { Redirect } from "react-router-dom"
//import { Button } from "react-bootstrap"

const Login = () => {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [isLoading, setIsLoading] = useState(false)
	const [isLoggedIn, setIsLoggedIng] = useState(false)
	const [to, setTO] = useState("cashier")
	const handleSubmit = (evt) => {
		try{
			setIsLoading(true)
			evt.preventDefault()
			if(username==="" ||  password===""){
				
				alert("incorrect username or password")
			}else if(username==="admin" || username==="Admin" ){
				setTO("admin")
				setIsLoggedIng(true)
				alert("logging successfull")
			}else{
				setIsLoggedIng(true)
				alert("logging successfull")
			}
			setIsLoading(false)

		}catch(e){
			alert(e)
		}
		
	}
	return isLoggedIn ? (
		<Redirect to={to} name="free" />
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
