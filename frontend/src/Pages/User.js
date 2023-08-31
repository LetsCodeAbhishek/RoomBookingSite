
import Adminheader from "../Common/Adminheader";
import { useState } from "react";
import { useEffect } from "react";
import "./User.css";

const User= () =>{

    let [data,setData] =useState([]);

    let users = async ()=>{
        let result = await fetch("http://localhost:4500/viewusers")
        result = await result.json();

        setData(result);
        console.log(result);
    }
    useEffect(()=>{
        users();
    },[]);
    
    let deluser = async(id)=>{
        let result = await fetch(`http://localhost:4500/deleteuser/${id}`,
        {
            method:"delete"
        });
        result = result.json();
        if(result){
            users();
        }
    }

    
        
       
    return(
        <div>

            <Adminheader/>
            <div className="container">
            <h1 className="user-heading">User Details</h1>
            
            <div className="user-main">
                <table className="table user-table"> 
                    <tr align="center">
                        <th className="vfeedback-th"> SNO.</th>
                        <th className="vfeedback-th"> Name</th>
                        <th className="vfeedback-th"> Email</th>
                        <th className="vfeedback-th"> Contact</th>
                        <th className="vfeedback-th"> Gender</th>
                        <th className="vfeedback-th"> Address</th>
                        <th className="vfeedback-th"> Action </th>
                    </tr >
                    {
                        data.length ? data.map((item,index)=>
                        <tr align="center" className="vfeedback-tr">
                        <td className="vfeedback-td">{index+1}</td>
                        <td className="vfeedback-td">{item.name}</td>
                        <td className="vfeedback-td">{item.email}</td>
                        <td className="vfeedback-td">{item.contact}</td>
                        <td className="vfeedback-td">{item.gender}</td>
                        <td className="vfeedback-td">{item.address}</td>
                        <td className="vfeedback-td"><button className="btn btn-danger btn-lg " onClick={()=> deluser(item._id)}> Delete</button></td>
                   
                        </tr>
                        
                        ):
                        <tr>
                            <td colSpan="9">
                                <h1>No data Found</h1>
                            </td>
                        </tr>
                    }
                </table>
            </div>
            </div>
        </div>
    )
}
export default User;