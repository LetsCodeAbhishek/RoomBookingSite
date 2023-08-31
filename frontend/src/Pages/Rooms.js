
import "./Rooms.css"
import Userheader from "../Common/Userheader";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Rooms = () =>{

    let [room,setRoom]= useState([]);


    let roomdata = async () =>{
        let data= await fetch ("http://localhost:4500/getroom");
        data =await data.json();
        setRoom(data);
    }
    useEffect(()=>{
        roomdata();
    },[]);

    const searchroom = async (e) =>{
        let key = e.target.value;
        if (key){
            let result = await fetch (`http://localhost:4500/searchroom/${key}`);
            result = await result.json();
            if (result){
                setRoom(result);
            }
        }
        else{
            roomdata();
        }
    }
    
   


    return(
        
    <div>
        <Userheader/>
       
        <div className="rooms-base container">
        <div align="center">
            <input className="row m-auto rooms-search" type="search" onChange={searchroom} placeholder="Search by Type"></input>
        </div>


            <div className="rooms-main">
                {
                    room.map((item,index)=> 
                    <div className="rooms-body">
                         <div>  <img src={item.image} height={200} width={250} alt="room"></img> </div> 
                         <br></br>
                        <table border="2px" className="rooms-table" align="center"> 
                            <tr>
                                <td>SNO.</td>
                                <td><div>{index+1} </div></td>
                            </tr>
                            <tr className="bg-danger">
                                <td >Room No.</td>
                                <td> <div> {item.rno}</div></td>
                            </tr>
                            <tr>
                                <td>Price</td>
                                <td> <div>{item.price} </div> </td>
                            </tr>

                            <tr>
                                <td>Type</td>
                                <td> <div>{item.type} </div> </td>
                            </tr>

                            <tr  className="bg-danger">
                                <td>Status</td>
                                <td>  <div>{item.status}</div></td>
                            </tr>
                        </table>

                         <div className="rooms-button"> 
                           {
                            item.status==="Avialable" ? (
                                
                            <button type="submit" className="rooms-button-2"><Link to={"/booknow/"+item._id}>Book Now</Link></button>
                            ):
                            <></>
                           }
                         </div>
                    </div>
                         
                    
                    
                    )
                }

            </div>

        </div>
    </div>
    )
}
export default Rooms;