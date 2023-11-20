
import { useEffect, useState } from "react";
import "./Serverit.css"
import { IoMdClose } from "react-icons/io";
import  axios  from "axios";
import FormTable from "./FormTable";
import { Link } from "react-router-dom";


// Inside your component

axios.defaults.baseURL="http://localhost:8080/"
function Serverit(){
    const [addSection,setAddSection]=useState(false)
    const [editSection,setEditSection]=useState(false)
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        vendorsname:"",
        numberofguests:"",
        Foodtype:"",
        Date:"",
        otherrequirements:""

    })
    const [formDataEdit,setFormDataEdit]=useState({
        name:"",
        email:"",
        vendorsname:"",
        numberofguests:"",
        Foodtype:"",
        Date:"",
        otherrequirements:"",
        _id:""

    })





    const[dataList,setDataList]=useState([])



    const handleOnChange=(e)=>{
        const {value,name}=e.target
        setFormData((preve)=>{
        return{
            ...preve,
            [name]:value
        }
        })

    }




    const handlesubmit =async(e)=>{
        
        e.preventDefault()
        const data=await axios.post("/create",formData)
        console.log(data)
        if(data.data.success){
            setAddSection(false)
            alert(data.data.message)
            getFetchData()
            //after submimting to redirect to new page
            window.location = '/booked';
          
        }

    }
    const getFetchData=async()=>{
        const data=await axios.get("/")
      console.log(data)
        if(data.data.success){
            setDataList(data.data.data)
            
        }
    }
    useEffect(()=>{
        getFetchData()
    },[])
const handelDelete=async(id)=>{
    const data=await axios.delete("/delete/"+id)
    if(data.data.success){
        getFetchData()
        alert(data.data.message)
    }

}
const handleUpdate=async(e)=>{
e.preventDefault()
const data=await axios.put("/update",formDataEdit)
if(data.data.success){
    setEditSection(false)
    getFetchData()
    alert(data.data.message);
    
}

}
const handleEditOnChange=async(e)=>{
    const {value,name}=e.target
    setFormDataEdit((preve)=>{
    return{
        ...preve,
        [name]:value
    }
    })
}
const handleEdit=(el)=>{
setFormDataEdit(el)
setEditSection(true)
}

    return(
        <center>
        <div className="container1">
            <button className="btn1 btn1-add" onClick={()=>setAddSection(true)}>Book Now</button>
            {
                addSection &&(
                    <FormTable
                    handlesubmit={handlesubmit}
                    handleOnChange={handleOnChange}
                    handleclose={()=>setAddSection(false)}
                    rest={formData}
                    />
                    
                )
            }
            {
                editSection &&(
                    <FormTable
                    handlesubmit={handleUpdate}
                    handleOnChange={handleEditOnChange}
                    handleclose={()=>setEditSection(false)}
                    rest={formDataEdit}
                    />
                )
            }
            <div className="tableContainer11">
                <table className="table22">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email id</th>
                            <th>Vendors Name</th>
                            <th>No of Guests</th>
                            <th>Food Type</th>
                            <th>From-to</th>
                            <th>Other Requirements</th>
                            <th>
                               
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {dataList[0] ? (
                            dataList.map((el)=>{
                                
                                return(
                                    <tr>
                                        <td>{el.name}</td>
                                        <td>{el.email}</td>
                                        <td>{el.vendorsname}</td>
                                        <td>{el.numberofguests}</td>
                                        <td>{el.Foodtype}</td>
                                        <td>{el.Date}</td>
                                        <td>{el.otherrequirements}</td>
                                        <td>
                                        <button className="btn btn-edit1" onClick={()=>handleEdit(el)}>Edit</button>
                                <button className="btn btn-del1" onClick={()=>handelDelete(el._id)} >Delete</button>

                                        </td>
                                    </tr>
                                )

                            }))
                            :(
                                <p style={{textAlign:"center"}}>No Data</p>
                            )
                        }
                    </tbody>
                </table>
            </div>
         
        </div>
        </center>
        
    )
}
export default Serverit;