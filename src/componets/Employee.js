import React,{useState} from 'react';
import {Row} from 'react-bootstrap'

import EmployeeList from "./EmployeeList"
import AddEmployee from "./AddEmployee"
import RemoveEmployee from "./RemoveEmployee"

const Employee =()=>{
    const [page, setPage]=useState("list")
    return(
        <div>
            {
                page==="list"?(
                    <EmployeeList/>
                ):page==="add"?(
                    <AddEmployee/>
                ):(
                    <RemoveEmployee/>
                )
            }
           <Row>
           {
                page==="list"?(
                    <ul className="employee-links">
                        <li> <a href="#" onClick={()=>setPage("add")} className=" employee-links-inner inventory-header">Add an Employee</a></li>
                        <li><a href="#" onClick={()=>setPage("remove")} className="employee-links-inner inventory-header">Remove an Employee</a></li>
                    </ul>
                ):page==="add"?(
                    <ul className="employee-links">
                        <li> <a href="#" onClick={()=>setPage("list")} className="employee-links-inner inventory-header">Employee list</a></li>
                        <li><a href="#" onClick={()=>setPage("remove")} className="employee-links-inner inventory-header">Remove an Employee</a></li>
                    </ul>
                ):(
                    <ul className="employee-links">
                        <li> <a href="#" onClick={()=>setPage("list")} className="employee-links-inner inventory-header">Employee List</a></li>
                        <li><a href="#" onClick={()=>setPage("add")} className="employee-links-inner inventory-header">Add an Employee</a></li>
                    </ul>
                )
            }
           </Row>
        </div>
    )
}

export default Employee