/** @format */

import React, { Component, useState, useEffect } from "react"
import { Row, Col, Button } from "react-bootstrap"
import Navbar from "../componets/Navbar"
import { useStoreContext } from "../util/store"
import { Redirect } from "react-router-dom"
import { get_stock, checkOut } from "../Api/endpoint"

class CashierClass extends Component {
	constructor(props) {
		super()
		this.state = {
			buy: [],
			product: "",
			quantity: 1,
			price: "0.00",
			isLoading: "",
			items: [""],
			isLoading: false,
		}
	}

	componentDidMount() {
		this.get_inventory()
		setInterval(() => {
			this.priceFix()
		}, 1000)
	}
	get_inventory = async () => {
		this.setState({
			items: await get_stock(),
		})
	}
	checkout = () => {
		this.setState({ isLoading: true })
		try {
			this.state.buy.forEach(async (item) => {
				await checkOut(item.product, item.quantity)
			})
			alert("check out successful")
			this.setState({ buy: [] })
		} catch (e) {
			alert(e)
		}
		this.setState({ isLoading: false })
	}
	handleSubmit = (evt) => {
		evt.preventDefault()
		if (
			this.state.product === "" ||
			this.state.product === "select a product"
		) {
			alert("please select a product")
		} else {
			let newProd = {
				product: this.state.product,
				quantity: this.state.quantity,
				price: this.state.price,
			}
			this.setState((prevState) => ({
				buy: prevState.buy.concat(newProd),
			}))
		}
	}

	priceFix = () => {
		let i, x
		for (i = 0; i < this.state.items.length; i++) {
			if (this.state.items[i].name === this.state.product) {
				x = this.state.items[i].price * this.state.quantity
				this.setState({ price: `${x}.00` })
			}
		}
	}
	render() {
		return (
			<div>
				<Navbar />
				<div className="container">
					<Row className="cashier-form">
						<Col>
							<form onSubmit={this.handleSubmit}>
								<div className="form-group">
									<label>Product</label>
									<select
										className="form-control"
										onChange={(e) => this.setState({ product: e.target.value })}
									>
										<option>select a product</option>
										{this.state.items.map((value, index) => (
											<option key={index}>{value.name}</option>
										))}
									</select>
								</div>
								<label>Quantity</label>
								<input
									className="form-control"
									onChange={(e) => this.setState({ quantity: e.target.value })}
									value={this.state.quantity}
								/>
								<div className="form-group">
									<label>Price</label>
									<input
										type="text"
										className="form-control"
										value={this.state.price}
										readOnly={true}
									/>
								</div>
								<button type="submit" className="btn btn-primary">
									Add
								</button>
							</form>
						</Col>
						<Col>
							<div className="chart">
								<h1>Cart</h1>
								<Row>
									<Col>Product</Col>
									<Col>quantity</Col>
									<Col>Price</Col>
									<Col></Col>
								</Row>
								{this.state.buy.map((value, index) => (
									<Row key={index} className="item">
										<Col>{value.product}</Col>
										<Col>{value.quantity}</Col>
										<Col>{value.price}</Col>
										<Col>
											{" "}
											<a
												onClick={() =>
													this.setState((prevState) => ({
														buy: prevState.buy.splice(index, 1),
													}))
												}
												className=" x"
											>
												x
											</a>
										</Col>
									</Row>
								))}
								{this.state.buy.length === 0 ? (
									<div />
								) : this.state.isLoading ? (
									<div
										className="spinner-border check-out-spinner "
										role="status"
									>
										<span className="sr-only">Loading...</span>
									</div>
								) : (
									<Button className="check-out" onClick={() => this.checkout()}>
										Check out
									</Button>
								)}
							</div>
						</Col>
					</Row>
				</div>
			</div>
		)
	}
}

const Cashier = () => {
	const { isLoggedIn } = useStoreContext()
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 2000)
	})

	return isLoggedIn ? (
		loading ? (
			<div></div>
		) : (
			<CashierClass />
		)
	) : (
		<div>
			{alert("you must logged in")}
			<Redirect to={"/"} />
		</div>
	)
}

export default Cashier
