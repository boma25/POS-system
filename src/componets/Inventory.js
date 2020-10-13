import React from 'react';
import {Row, Col, Button, Container} from 'react-bootstrap'

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
    return(
        <div>
            <Row>
                <Col xs={3}>Name</Col>
                <Col xs={3}>Price(Naira)</Col>
                <Col xs={3}>Availability</Col>
            </Row>
            {
                data.map((item,index)=>(
                    <Row key={index} className="inventory-list">
                        <Col xs={3}>{item.name}</Col>
                        <Col xs={3}>{item.price}</Col>
                        <Col xs={3}>{item.availability}</Col>
                    </Row>
                ))
            }
        </div>
    )
}

export default Inventory