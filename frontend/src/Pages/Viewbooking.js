
import { useState } from "react";
import { useEffect } from "react";
import "./Viewfeedback.css";
import Adminheader from "../Common/Adminheader";
import { Link } from "react-router-dom";

const Viewbooking = () =>{

    let [data,setData] =useState([]);
  


    let bookingdata = async ()=>{
        let result = await fetch(`http://localhost:4500/bookings`)
        result = await result.json();

        setData(result);
        
    }
    useEffect(()=>{
         bookingdata();
    },[]);
    
    let delbooking = async(id)=>{
       if(window.confirm("Are You Sure?")){
        let result = await fetch(`http://localhost:4500/deletebooking/${id}`,
        {
            method:"delete"
        });
        result = result.json();
        if(result){
            bookingdata();
        }
       }
    }
    const searchbooking = async (e) =>{
        let key = e.target.value;
        if (key){
            let result = await fetch (`http://localhost:4500/searchbooking/${key}`);
            result = await result.json();
            if (result){
                setData(result);
            }
        }
        else{
            bookingdata();
        }
    }
    
        
       
    return(
        <div>

            <Adminheader/>
            <div className="container">
                <div> 
                    <input type="search" onChange={searchbooking} placeholder="Search by Email and Contact" className="vb-search"></input>
                </div>
            <h1 className="vfeedback-heading">Booking Details admin</h1>
            
            <div className="vfeedback-main">
                <table className="table vfeedback-table"> 
                    <tr align="center">
                        <th className="vfeedback-th"> SNO.</th>
                        <th className="vfeedback-th"> Name</th>
                        <th className="vfeedback-th"> Email</th>
                        <th className="vfeedback-th"> Contact</th>
                        <th className="vfeedback-th"> RoomNo.</th>
                        <th className="vfeedback-th"> Price</th>
                        <th className="vfeedback-th"> Duration</th>
                        <th className="vfeedback-th"> Type</th>
                        <th className="vfeedback-th"> Booking</th>
                        <th className="vfeedback-th"> Status </th>
                        <th className="vfeedback-th"> Action </th>
                    </tr >
                    {
                       data.length>0 ? data.map((item,index)=>
                        <tr align="center" className="vfeedback-tr">
                        <td className="vfeedback-td">{index+1}</td>
                        <td className="vfeedback-td">{item.name}</td>
                        <td className="vfeedback-td">{item.email}</td>
                        <td className="vfeedback-td">{item.contact}</td>
                        <td className="vfeedback-td">{item.roomno}</td>
                        <td className="vfeedback-td">{item.price}</td>
                        <td className="vfeedback-td">{item.duration} Month</td>
                        <td className="vfeedback-td">{item.type}</td>
                        <td className="vfeedback-td">{item.bookingdate}</td>
                        <td className="vfeedback-td"><Link to="#" className="btn btn-primary btn-lg disabled"> {item.status}</Link></td>
                        <td>
                            <Link to={"/editbooking/"+item._id}> <i class="fa-solid fa-pen-to-square"></i></Link>
                            <button  onClick={()=>delbooking(item._id)} className="btn btn-sm"> <i class="fa-solid fa-trash"></i></button>

                        </td>
                        </tr>
                        
                        ):
                        <tr align="center">
                            <td colSpan="12">
                            <h1> No booking Found</h1>
                            </td>
                        </tr>
                    }
                </table>
            </div>
            </div>
        </div>
    )
}
export default Viewbooking;