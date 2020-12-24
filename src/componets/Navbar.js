/** @format */

import React from "react"
import { Link } from "react-router-dom"
import { useStoreContext } from "../util/store"
import { Logout } from "../Api/endpoint"

const Navbar = (Props) => {
	const { setIsLoggedIn, name } = useStoreContext()
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<h1 className="navbar-brand">POS SYSTEM</h1>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav group-nav">
						<li className="nav-item nav-link">{name}</li>
						<li>
							<div className="dropdown">
								<button className="dropbtn nav-item nav-link">
									My Account
								</button>
								<div className="dropdown-content bg-dark">
									<Link to={"/reset"} className="nav-item nav-link">
										Change Password
									</Link>
								</div>
							</div>
						</li>
						<li className="nav-item">
							<Link
								to="/"
								className="nav-link"
								onClick={async () => {
									try {
										setIsLoggedIn(false)
										const response = await Logout()
										alert(response)
									} catch (e) {
										alert(e)
									}
								}}
							>
								logout
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}

export default Navbar
