/** @format */

import axios from "axios"
import { BASE_URL } from "./Global"

const api = axios.create({
	baseURL: BASE_URL,
	withCredentials: true,
})

// auth routes

export const login = async (username, password) => {
	let response = await api.post(`/auth/login`, {
		username,
		password,
		withCredentials: true,
	})
	return response.data
}
export const getLogin = async () => {
	let response = await api.get(`/auth/isLogged`)
	return response.data
}
export const Logout = async () => {
	let response = await api.get(`/auth/logout`)
	return response.data
}
export const reset = async (username, password, newPassword) => {
	let response = await api.post(`/auth/reset`, {
		username,
		password,
		newPassword,
	})
	return response.data
}

// user routes
export const get_employees = async () => {
	let response = await api.get(`/user/`)
	return response.data
}
export const add_employee = async (
	firstName,
	lastName,
	phoneNo,
	email,
	address,
	password,
	permission
) => {
	let response = await api.post(`/user/register`, {
		firstName,
		lastName,
		phoneNo,
		email,
		address,
		password,
		permission,
	})
	return response.data
}
export const delete_employee = async (id) => {
	let response = await api.delete(`/user/delete/${id}`)
	return response.data
}

export const getDetails = async (username) => {
	let response = await api.post(`/user/getDetails`, {
		username,
	})
	return response.data
}

//inventory routes
export const get_stock = async () => {
	let response = await api.get(`/inventory/`)
	return response.data
}

export const add_to_stock = async (name, price, quantity) => {
	let response = await api.post(`/inventory/new`, {
		name,
		price,
		quantity,
	})
	return response.data
}
export const edit_stock = async (name, price, new_amount) => {
	let response = await api.post(`/inventory/edit`, {
		name,
		price,
		new_amount,
	})
	return response.data
}
export const delete_stock = async (id) => {
	let response = await api.delete(`/inventory/delete/item/${id}`)
	return response.data
}

export const checkOut = async (name, new_amount) => {
	let response = await api.post(`/inventory/subtract/quantity`, {
		name,
		new_amount,
	})
	return response.data
}
