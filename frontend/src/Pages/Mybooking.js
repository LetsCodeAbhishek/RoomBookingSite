

import { useState } from "react";
import { useEffect } from "react";
import "./Viewfeedback.css";
import Userheader from "../Common/Userheader"

const Mybooking = () =>{

    let [data,setData] =useState([]);
    let user = JSON.parse(localStorage.getItem("user"));
    let email =user.email;


    let bookingdata = async ()=>{
        let result = await fetch(`http://localhost:4500/userbooking/${email}`)
        result = await result.json();

        setData(result);
        
    }
    useEffect(()=>{
         bookingdata();
    },[]);
    
   

    
        
       
    return(
        <div>

            <Userheader/>
            <div className="container">
            <h1 className="vfeedback-heading">Booking Details</h1>
            
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
                        <td className="vfeedback-td"><button className="btn btn-primary btn-lg  disabled"> {item.status}</button></td>
                   
                        </tr>
                        
                        ):
                        <tr align="center">
                            <td colSpan="10"> 
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
export default Mybooking;













// import { useState } from "react";
// import Userheader from "../Common/Userheader";

// import { useParams } from "react-router";

// const Mybooking = () =>{
//     let params = useParams();

//     let [booking,setbooking]= useState([]);
    

//     let mybookingdata = async () =>{
//         let data= await fetch(`http://localhost:4500/updateroom/${params.email}`);
//         data =await data.json();
//         setbooking(data);
//     }
//     mybookingdata();
//     return(
//         <div>
//             <Userheader/>
//             <div className="container">
//                 <div className="row py-5 mybooking-base">

//                 <div className="row">
//                     <div className="col-lg-12 col-md-6 col-sm-3 mybooking-heading">
//                         My booking
//                     </div>
//                 </div>
//                 {
//                     booking.map((item,index)=>
//                     <div className="col-lg-3 col-md-6 mybooking-main">
//                     {/* <div className="row">
//                         <div className="col-lg-12 col-md-6 col-sm-3 mybooking-image"> <img src={item.image} width={300} height={200} alt="room"></img> </div>
//                     </div> */}
//                     <div className="row">
//                         <div className="col-lg-4 col-md-3 col-sm-2"> Name</div>
//                         <div className="col-1">:</div>
//                         <div className="col-lg-5 col-md-3 col-sm-2">{item.name} </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-lg-4 col-md-3 col-sm-2"> Email</div>
//                         <div className="col-1">:</div>
//                         <div className="col-lg-5 col-md-3 col-sm-2">{item.email} </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-lg-4 col-md-3 col-sm-2"> Contact</div>
//                         <div className="col-1">:</div>
//                         <div className="col-lg-5 col-md-3 col-sm-2">{item.contact} </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-lg-4 col-md-3 col-sm-2"> Room No.</div>
//                         <div className="col-1">:</div>
//                         <div className="col-lg-5 col-md-3 col-sm-2">{item.roomno} </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-lg-4 col-md-3 col-sm-2"> Price</div>
//                         <div className="col-1">:</div>
//                         <div className="col-lg-5 col-md-3 col-sm-2">{item.price} </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-lg-4 col-md-3 col-sm-2"> Duration</div>
//                         <div className="col-1">:</div>
//                         <div className="col-lg-5 col-md-3 col-sm-2">{item.duration} </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-lg-4 col-md-3 col-sm-2"> Name</div>
//                         <div className="col-1">:</div>
//                         <div className="col-lg-5 col-md-3 col-sm-2">{item.name} </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-lg-4 col-md-3 col-sm-2">Type</div>
//                         <div className="col-1">:</div>
//                         <div className="col-lg-5 col-md-3 col-sm-2">{item.type} </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-lg-4 col-md-3 col-sm-2"> Booking Date</div>
//                         <div className="col-1">:</div>
//                         <div className="col-lg-5 col-md-3 col-sm-2">{item.booking}</div>
//                     </div>

//                 </div>

//                     )
                    
//                 }

//             </div>
//                 </div>            
//         </div>
//     )
// }
// export default Mybooking;