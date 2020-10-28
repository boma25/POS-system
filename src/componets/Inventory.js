import React, {useState, useEffect} from 'react';
import {Row, Col, ProgressBar, Button} from 'react-bootstrap'
import {get_stock, add_to_stock, edit_stock, delete_stock} from "../Api/endpoint"





const Inventory =()=>{
    const [addProduct, setAddProduct]= useState(false)
    const [productType, setProductType] = useState("")
    const [data, setData]=useState([""])
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [deleteProduct, setDeleteProduct]=useState(false)
    const get_inventory = async ()=>{
        setData(await get_stock())
    }
    useEffect(()=>{
        get_inventory()
    },[])
    const handleNew = async  (evt) => {
		try{
			evt.preventDefault()
			const response = await add_to_stock(name,price,quantity)
            alert(response)
            get_inventory()

		}catch(e){
			alert(e)
		}
		
    }
    const handleOld = async  (evt) => {
		try{
			evt.preventDefault()
			const response = await edit_stock(name,price,quantity)
            alert(response)
            get_inventory()

		}catch(e){
			alert(e)
		}
		
    }
    const handleDelete = async  (evt) => {
		try{
            evt.preventDefault()
            let i
            for (i=0;i<data.length;i++){
                if(data[i].name === name){
                    const response = await delete_stock(data[i]._id) 
                    alert(response)
                }
            }
            get_inventory()

		}catch(e){
			alert(e)
		}
		
	}
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
                        item.amount_in_stock<250?(
                        <ProgressBar variant="danger" now={item.amount_in_stock} max={1000} />
                        ):item.amount_in_stock<450?(
                        <ProgressBar variant="warning" now={item.amount_in_stock} max={1000} />
                        ):(
                        <ProgressBar now={item.amount_in_stock} max={1000} />
                        )}</Col>
                    </Row>
                ))
            }
            {
                addProduct?(
                <Row className="add-stock">
                    <Col xs={3}><Button onClick={()=>setProductType("new")}>New Product</Button></Col>
                    <Col><Button onClick={()=>setProductType("old")}>Edit product</Button></Col>
                </Row>):(<div/>)
            }
            {
                productType === "new"?(
                    <div>
                        <form className="add-employee-form" onSubmit={handleNew}>
                            <p className="inventory-header">Name</p>
                            <input type="text" className="add-employee-form-input" onChange={(e) => setName(e.target.value)}/>
                            <p className="inventory-header">Price</p>
                            <input type="text" className="add-employee-form-input" onChange={(e) => setPrice(e.target.value)}/>
                            <p className="inventory-header">Amount in stock</p>
                            <input type="text" className="add-employee-form-input" onChange={(e) => setQuantity(e.target.value)}/>
                            <input
                                type="submit"
                                value="Add"
                                className="add-employee-form-button"
                                />
                        </form>
                    </div>
                ):productType==="old"?(
                    <div>
                        <form className="add-employee-form" onSubmit={handleOld}>
                            <p className="inventory-header">Name</p>
                            <select className="form-control" onChange={(e)=> setName(e.target.value)}>
                                    <option>select</option>
                                {
                                    data.map((item,index)=>(
                                        <option key={index}>{item.name}</option>
                                    ))
                                }
                            </select>
                                <p className="inventory-header">Price</p>
                                <input type="text" className="add-employee-form-input" onChange={(e) => setPrice(e.target.value)}/>
                                <p className="inventory-header">Amount in stock</p>
                                <input type="text" className="add-employee-form-input" onChange={(e) => setQuantity(e.target.value)}/>
                                <input
                                    type="submit"
                                    value="Edit"
                                    className="add-employee-form-button"
                                    />
                        </form>
                    </div>
                ):(
                    <div/>
                )
            }
             {
                deleteProduct?(
                    <div>
                         <form className="add-employee-form" onSubmit={handleDelete}>
                            <p className="inventory-header">Name</p>
                            <select className="form-control" onChange={(e)=> setName(e.target.value)}>
                                    <option>select</option>
                                {
                                    data.map((item,index)=>(
                                        <option key={index}>{item.name}</option>
                                    ))
                                }
                            </select>
                            <input
                                    type="submit"
                                    value="Delete"
                                    className="add-employee-form-button"
                                    />
                        </form>
                    </div>
                ):(<div/>)
            }
            <Row>
            <Col xs={3}><Button className="add-stock" onClick={()=>[setAddProduct(!addProduct),setProductType(""),setDeleteProduct(false)]}>Toggle Add product</Button></Col>
            <Col xs={3}><Button className="add-stock" onClick={()=>[setDeleteProduct(!deleteProduct),setProductType(""),setAddProduct(false) ]}>Delete a product</Button></Col>
            </Row>
        </div>
    )
}

export default Inventory