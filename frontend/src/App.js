
import Home from "./Pages/Home";
import {Route,Routes} from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Aboutus from "./Pages/Aboutus";
import Userhome from "./Pages/Userhome";
import Feedback from "./Pages/Feedback";
import Adminlogin from "./Pages/Adminlogin";
import Adminhome from "./Pages/Adminhome";
import Viewfeedback from "./Pages/Viewfeedback";
import Addroom from "./Pages/Addroom";
import Viewroom from "./Pages/Viewroom";
import Editroom from "./Pages/Editroom";
import User from "./Pages/User";
import Rooms from "./Pages/Rooms";
import Booknow from "./Pages/Booknow";
import Mybooking from "./Pages/Mybooking";
import Viewbooking from "./Pages/Viewbooking";
import Editbooking from "./Pages/Editbooking";
import PrivateRoute from "./Pages/PrivateRoute";
import PrivateRoute2 from "./Pages/PrivateRoute2";

const App =()=>{

    return(
   <div>
      <Routes>
        
        <Route element={<PrivateRoute/>}> 
        
        <Route path="/userhome" element={<Userhome/>}></Route>
        <Route path="/rooms" element={<Rooms/>}></Route>
        <Route path="/booknow/:id" element={<Booknow/>}></Route>
        <Route path="/mybooking" element={<Mybooking/>}></Route>
        <Route path="/feedback" element={<Feedback/>}></Route>
        
        
        </Route>

        <Route element={<PrivateRoute2/>}> 
        <Route path="/adminhome" element={<Adminhome/>}></Route>
        <Route path="/viewfeedback" element={<Viewfeedback/>}></Route>
        <Route path="/addroom" element={<Addroom/>}></Route>
        <Route path="/viewroom" element={<Viewroom/>}></Route>
        <Route path="/editroom/:id" element={<Editroom/>}></Route>
        <Route path="/user" element={<User/>}></Route>
        <Route path="/viewbooking" element={<Viewbooking/>}></Route>
        <Route path="/editbooking/:id" element={<Editbooking/>}></Route>
        
        </Route>




        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/adminlogin" element={<Adminlogin/>}></Route>
        <Route path="/about" element={<Aboutus/>}></Route>
       
        
        
        
        


      </Routes>


   </div>
    );
   
}

export default App;