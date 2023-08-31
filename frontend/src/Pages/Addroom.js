import { useState } from "react"
import Adminheader from "../Common/Adminheader"
import "./Addroom.css"
const Addroom = () =>{

    let [rno,setRno] =useState("");
    let [price, setPrice] = useState("");
    let [image,setImage] =useState("");
    let [type,setType]=useState("");
    let [status,setStatus]=useState("");

    let convert =(e)=>{
        var reader =new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload =() =>{
            // console.log(reader.result);
            setImage(reader.result);
        }
    };
    let addroom = async()=>{
        console.log(rno,price,type,status,image);
        let result= await fetch("http://localhost:4500/addroom",{
            method:"post",
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
    }


    return(
        <div>
            <Adminheader/>
           <div className="container">
           <div className="row m-auto addroom-base">
                <div className="col-md-6 addroom-main">
                    <input type="text" placeholder="Enter Room Number" className="addroom-input" onChange={(e)=>setRno(e.target.value)} value={rno} ></input>
                    <input type="number" placeholder="Enter Prize" className="addroom-input" onChange={(e)=>setPrice(e.target.value)} value={price}></input>
                
                    <input type="file" accept=".png, .jpg" className="addroom-input" onChange={convert}></input>
                    <select className="addroom-input" onChange={(e)=>setType(e.target.value)} value={type}>
                        <option hidden>Select Room Type</option>
                        <option value="1 Person"> 1 Person</option>
                        <option value="2 Person"> 2 Person</option>
                        <option value="3 Person"> 3 Person</option>
                        <option value="4 Person"> 4 Person</option>
                    </select>
                    {/* <label>Room Status-</label> */}
                    <select className="addroom-input" onChange={(e)=>setStatus(e.target.value)} value={status}>
                        <option hidden> Select Status</option>
                        <option value="Avialable"> Avialable</option>
                        <option value="Not Avialable">Not Avialable</option>
                    </select>
                    <button className="addroom-button" onClick={ addroom }>Add Room</button>
                </div>
                
            </div>
           </div>

        </div>
    )
}
export default Addroom