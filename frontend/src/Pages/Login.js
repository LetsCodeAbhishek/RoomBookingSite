import Header from "../Common/Header";
import Footer from "../Common/Footer";
import "./Login.css"
import { useState } from "react";
import {useNavigate } from "react-router";

const Login= ()=>{

    let navigate = useNavigate();
    let [email,setUsername] = useState("")
    let [password,setPassword] = useState("")

    let login = async()=>{
           try{
             
            let result = await fetch("http://localhost:4500/login",{
                method:"post",
                body: JSON.stringify({email,password}),
                headers:{
                    "Content-Type":"application/json"
                }
            });
            result =await result.json();
            // console.log(result)
            if (result.email){
                localStorage.setItem("user", JSON.stringify(result));
                navigate("/userhome") ;
            }
           }catch{
            alert("Email or Password does not match")
           }
    }

    return(
        <div>
            <Header/>
            
            <div className="container login-main">
            
               <div className="login-style">
               <u> <h2 className="login-heading">User Login</h2></u> 
               <div className="login-form">
              
               <input type="email" placeholder="Enter Your Email" name="username" className="inputs"
               onChange={(e)=>setUsername(e.target.value)} value={email} required></input>

                <input type="password" placeholder="Enter Your Password" name="password" className="inputs" 
                onChange={(e)=>setPassword(e.target.value)} value={password} required></input>
                
                <button type="submit" className="login-button" onClick={login}>Login</button>
        
                </div>
               </div>

            </div>

            <Footer/>
        </div>
    )
}

export default Login;