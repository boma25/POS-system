import React,{useState, useEffect} from 'react';
import {get_employees, delete_employee} from '../Api/endpoint'

const RemoveEmployee=()=>{

    const [data, setData]=useState([""])
    const [employee_Name, setEmployee_Name] = useState("select")


    const get_all_employees = async ()=>{
        const response = await get_employees()
        setData(response.slice(1,response.length))
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            let i
            for (i=0;i<data.length;i++){
                if(data[i].firstName +" " + data[i].lastName === employee_Name){
                    const response = await delete_employee(data[i]._id)
                    alert(response)
                }
            }
            get_all_employees()
        }catch(e){
            alert(e)
        }
    }

    useEffect(() => {
        get_all_employees()
    },[])

    return (
        <div>
            <form className="add-employee-form" onSubmit={(e)=>handleSubmit(e)}>
            <label className="inventory-header">Select and employee</label>
                <select className="form-control" onChange={(e)=>setEmployee_Name(e.target.value)}>
                <option>select</option>
                    {
                        data.map((value,index)=>(
                            <option key={index} >{value.firstName +" "+ value.lastName}</option>
                        ))
                    }
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