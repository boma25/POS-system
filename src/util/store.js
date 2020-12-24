/** @format */

import React, { createContext, useState, useContext, useEffect } from "react"
import { getLogin, getDetails } from "../Api/endpoint"

const StoreContext = createContext(null)

const StoreProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [name, setName] = useState("")
	const [username, setUsername] = useState("")
	const [to, setTO] = useState("")
	const loggincheck = async () => {
		let response = await getLogin()
		if (response.isLoggedin) {
			setIsLoggedIn(response.isLoggedin)
			const details = await getDetails(response.username)
			setName(`${details.firstName}  ${details.lastName}`)
			setUsername(details.username)
			const getTo = details.permission
			if (getTo) {
				setTO("Admin")
			} else {
				setTO("Cashier")
			}
		} else {
			setIsLoggedIn(response)
		}
	}
	useEffect(() => {
		loggincheck()
	}, [])

	return (
		<StoreContext.Provider
			value={{
				isLoggedIn,
				setIsLoggedIn,
				name,
				setName,
				to,
				setTO,
				username,
				setUsername,
			}}
		>
			{children}
		</StoreContext.Provider>
	)
}

const useStoreContext = () => useContext(StoreContext)

export { StoreProvider, useStoreContext }
