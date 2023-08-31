
import "./Adminhome.css"
import Adminheader from "../Common/Adminheader";
const Adminhome = () =>{

    return(
        <div>
            <Adminheader/>
            <div className="container adminhome-main">
                <div className="adminhome-main-2">
                    

                         <div className="adminhome-base">

                        <h1 className="adminhome-h1">Welcome to </h1>
                        <h2 className="adminhome-h2">AdminHome</h2>
                        <h3 className="adminhome-h3">Page</h3>

                           </div>
                
                      <div className="adminhome-button"> 
                        <button className="adminhome-button-1">Rooms</button>
                       <button className="adminhome-button-2">Book Now</button>
                       </div>

                </div>

            </div>
                


        </div>
    );
}


export default Adminhome;