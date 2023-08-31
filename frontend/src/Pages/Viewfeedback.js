
import Adminheader from "../Common/Adminheader";
import { useState } from "react";
import { useEffect } from "react";
import "./Viewfeedback.css";

const Viewfeedback = () =>{

    let [data,setData] =useState([]);

    let feedbackdata = async ()=>{
        let result = await fetch("http://localhost:4500/viewfeedback")
        result = await result.json();

        setData(result);
        console.log(result);
    }
    useEffect(()=>{
        feedbackdata();
    },[]);
    
    let delfeedback = async(id)=>{
        let result = await fetch(`http://localhost:4500/deletefeedback/${id}`,
        {
            method:"delete"
        });
        result = result.json();
        if(result){
            feedbackdata();
        }
    }

    
        
       
    return(
        <div>

            <Adminheader/>
            <div className="container">
            <h1 className="vfeedback-heading">Feedback admin</h1>
            
            <div className="vfeedback-main">
                <table className="table vfeedback-table"> 
                    <tr align="center">
                        <th className="vfeedback-th"> SNO.</th>
                        <th className="vfeedback-th"> Name</th>
                        <th className="vfeedback-th"> Email</th>
                        <th className="vfeedback-th"> Contact</th>
                        <th className="vfeedback-th"> Feedback</th>
                        <th className="vfeedback-th"> Action </th>
                    </tr >
                    {
                        data.map((item,index)=>
                        <tr align="center" className="vfeedback-tr">
                        <td className="vfeedback-td">{index+1}</td>
                        <td className="vfeedback-td">{item.name}</td>
                        <td className="vfeedback-td">{item.email}</td>
                        <td className="vfeedback-td">{item.contact}</td>
                        <td className="vfeedback-td">{item.feedback}</td>
                        <td className="vfeedback-td"><button className="btn btn-danger btn-lg " onClick={()=> delfeedback(item._id)}> Delete</button></td>
                   
                        </tr>
                        
                        )
                    }
                </table>
            </div>
            </div>
        </div>
    )
}
export default Viewfeedback;