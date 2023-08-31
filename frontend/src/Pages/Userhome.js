
import "./Userhome.css"
import Userheader from "../Common/Userheader";
const Userhome = () =>{

    return(
        <div>
            <Userheader/>
            <div className="container userhome-main">
                <div className="userhome-main-2">
                    

                         <div className="userhome-base">

                        <h1 className="userhome-h1">Welcome to </h1>
                        <h2 className="userhome-h2">UserHome</h2>
                        <h3 className="userhome-h3">Page</h3>

                           </div>
                
                      <div className="userhome-button"> 
                        <button className="userhome-button-1">Rooms</button>
                       <button className="userhome-button-2">Book Now</button>
                       </div>

                </div>

            </div>
        </div>
    );
}


export default Userhome; 