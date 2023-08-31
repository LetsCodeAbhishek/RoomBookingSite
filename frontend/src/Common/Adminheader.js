

import './Adminheader.css'
import { Link} from 'react-router-dom';

const Adminheader = () =>{
    

    let logout = () =>{
        localStorage.clear();
    }

    return(
            <div className='container'>
                <div className="row adminheader-main">
                <table className="col-6">
                    
                    <tr>
                        
                        <td width="500px" className='a-logo adminheader-td'>HOTEL</td>
                        <td className='adminheader-td'> <Link to="/adminhome"> Home</Link></td>
                        <td className='adminheader-td'> <Link to="/user"> Users</Link></td>
                        <td className='adminheader-td'> <Link to="/addroom"> Add Rooms</Link></td>
                        <td className='adminheader-td'> <Link to="/viewroom"> Rooms</Link></td>
                        
                        <td className='adminheader-td'> <Link to="/viewbooking"> Booking</Link></td>
                        <td className=' adminheader-td'> <Link to="/viewfeedback"> Feedback</Link></td>
                        <td className='adminheader-td'> <Link onClick={logout} to="/adminlogin"> Logout</Link></td>

                    </tr>
                                                            

                </table>
            </div>
            </div>
    );
}

export default Adminheader;