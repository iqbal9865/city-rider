import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import map from '../../images/Map.png'
import './Destination.css'
import data from '../../Data/data.json'
const Destination = () => {
    const {name} = useParams()
    let [names, setName] = useState("")
    let [fullName, setFullName] = useState("")
    const [lastName, setLastName] = useState("")
    const [presentLastName, setPresentLastName] = useState("");
    // const {rideId} = useParams()
    // const [rider, setRider] = useState({})
    // useEffect(()=>{
    //     setRider(name)
    // },[])
    // const {img,id} = name;
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
    return (
        <div className='row full-wid'>
            <div className='col-sm-6 col-lg-12 one-third my-5'>
              <form  onSubmit={onSubmits}>  
                <label style={{display:'block'}} htmlFor="id">Pick From</label>
                <input onChange={inputEvent} value={names} id='from' type="text"/>
                <label style={{display:'block'}} htmlFor="id">Pick To</label>
                <input value={lastName} onChange={inputEventTwo} className='mb-3' id='from' type="text"/>
                <input  type="submit" className='sub' value="Search"/>
              </form>
              <div style={{color: 'black', backgroundColor: 'orange',padding: '10px', borderRadius: '10px'}} className='mt-5 destination'>
                <h5>from: {fullName} </h5> 
                <h5>To: {presentLastName}</h5>
              </div>
               
              </div>
              
            
            <div className='col-sm-6 col-lg-12 two-third'>
                <img className='img-fluid'  src={map} alt=""/>
            </div>
            {/* <img src={img} alt=""/> */}
        </div>
    );
};

export default Destination;