import React from 'react';
import {Row, Col} from 'react-bootstrap'


const data=[
    {
        name:"fred",
        phone:"08127871871",
        email:"shsbASDA@gmail.com",
        address:"No 55 TYHABZD jsdhnsj skajnbadkjn khsaihsb"
    },
    {
        name:"Beans",
        phone:"0802346257",
        email:"JASBNA@gmail.com",
        address:"No 70 AHBNaks"
    },
    {
        name:"gari",
        phone:"080474627454",
        email:"JADMN@gmail.com",
        address:"No3 32tjdmxn a"
    },
    {
        name:"tissue",
        phone:"08055343623",
        email:"HADNA@gmail.com",
        address:"No93 kajdm"
    },
    {
        name:"paste",
        phone:"08048343535",
        email:"JADMN@gmail.com",
        address:"No12 yhadbn"
    },
    {
        name:"toot pick",
        phone:"0803274242",
        email:"AJSNM@gmail.com",
        address:"No37 iksjdm"
    },
    {
        name:"towel",
        phone:"080232424353",
        email:"IKASN@gmail.com",
        address:"No 85 jhsdnm"
    },
    
]



const EmployeeList =()=>{
    return(
        <div>
            <Row>
                <Col xs={1} className="inventory-header">No</Col>
                <Col xs={3} className="inventory-header">Name</Col>
                <Col xs={2} className="inventory-header">Phone no</Col>
                <Col xs={3} className="inventory-header">Email</Col>
                <Col xs={3} className="inventory-header">Address</Col>
            </Row>
            {
                data.map((item,index)=>(
                    <Row key={index} className="inventory-list">
                        <Col xs={1} className="inventory-items">{index}</Col>
                        <Col xs={3}className="inventory-items">{item.name}</Col>
                        <Col xs={2} className="inventory-items">{item.phone}</Col>
                        <Col xs={3} className="inventory-items">{item.email}</Col>
                        <Col xs={3} className="inventory-items">{item.address}</Col>
                    </Row>
                    
                ))
            }
        </div>
    )
}

export default EmployeeList