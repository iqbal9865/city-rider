import React, { useEffect, useState } from 'react';
import data from '../../Data/data.json'
import './StaticDestination.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
const StaticDestination = () => {
    const [ride, setRide] = useState({})
    useEffect(()=>{
        setRide(data[0])
        console.log((data[0]))
    },[])
    return (
        <div className='d-flex justify-content-center'> 
{/*             
                <img src={ride.img} alt=""/>
                <h2>{ride.name}</h2>
                <h5>{ride.people}</h5>
                <h5>{ride.price}</h5> */}

                <div className='card mt-4' style={{width: '25rem', backgroundColor:'thistle' }}>
                <img className='card-img-top img-fluid' style={{height: '12rem'}} src={ride.img} alt=""/>
                <div className='card-body d-flex'>
                    <h4 className='card-title mx-3'>{ride.name}</h4>
                    <h5 className='card-title mx-3'><FontAwesomeIcon className='mx-1' icon={faUsers} />{ride.people}</h5>
                    <h5 className='card-title mx-3'>${ride.price}</h5>
                </div>
            </div>
        </div>
    );
};

export default StaticDestination;