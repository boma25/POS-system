/** @format */

import React, { useState, useEffect } from "react"
import { Row, Col } from "react-bootstrap"
import { get_employees } from "../Api/endpoint"

const EmployeeList = () => {
	const [data, setData] = useState([""])
	const get_all_employees = async () => {
		const response = await get_employees()
		setData(response.slice(1, response.length))
	}
	useEffect(() => {
		get_all_employees()
	}, [])
	return (
		<div>
			<Row>
				<Col xs={1} className="inventory-header">
					No
				</Col>
				<Col xs={3} className="inventory-header">
					Name
				</Col>
				<Col xs={2} className="inventory-header">
					Phone no
				</Col>
				<Col xs={3} className="inventory-header">
					Email
				</Col>
				<Col xs={3} className="inventory-header">
					Address
				</Col>
			</Row>
			{data.map((item, index) => (
				<Row key={index} className="inventory-list">
					<Col xs={1} className="inventory-items">
						{index}
					</Col>
					<Col xs={3} className="inventory-items">
						{item.firstName + " " + item.lastName}
					</Col>
					<Col xs={2} className="inventory-items">
						{item.username}
					</Col>
					<Col xs={3} className="inventory-items">
						{item.email}
					</Col>
					<Col xs={3} className="inventory-items">
						{item.address}
					</Col>
				</Row>
			))}
		</div>
	)
}

export default EmployeeList
