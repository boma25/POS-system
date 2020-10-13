import React,{useState} from 'react';
import {Row, Col, Button, Container} from 'react-bootstrap'
import Navbar from '../componets/Navbar'
import { 
    FaRegSquare, 
    FaRegUser, 
    FaRegListAlt, 
    FaWarehouse 
} from "react-icons/fa"

import Inventory from "../componets/Inventory"


const Admin = ()=>{
    const [page, setPage]=useState("dashboard")
    return (
    <div>
        <Navbar/>
        <Row className="admin-main">
            <Col xs={2}>
            <div className="aside-main bg-dark navbar-dark">
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
                    <li className="nav-link aside-list">
                        <FaRegUser className="aside-btn"/>
                        <a href="#" onClick={()=>setPage("customer")} className="aside-btn">Customer</a>
                    </li>
                </ul>
            </div>
            </Col>
            <Col>
            <Container>
            {page =="dashboard"?(
                <div>Dashboard</div>
            ):page=="employee"?(
            <div>employee</div>
            ):page=="stock"?(
                <Inventory/>
            ):page=="report"?(
                <div>report</div>
            ):(<div>customer</div>)}
            </Container>
            </Col>
        </Row>
    </div>
    )
}

export default Admin