import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='container nav w-100 justify-content-end'>
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
                    <Link to='/login'><button className='btn btn-danger'>Login</button></Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;