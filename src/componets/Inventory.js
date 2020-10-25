import React, {useState} from 'react';
import {Row, Col, ProgressBar, Button} from 'react-bootstrap'


const data=[
    {
        name:"Yam",
        price:5000,
        availability:700
    },
    {
        name:"Beans",
        price:10000,
        availability:500
    },
    {
        name:"gari",
        price:6000,
        availability:400
    },
    {
        name:"tissue",
        price:7000,
        availability:200
    },
    {
        name:"paste",
        price:1000,
        availability:800
    },
    {
        name:"toot pick",
        price:2000,
        availability:100
    },
    {
        name:"towel",
        price:3000,
        availability:900
    },
    
]


const Inventory =()=>{
    const [addProduct, setAddProduct]= useState(false)
    const [productType, setProductType] = useState("")
    return(
        <div>
            <Row>
                <Col xs={3} className="inventory-header">No</Col>
                <Col xs={3} className="inventory-header">Name</Col>
                <Col xs={3} className="inventory-header">Price(Naira)</Col>
                <Col xs={3} className="inventory-header">Availability</Col>
            </Row>
            {
                data.map((item,index)=>(
                    <Row key={index} className="inventory-list">
                        <Col xs={3} className="inventory-items">{index}</Col>
                        <Col xs={3}className="inventory-items">{item.name}</Col>
                        <Col xs={3} className="inventory-items">{item.price}</Col>
                        <Col xs={3} className="inventory-items">{
                        item.availability<250?(
                        <ProgressBar variant="danger" now={item.availability} max={1000} />
                        ):item.availability<450?(
                        <ProgressBar variant="warning" now={item.availability} max={1000} />
                        ):(
                        <ProgressBar now={item.availability} max={1000} />
                        )}</Col>
                    </Row>
                ))
            }
            {
                addProduct?(
                <Row className="add-stock">
                    <Col xs={3}><Button onclick={()=>setProductType("new")}>New Product</Button></Col>
                    <Col><Button onclick={()=>setProductType("old")}>Top up</Button></Col>
                </Row>):(<div/>)
            }
            {
                productType === "new"?(
                    <div>
                        <form className="add-employee-form">
                            <p className="inventory-header">Name</p>
                            <input type="text" className="add-employee-form-input"/>
                            <p className="inventory-header">Price</p>
                            <input type="text" className="add-employee-form-input"/>
                            <p className="inventory-header">Amount</p>
                            <input type="text" className="add-employee-form-input"/>
                            <input
                                type="submit"
                                value="Add"
                                className="add-employee-form-button"
                                />
                        </form>
                    </div>
                ):productType==="old"?(
                    <div>old</div>
                ):(
                    <div/>
                )
            }
            <Row>
            <Col xs={3}><Button className="add-stock" onClick={()=>setAddProduct(true)}>Add product</Button></Col>
            </Row>
        </div>
    )
}

export default Inventory