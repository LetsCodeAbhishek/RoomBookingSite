
import { useParams } from "react-router";
import Adminheader from "../Common/Adminheader";
import "./Editbooking.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Editbooking = () =>{

    let params =useParams();
    let[name,setName]= useState("");
    let[email,setEmail]= useState(""); 
    let[contact,setContact]= useState("");
    let[rno,setRno]= useState("");
    let[price,setPrice]= useState("");
    let[duration,setDuration]= useState("");
    let[type,setType]= useState("");
    let[bookingdate,setBookingdate]= useState("");
    let[status,setStatus]= useState("");

    let navigate = useNavigate();

    useEffect(()=>{
        editBooking();
    },[]);
   
    let editBooking = async()=>{
        
        let result= await fetch(`http://localhost:4500/editbooking/${params.id}`);
        result = await result.json();
        setName(result.name);
        setEmail(result.email);
        setContact(result.contact);
        setRno(result.roomno);
        setPrice(result.price);
        // let d= result.duration+" Month"
        setDuration(result.duration);
        setType(result.type);
        setBookingdate(result.bookingdate);
        setStatus(result.status);
        
    }

   
    let updatebooking = async () =>{
        
        let result= await fetch(`http://localhost:4500/updatebooking/${params.id}`,{
            method:"put",
        
            body: JSON.stringify({name,email,contact,rno,price,duration,type,bookingdate,status}),
            headers:{
                "content-Type":"application/json"
            },
        });

        result =await result.json();
        navigate("/viewbooking")
        if(result){
            alert("Successfully");
        }
       
    }
    



    return(
        <div>
            <Adminheader/>
            <div className="container">
            <div className="row m-auto justify-content-center ebooking-main">
                <div className="col-md-5 ebooking-base">
                    
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name} className="ebooking-input" readOnly></input>
                <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email} className="ebooking-input" readOnly></input>
                <input type="text" onChange={(e)=>setContact(e.target.value)} value={contact} className="ebooking-input" readOnly></input>
                   <input type="text"  onChange={(e)=>setRno(e.target.value)} value={rno} className="ebooking-input" readOnly></input>
                    <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price} className="ebooking-input" readOnly></input>

                    <input type="text" onChange={(e)=>setDuration(e.target.value)} value={duration} className="ebooking-input" readOnly></input>
                    <input type="text" onChange={(e)=>setType(e.target.value)} value={type} className="ebooking-input" readOnly></input>
                    <input type="text" onChange={(e)=>setBookingdate(e.target.value)} value={bookingdate} className="ebooking-input" readOnly></input>


                <label>Current Status-{status}</label>
                    <select onChange={(e)=>setStatus(e.target.value)} value={status} className="ebooking-input">
                        <option value="Penidng"> Pending</option>
                        <option value="Confirm"> Confirm</option>
                        <option value="Canceled"> Cancel</option>
                        
                    </select>
                   
                    <br></br>
                    <button className="btn btn-primary ebooking-button" onClick={updatebooking}> Update Room</button>

                </div>

            </div>
            </div>
        </div>
    )
}


export default Editbooking ;