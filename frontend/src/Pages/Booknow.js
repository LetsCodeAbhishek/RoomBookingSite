
import { useNavigate, useParams } from "react-router";
import Userheader from "../Common/Userheader";
import { useEffect, useState } from "react";
import "./Booknow.css"

const Booknow = () =>{
    let navigate= useNavigate();

    let params= useParams();
    let [name,setName]=useState("");
    let [email,setEmail]=useState("");
    let [contact,setContact]=useState("");
    let [roomno,setRoomno]=useState("");
    let [price,setPrice]=useState("");
    let [duration,setDuration]=useState(1);
    let [type,setType]=useState("");
    let [bookingdate,setBookingdate]=useState("");
    let status="Pending";
    let user = JSON.parse(localStorage.getItem("user"));
    
    

    let bookingdata = async() =>{
        
        let result = await fetch(`http://localhost:4500/editroom/${params.id}`);
        result = await result.json();
        setRoomno(result.rno);
        setPrice(result.price);
        setType(result.type);
        setName(user.name);
        setEmail(user.email);
        setContact(user.contact);
        
    }
    useEffect(()=>{
        bookingdata();
    },[]);

    let bookroom= async(e)=>{
        e.preventDefault();
        price = price*duration;
        let result = await fetch(`http://localhost:4500/booking`,{
            method:"post",
            body:JSON.stringify({name,email,contact,roomno,price,duration,type,bookingdate,status}),
            headers:{
                "Content-Type":"application/json"
            }

        });
        result =await result.json();
        if(result){
            alert("Booking request is successfull");
            navigate("/rooms");
        }

    }



    return(
        <div>
            <Userheader/>
            <div className="container booknow-base">

                <div className="booknow-main">

                    <u><h2 className="booknow-heading">Book Now</h2></u>
                    <form onSubmit={bookroom}>
                    <input type="text" className="bookroom-input" onChange={(e)=>setName(e.target.value)} value={name} required></input>
                    <input type="email" className="bookroom-input" onChange={(e)=>setEmail(e.target.value)} value={email} required></input>
                    <input type="number" className="bookroom-input" onChange={(e)=>setContact(e.target.value)} value={contact} required></input>
                    <input type="text" className="bookroom-input" readOnly onChange={(e)=>setRoomno(e.target.value)} value={roomno}></input>
                    <input type="number" className="bookroom-input" readOnly onChange={(e)=>setPrice(e.target.value)} value={price}></input>

                    <select  onChange={(e)=>setDuration(e.target.value)} value={duration}  className="bookroom-input" required>
                        
                        <option value="1"> 1 Month</option>
                        <option value="3"> 3 Month</option>
                        <option value="6"> 6 Month</option>
                        <option value="12"> 12 Month</option>
                    </select>
                    <br></br>
                    <label> <b>Booking Date :</b></label>
                    <input type="date"  onChange={(e)=>setBookingdate(e.target.value)} value={bookingdate} className="bookroom-input" required></input>
                    <input type="text" onChange={(e)=>setType(e.target.value)} value={type} readOnly className="bookroom-input"></input>

                    <button className=" booknow-button" type="submit"> Confirm</button>
                    </form>
                </div>


            </div>


        </div>
    )
}

export default Booknow;
