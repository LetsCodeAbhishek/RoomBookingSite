
import "./Viewroom.css"
import Adminheader from "../Common/Adminheader";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Viewroom = () =>{

    let [room,setRoom]= useState([]);


    let roomdata = async () =>{
        let data= await fetch ("http://localhost:4500/getroom");
        data =await data.json();
        setRoom(data);
    }
    useEffect(()=>{
        roomdata();
    });
    
    let deleteroom = async(id)=>{
        let result = await fetch(`http://localhost:4500/deleteroom/${id}`,
        {
            method:"delete"
        });
        result = result.json();
        if(result){
            roomdata();
        }
    }



    return(
        
    <div>
        <Adminheader/>
        <div className=" viewroom-base container">
          <div className="row viewroom-row">
          <div className="viewroom-main">
                {
                    room.map((item,index)=> 
                    <div className="viewroom-body">
                         <div> 
                         <div>  <img src={item.image} height={200} width={250} alt="room"></img> </div> 
                         <br></br>

                         </div>
                      
                      <div>
                      <table border="2px" className="viewroom-table" align="center"> 
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
                            <tr  className="bg-danger">
                                <td>Status</td>
                                <td>  <div>{item.status}</div></td>
                            </tr>
                        </table> 
                        </div>

                         <div className="viewroom-button"> 
                            <button type="submit" className="viewroom-button-1" onClick={()=> deleteroom(item._id)}>Delete</button>
                            <button type="submit" className="viewroom-button-2"><Link to={"/editroom/"+item._id}>Edit</Link></button>
                         </div>
                    </div>
                         
                    
                    
                    )
                }

            </div>
          </div>

        </div>
    </div>
    )
}
export default Viewroom;