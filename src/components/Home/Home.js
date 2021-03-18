import React, { useEffect, useState } from 'react';
import bg from '../../images/Bg.png'
import './Home.css'
import data from '../../Data/data.json'
import Transport from '../Transport/Transport';
const Home = () => {
   const [info, setInfo] = useState()
   useEffect(()=>{
    setInfo(data)
    console.log(data)
   },[])
    return (
        <div className='row full-body mt-5'>
           {
               data.map(dt=> <Transport key={dt.id} dt={dt}></Transport>)
           }
        </div>
    );
};

export default Home;