import React,{useState} from 'react';
import {Row, Col, Container} from 'react-bootstrap'
import Navbar from '../componets/Navbar'
import { 
    FaRegSquare, 
    FaRegUser, 
    FaRegListAlt, 
    FaWarehouse 
} from "react-icons/fa"
import {useStoreContext} from "../util/store"
import { Redirect } from "react-router-dom"

import Inventory from "../componets/Inventory"
import Employee from "../componets/Employee"

const Admin = (Props)=>{
    const [page, setPage]=useState("stock")
    const {
        isLoggedIn
    }=useStoreContext()
    
    return isLoggedIn ? (
    <div>
        <Navbar/>
        <Row className="aside-main">
            <Col xs={2}>
            <div className="aside-inner bg-dark navbar-dark">
                <ul>
                    <li className="nav-link aside-list"> 
                        <FaRegSquare className="aside-btn"/>
                        <a href="#" onClick={()=>setPage("dashboard")}  className="aside-btn">DashBoard</a>
                    </li>
                    <li className="nav-link aside-list">
                        <FaRegUser className="aside-btn"/>
                        <a href="#" onClick={()=>setPage("employee")} className="aside-btn">Employee</a>
                    </li>
                    <li className="nav-link aside-list">
                        <FaWarehouse className="aside-btn"/>
                       <a href="#" onClick={()=>setPage("stock")}  className="aside-btn">Stock</a>
                    </li>
                    <li className="nav-link aside-list"> 
                    <FaRegListAlt className="aside-btn"/>
                        <a href="#" onClick={()=>setPage("report")} className="aside-btn">Report</a>
                    </li>
                </ul>
            </div>
            </Col>
            <Col className="inner-space" >
            <Container>
            {page ==="dashboard"?(
                <div>Dashboard</div>
            ):page==="employee"?(
            <Employee/>
            ):page==="stock"?(
                <Inventory/>
            ):page==="report"?(
                <div>report</div>
            ):(<div>customer</div>)}
            </Container>
            </Col>
        </Row>
    </div>
    ):(<div>
        {alert("you must logged in")}
        <Redirect to={"/"} />
    </div>)
}

export default Admin