import Header from "../Common/Header";
import Footer from "../Common/Footer";
import "./Adminlogin.css"
import { useState } from "react";
import {useNavigate } from "react-router";

const Adminlogin= ()=>{

    let navigate = useNavigate();
    let [username,setUsername] = useState("")
    let [password,setPassword] = useState("")

    let login = async()=>{
            
           try{
            let result = await fetch("http://localhost:4500/adminlogin",{
                method:"post",
                body: JSON.stringify({username,password}),
                headers:{
                    "Content-Type":"application/json"
                }
            });
            result =await result.json();
            console.log(result)
            if (result.username){
                localStorage.setItem("admin", JSON.stringify(result));
                navigate("/adminhome") ;
            }
           }catch{
            alert("email or password not mactched");
           }
    }

    return(
        <div>
            <Header/>
            
            <div className="container admin-main">
               <div className="adminlogin-style">
               <u><h2 className="adminlogin-heading">Admin Login</h2></u>
               <div className="adminlogin-form" >
               
               <input type="text" placeholder="Enter Your Email" name="username" className="inputs"onChange={(e)=>setUsername(e.target.value)} value={username} ></input>
                <input type="password" placeholder="Enter Your Password" name="password" className="inputs" onChange={(e)=>setPassword(e.target.value)} value={password}></input>
                <button type="submit" className="adminlogin-button" onClick={login}>Login</button>
            
               </div>
               </div>

            </div>

            <Footer/>
        </div>
    )
}

export default Adminlogin;