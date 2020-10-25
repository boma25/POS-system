import React from 'react';

const RemoveEmployee=()=>{
    return (
        <div>
            <form className="add-employee-form">
            <label className="inventory-header">Select and employee</label>
                <select className="form-control" >
                    <option>{"ben"}</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <input
					type="submit"
					value="Remove"
					className="add-employee-form-button"
					/>
            </form>
        </div>
    )
}

export default RemoveEmployee