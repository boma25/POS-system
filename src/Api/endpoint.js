import axios from "axios"
import {BASE_URL} from "./Global"


export const get_user= axios.get(`${BASE_URL}/user`)

export const login = async (username,password)=>{
    let response = await axios.post(`${BASE_URL}/user/login`,{username,password})
    return response.data
}

export const get_stock = async ()=>{
    let response = await axios.get(`${BASE_URL}/inventory/`)
    return response.data

}

export const add_to_stock = async (name,price,quantity)=>{
    let response = await axios.post(`${BASE_URL}/inventory/new`,{name, price, quantity})
    return response.data

}
export const edit_stock = async (name,price,new_amount)=>{
    let response = await axios.post(`${BASE_URL}/inventory/edit`,{name, price, new_amount})
    return response.data

}
export const delete_stock = async (id)=>{
    let response = await axios.delete(`${BASE_URL}/inventory/delete/item/${id}`)
    return response.data

}