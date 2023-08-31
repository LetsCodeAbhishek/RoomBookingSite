

import './Userheader.css'
import { Link} from 'react-router-dom';

const Userheader = () =>{
    

    let logout = () =>{
        localStorage.clear();
    };
   

    return(
            <div className='container'>
                <div className="row userheader-main">
                <table className="col-6">
                    
                    <tr>
                        
                        <td width="600px" className='u-logo userheader-td'>HOTEL</td>
                        <td className='userheader-td'> <Link to="/userhome"> Home</Link></td>
                        <td className='userheader-td'> <Link to="/rooms"> Rooms</Link></td>
                        <td className='userheader-td'> <Link to="/mybooking"> My booking</Link></td>
                        <td className='userheader-td'> <Link to="/feedback"> Feedback</Link></td>
                        <td className='userheader-td'> <Link onClick={logout} to="/login"> Logout</Link></td>

                    </tr>
                                                            

                </table>
            </div>
            </div>
    );
}

export default Userheader;