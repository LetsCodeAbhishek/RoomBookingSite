
import "./Feedback.css";
import Userheader from "../Common/Userheader";
import { useState } from "react";
import { useNavigate } from "react-router";



const Feedback = () =>{

    let navigate = useNavigate();
    let[name,setName]= useState("");
    let[email,setEmail]= useState("");
    let[contact,setContact]= useState("");
    let[feedback,setFeedback]= useState("");

    let submitfeedback = async() =>{

        let result = await fetch("http://localhost:4500/feedback",{
            method:"post",
            body: JSON.stringify({name,email,contact,feedback}),
            headers:{
                "Content-Type":"application/json"
            }
        });
        result =await result.json();
        if(result){
            alert("Feedback Submitted Successful");
            navigate("/userhome");
        }else{
            alert("something went wrong")
        };
    }

    return(
        <div>
            <Userheader/>
        <div className="container">
            
            <div className=" row auto feedback-base">
                <div className="col-md-5 feedback-main">
                   <form onSubmit={submitfeedback}>
                   <input type="text" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)} value={name} className="feedback-input" required></input>
                    <input type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} value={email}className="feedback-input" required></input>
                    <input type="number" placeholder="Enter your Contact Number" onChange={(e)=>setContact(e.target.value)} value={contact} className="feedback-input" required></input>
                    <input type="text" placeholder="Enter your Feedback" onChange={(e)=>setFeedback(e.target.value)} value={feedback} className="feedback-input" required></input>
                
                <button  className="feedback-button">Submit</button>
                   </form>
                </div>

                
            </div>
        </div>
        </div>
    );
}

export default Feedback;