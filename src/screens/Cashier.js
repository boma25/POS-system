import React, {useState} from 'react';
import {Row, Col, Button} from 'react-bootstrap'
import Navbar from '../componets/Navbar'
import {useStoreContext} from "../util/store"
import { Redirect } from "react-router-dom"



const data=[
    {
        product:"",
        price:"",
        quantity:""
    },
    
]

const Cashier = ()=>{

    const {
        isLoggedIn,
    }=useStoreContext()
    

    const [buy, setBuy]=useState( [
        {
            product:"",
            price:"",
            quantity:""
        },
        
])

const items=[
    {
        name:"tissue",
        price:"10"
    },
    {
        name:"yam",
        price:"500"
    },
    {
        name:"paste",
        price:"25",
    },
    {
        name:"brush",
        price:"15"
    }
]
    const [product, setProduct]=useState("")
    const [quantity, setQuantity]=useState(1)
    const [price, setPrice]=useState(0.00)
    const [isLoading, setIsLoading] = useState(false)
    const handleSubmit = (evt)=>{
        evt.preventDefault()
        product === ""? alert("please select a product"):
        data.push({product:product,quantity:quantity,price:price})
        try{
            setBuy(data)
        }catch (e){
            alert(e.message)
        }
    }
    return isLoggedIn ?(
        <div>
            <Navbar />
           <div className="container">
            <Row className="cashier-form">
                <Col>
                <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label >Product</label>
                <select className="form-control" onChange={(e)=> [setProduct(e.target.value)]}>
                    <option>select a product</option>
                    {items.map((value,index)=>(
                        <option key={index}>{value.name}</option>
                    ))}
                    
                </select>
            </div>
            <label >Quantity</label>
                <select className="form-control" onChange={(e)=> setQuantity(e.target.value)}>
                    <option>{quantity}</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            <div className="form-group">
                <label >Price</label>
                <input type="text" className="form-control" value={price} readOnly={true}/>
            </div>
            <button type="submit" className="btn btn-primary">Add</button>
            </form>
                </Col>
                <Col >
                <div className="chart">
                <h1>Cart</h1>
                <Row>
                    <Col >Product</Col>
                    <Col>quantity</Col>
                    <Col>Price</Col>
                </Row>
                {
                    buy.map((value, index)=>(
                        <Row key={index} className="item">
                    <Col >{value.product}</Col>
                    <Col>{value.quantity}</Col>
                    <Col>{value.price}</Col>
                </Row>
                    ))
                }
                {buy.length === 1?(
                    <div/>
                ):(isLoading ? (
                    <div class="spinner-border check-out-spinner " role="status">
                        <span class="sr-only">Loading...</span>
                    </div>):(<Button className="check-out" onClick={()=>setIsLoading(true)} >Check out</Button>))}
                </div>
                </Col>
            </Row>
           </div>
        </div>
    ):(<div>
        {alert("you must logged in")}
        <Redirect to={"/"} />
    </div>)
}


export default Cashier