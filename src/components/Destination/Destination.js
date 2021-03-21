import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import map from '../../images/Map.png'
import './Destination.css'
import data from '../../Data/data.json'
import GoogleMaps from "simple-react-google-maps"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
<FontAwesomeIcon icon={faUsers} />
const Destination = () => {
    const {name} = useParams()
    let [location, setLocation] = useState("")
    let [presentLoc, setPresentLoc] = useState("")
    const [Dest, setDest] = useState("")
    const [destinations, setDestinations] = useState("");
    // const {rideId} = useParams()
     const [rider, setRider] = useState({})
    useEffect(()=>{
      setRider(data.find(dt => dt.name === name))
    },[])
    const {img,price,people} = rider;
    const onSubmits = (event) => {
        event.preventDefault();
        setPresentLoc(location)
        setDestinations(Dest)
        
    } 
    const inputEvent = (event) => {
        setLocation(event.target.value)
        
    }
    const inputEventTwo = (event) => {
        setDest(event.target.value)
    }
    const [show,setShow] = useState(true)
    
    return (
        <div className='row full-wid'>
            <div style={{ height:'240px'}} className='col-sm-6 col-lg-12 one-third my-5'>
              {show?<form className='mt-3' onSubmit={()=>onSubmits}>  
                 <label style={{display:'block'}} htmlFor="id">Pick From</label>
                <input required onChange={inputEvent} value={location}  id='from'  type="text"/>
                 <label style={{display:'block'}} htmlFor="id">Pick To</label>
                <input required value={Dest} onChange={inputEventTwo}  className='mb-3'  id='to' type="text"/>
                <input onClick={()=>setShow(!show)} type="submit" className='sub' value="Search"/>
              </form>: null}

              {show ? null :
              <div style={{color: 'black', backgroundColor: 'orange',padding: '10px',borderRadius: '10px'}} className='destination'>
                <h5>from: {location} </h5> 
                <h5>To: {Dest}</h5>
                <div>
                <img style={{width: '70px',height: '55px',borderRadius:'07px'}} src={img} alt=""/>
                <strong className='mx-3'>{name}</strong>
                
                <FontAwesomeIcon icon={faUsers} />
                <strong className='mx-1'>{people}</strong>
                <strong className='mx-3'>${price}</strong>
                </div>
              
                <div className='mt-2'>
                <img style={{width: '70px',height: '55px',borderRadius:'07px'}} src={img} alt=""/>
                <strong className='mx-3'>{name}</strong>
                
                <FontAwesomeIcon icon={faUsers} />
                <strong className='mx-1'>{people}</strong>
                <strong className='mx-3'>${price}</strong>
                </div>
              </div>
              }
               
              </div>   
            
            <div className='col-sm-6 col-lg-12 two-third'>
               <h5>Google Map Here</h5>
                <GoogleMaps
                  apiKey={"AIzaSyDxROgMA9-LwBwLdzkgaKtITC9r-_g3kz4"}
                  style={{height: "400px", width: "100%"}}
                  zoom={6}
                  center={{lat: 37.4224764, lng: -122.0842499}}
                  // markers={{lat: 37.4224764, lng: -122.0842499}} //optional
                />
            </div>
            
        </div>
    );
};
export default Destination;