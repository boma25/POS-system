/** @format */

import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import { reset } from "../Api/endpoint"
import { useStoreContext } from "../util/store"

const Login = () => {
	const { isLoggedIn, to, username } = useStoreContext()
	const [password, setPassword] = useState("")
	const [newPassword, setNewPassword] = useState("")
	const [confPassword, setConfPassword] = useState("")
	const [isLoading, setIsLoading] = useState(false)
	const [resetDone, setResetDone] = useState(false)

	const handleSubmit = async (evt) => {
		try {
			evt.preventDefault()
			if (password === "" || newPassword === "" || confPassword === "") {
				alert("fields cannot be empty")
			} else if (newPassword === password) {
				alert("new password cannot be equal to old password")
			} else if (newPassword !== confPassword) {
				alert("passwords do not match")
			} else {
				setIsLoading(true)
				try {
					const response = await reset(username, password, newPassword)
					alert(response)
					if (response === "password successfully updated") {
						setResetDone(true)
					}
				} catch (e) {
					alert(e)
				}

				setIsLoading(false)
			}
		} catch (e) {
			alert(e)
			setIsLoading(false)
		}
	}

	return !isLoggedIn ? (
		<Redirect to={"/"} />
	) : resetDone ? (
		<Redirect to={to} />
	) : (
		<div className="container">
			<div className="login">
				<div className="login-form">
					<div className="login-form-header">
						<h1 className="login-title">POS SYSTEM</h1>
						<h2 className="reset-sub-title"> Password reset</h2>
					</div>
					<form onSubmit={handleSubmit}>
						<input
							type="password"
							placeholder="Password"
							className="login-input"
							onChange={(e) => setPassword(e.target.value)}
						/>
						<p />
						<input
							type="password"
							placeholder="NewPassword"
							className="login-input"
							onChange={(e) => setNewPassword(e.target.value)}
						/>
						<p />
						<input
							type="password"
							placeholder="Confirm password"
							className="login-input"
							onChange={(e) => setConfPassword(e.target.value)}
						/>
						<p />
						{isLoading ? (
							<div className="spinner-border login-form-spinner " role="status">
								<span className="sr-only">Loading...</span>
							</div>
						) : (
							<input
								type="submit"
								value="Reset"
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
