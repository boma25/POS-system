import React from 'react';

const AddEmployee=()=>{
    return(
        <div >
            <form className="add-employee-form">
                <p className="inventory-header">Name</p>
                <input type="text" className="add-employee-form-input"/>
                <p className="inventory-header">Phone no</p>
                <input type="text" className="add-employee-form-input"/>
                <p className="inventory-header">Email</p>
                <input type="text" className="add-employee-form-input"/>
                <p className="inventory-header">Address</p>
                <input type="text" className="add-employee-form-input"/>
                <input
					type="submit"
					value="Add"
					className="add-employee-form-button"
					/>
            </form>
        </div>
    )
}

export default  AddEmployee