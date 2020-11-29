import React, {useState,useEffect} from 'react';
import {Row, Col, Button} from 'react-bootstrap'
import Navbar from '../componets/Navbar'
import {useStoreContext} from "../util/store"
import { Redirect } from "react-router-dom"
import {get_stock} from "../Api/endpoint"



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


    const [product, setProduct]=useState("")
    const [quantity, setQuantity]=useState(1)
    const [price, setPrice]=useState("0.00")
    const [isLoading, setIsLoading] = useState(false)
    const [items, setItems]=useState([""])


    const get_inventory = async ()=>{
        setItems(await get_stock())
    }

    const handleSubmit = (evt)=>{
        evt.preventDefault()
        if(product === ""|| product === "select a product"){
            alert("please select a product")
        }else{
            data.push({product:product,quantity:quantity,price:price})
            try{
                setBuy(data)
                alert("product added to cart")
            }catch(e){
                alert(e)
            }
        }
    }

    const priceFix =(e)=>{
        setQuantity(e.target.value)

        let i,x
        for (i=0;i<items.length;i++){
            if(items[i].name === product){
                x = items[i].price * quantity
                setPrice(`${x}.00`)
            }
        }
    }

    useEffect(()=>{
        get_inventory()
    },[])
    return isLoggedIn ?(
        <div>
            <Navbar />
           <div className="container">
            <Row className="cashier-form">
                <Col>
                <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label >Product</label>
                <select className="form-control" onChange={(e)=> setProduct(e.target.value)}>
                    <option>select a product</option>
                    {items.map((value,index)=>(
                        <option key={index}>{value.name}</option>
                    ))}
                    
                </select>
            </div>
            <label >Quantity</label>
                <input className="form-control" onChange={(e)=> priceFix(e)}/>
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