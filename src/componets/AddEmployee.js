import React,{useState} from 'react';
import {add_employee} from '../Api/endpoint' 


const AddEmployee=()=>{
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [phoneNo,setPhoneNo] = useState("")
    const [email,setEmail] = useState("")
    const [address,setAddress] = useState("")
    const [permission, setPermission] = useState(false)
    const password = "password"
    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
         const response = await add_employee(firstName,lastName,phoneNo,email,address,password,permission)  
         alert(response) 
        }catch(e){
            alert(e)
        }
    }
    return(
        <div >
            <form className="add-employee-form" onSubmit={(e)=>handleSubmit(e)}>
                <p className="inventory-header">First Name</p>
                <input type="text" className="add-employee-form-input" onChange={(e)=>setFirstName(e.target.value)}/>
                <p className="inventory-header">Last Name</p>
                <input type="text" className="add-employee-form-input" onChange={(e)=>setLastName(e.target.value)}/>
                <p className="inventory-header">Phone no</p>
                <input type="text" className="add-employee-form-input" onChange={(e)=>setPhoneNo(e.target.value)}/>
                <p className="inventory-header">Email</p>
                <input type="text" className="add-employee-form-input" onChange={(e)=>setEmail(e.target.value)}/>
                <p className="inventory-header">Address</p>
                <input type="text" className="add-employee-form-input" onChange={(e)=>setAddress(e.target.value)}/>
                <p className="inventory-header">Permission</p>
                <input
					type="submit"
					value="Add"
					className="add-employee-form-button"
					/>
            </form>
        </div>
    )
}

export default  AddEmployee