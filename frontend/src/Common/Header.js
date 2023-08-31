
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () =>{

    return(
            <div className='container'>
                <div className="row header-main">
                <table className="col-6">
                    
                    <tr>
                        
                        <td width="600px" className='h-logo login-td' >HOTEL</td>
                        <td className='login-td'> <Link to="/"> Home </Link></td>
                        <td className='login-td' > <Link to="/login"> User Login</Link></td>
                        <td className='login-td'> <Link to="/adminlogin"> Admin Login</Link></td>
                        <td className='login-td'> <Link to="/signup"> SignUp</Link></td>
                        <td className='login-td'> <Link to="#"> About Us</Link></td>

                    </tr>
                                                            

                </table>
            </div>
            </div>
    );
}

export default Header;