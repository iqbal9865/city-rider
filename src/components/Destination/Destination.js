import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import map from '../../images/Map.png'
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './Destination.css'
import data from '../../Data/data.json'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
<FontAwesomeIcon icon={faUsers} />
const Destination = () => {
    const {name} = useParams()
    let [names, setName] = useState("")
    let [fullName, setFullName] = useState("")
    const [lastName, setLastName] = useState("")
    const [presentLastName, setPresentLastName] = useState("");
    // const {rideId} = useParams()
     const [rider, setRider] = useState({})
    useEffect(()=>{
      setRider(data.find(dt => dt.name === name))
    },[])
    const {img,price,people} = rider;
    const onSubmits = (event) => {
        event.preventDefault();
        setFullName(names)
        setPresentLastName(lastName)
        
    } 
    const inputEvent = (event) => {
        setName(event.target.value)
        
    }
    const inputEventTwo = (event) => {
        setLastName(event.target.value)
    }
    const [show,setShow] = useState(true)
    return (
        <div className='row full-wid'>
            <div className='col-sm-6 col-lg-12 one-third my-5'>
              {show?<form  onSubmit={()=>onSubmits}>  
                 <label style={{display:'block'}} htmlFor="id">Pick From</label>
                <input onChange={inputEvent} value={names} required id='from' type="text"/>
                 <label style={{display:'block'}} htmlFor="id">Pick To</label>
                <input value={lastName} onChange={inputEventTwo} required className='mb-3' id='from' type="text"/>
                <input onClick={()=>setShow(!show)} type="submit" className='sub' value="Search"/>
              </form>: null}
              {show ? null:
              <div style={{color: 'black', backgroundColor: 'orange',padding: '10px',         borderRadius: '10px'}} className='destination'>
                <h5>from: {fullName}  Mirpur</h5> 
                <h5>To: {presentLastName} Dhanmondi</h5>
                <img style={{width: '80px',height: '75px',borderRadius:'10px'}} src={img} alt=""/>
                <strong className='mx-3'>{name}</strong>
                
                <FontAwesomeIcon icon={faUsers} />
                <strong className='mx-3'>{people}</strong>
                <strong className='mx-3'>${price}</strong>
              </div>
              }
               
              </div>
              
            
            <div className='col-sm-6 col-lg-12 two-third'>
                <img className='img-fluid'  src={map} alt=""/>
            </div>
            
        </div>
    );
};

export default Destination;