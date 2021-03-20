import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'
const Header = () => {
    const [logInUser, setLogInUser] = useContext(UserContext);
    return (
        <nav className ='container nav w-100 justify-content-end mt-2'>
            <ul className='w-50 logo'>
                <h3>CITY RIDERS</h3>
            </ul>
            <ul className='w-50 navi'>
                
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
                    <Link to='/login'><button className='btn btn-warning'>Login</button></Link>}
                </li>
            </ul>
        </nav>
    //     <div className='container'>
    //     <nav class="navbar navbar-expand-lg navbar-light ">
    //     <a class="navbar-brand" href="#">City Riders</a>
    //     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //       <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div class="collapse justify-content-end navbar-collapse" id="navbarNav">
    //       <ul class="navbar-nav ">
    //         <li class="nav-item active">
    //           <Link class="nav-link" to='/home'>Home <span class="sr-only"></span></Link>
    //         </li>
    //         <li class="nav-item">
    //           <Link class="nav-link" to='/destination'>Destination</Link>
    //         </li>
    //         <li class="nav-item">
    //           <Link class="nav-link" href="#">Blog</Link>
    //         </li>
    //         <li class="nav-item">
    //           <Link class="nav-link " href="#">Contact</Link>
    //         </li>
    //         <li>
    //          {logInUser.email ? <strong style={{color: 'green',textDecoder: 'underline'}}>{logInUser.email}</strong> : 
    //                 <Link to='/login'><button className='btn btn-danger'>Login</button></Link>}
    //         </li>
    //       </ul>
    //     </div>
    //   </nav>
    //     </div>
 
    );
};

export default Header;