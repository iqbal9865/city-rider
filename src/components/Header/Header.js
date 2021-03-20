import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'
const Header = () => {
    const [logInUser, setLogInUser] = useContext(UserContext);
    return (
        <nav className='container nav w-100 justify-content-end'>
            <ul className='w-50'>
                <h3>CITY RIDERS</h3>
            </ul>
            <ul className='w-50'>
                
                <li>
                    <Link to='/home'>Home</Link>
                </li>
                <li>
                    <Link to='/destination'>Destination</Link>
                </li>
                <li>
                    <Link to=''>Blog</Link>
                </li>
                <li>
                    <Link to=''>Contact</Link>
                </li>
                <li>
                    {logInUser.email ? <strong style={{color: 'green',textDecoder: 'underline'}}>{logInUser.email}</strong> : 
                    <Link to='/login'><button className='btn btn-danger'>Login</button></Link>}
                </li>
            </ul>
        </nav>
    );
};

export default Header;