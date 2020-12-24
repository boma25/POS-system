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
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav group-nav">
						<li className="nav-item nav-link">{name}</li>
						<li className="nav-item">
							<a href="#" className="nav-link">
								My Account
							</a>
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
