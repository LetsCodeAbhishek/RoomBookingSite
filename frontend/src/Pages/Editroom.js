
import { useParams } from "react-router";
import Adminheader from "../Common/Adminheader";
import "./Editroom.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Editroom = () =>{

    let params =useParams();

    let[rno,setRno]= useState("");
    let[price,setPrice]= useState("");
    let[image,setImage]= useState("");
    let[type,setType]= useState("");
    let[status,setStatus]= useState("");

    let navigate = useNavigate();

    useEffect(()=>{
        editRoom();
    },[]);
   
    let editRoom = async()=>{
        console.log(rno,price,type,status,image);
        let result= await fetch(`http://localhost:4500/editroom/${params.id}`);
        result = await result.json();
        setRno(result.rno);
        setPrice(result.price);
        setType(result.type);
        setStatus(result.status);
        setImage(result.image);
    }

    let convert =(e)=>{
        var reader =new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload =() =>{
            // console.log(reader.result);
            setImage(reader.result);
        } }
    
    let updateroom = async() =>{
        
        let result= await fetch(`http://localhost:4500/updateroom/${params.id}`,{
            method:"put",
            corssDomain:true,
            body: JSON.stringify({rno,price,image,type,status}),
            headers:{
                "Content-type":"application/json",
                "Access-Control-Allow-Origin":"*",
            },
        });
        result =await result.json();
        if(result){
            alert("Successfully");
        }
        navigate("/addroom")
    }
    



    return(
        <div>
            <Adminheader/>
            <div className="container">
            <div className="row m-auto justify-content-center editroom-main">
                <div className="col-md-5 editroom-base">
                    
                   <input type="text"  onChange={(e)=>setRno(e.target.value)} value={rno} className="editroom-input"></input>
                    <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price} className="editroom-input"></input>

                    <img src={image} ></img>
                    <input type="file" accept=".jpg , .png"  onChange={convert}></input>

                

                    <select onChange={(e)=>setType(e.target.value)} value={type} className="editroom-input">
                        <option hidden>Select Room Type</option>
                        <option value="1 Person"> 1 Person</option>
                        <option value="2 Person"> 2 Person</option>
                        <option value="3 Person"> 3 Person</option>
                        <option value="4 Person"> 4 Person</option>
                    </select>
                    <select onChange={(e)=>setStatus(e.target.value)} value={status} className="editroom-input">
                        <option hidden> Select Status</option>
                        <option value="Avialable"> Avialable</option>
                        <option value="Not Avialable">Not Avialable</option>
                    </select>
                    <br></br>
                    <button className="btn btn-primary" onClick={updateroom}> Update Room</button>

                </div>

            </div>
            </div>
        </div>
    )
}


export default Editroom ;