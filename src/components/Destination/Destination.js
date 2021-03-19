import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import map from '../../images/Map.png'
import './Destination.css'
import data from '../../Data/data.json'
const Destination = ({dt}) => {
    const {name} = useParams()
    // const {rideId} = useParams()
    // const [rider, setRider] = useState({})
    // useEffect(()=>{
    //     setRider(name)
    // },[])
    // const {img,id} = name;
    const style = {
        backgroundColor: 'lightgray',
        width: '300px',
        margin: '20px',
        padding: '20px',
        borderRadius: '10px'
    }
    return (
        <div className='row container w-100'>
            
            <div style={style} className='col-sm-6 col-lg-12 one-third'>
                <label style={{display:'block'}} htmlFor="id">Pick From</label>
                <input className='' id='from' type="text"/>
                <label style={{display:'block'}} htmlFor="id">Pick To</label>
                <input className='mb-3' id='from' type="text"/>
                <button style={{display: 'block'}} className='btn btn-danger'>Search</button>
            </div>
            <div className='col-sm-6 col-lg-12 two-third'>
                <img className='img-fluid' style={{width :'500px'}} src={map} alt=""/>
            </div>
            {/* <img src={img} alt=""/> */}
        </div>
    );
};

export default Destination;