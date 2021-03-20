import React from 'react';
import { useHistory } from 'react-router';

const Transport = (props) => {
    const history = useHistory()
    const {img,name} = props.dt;
    const style = {
        backgroundColor: 'white'
    }
    const handlePurchase = (name) => {
        history.push(`/destination/${name}`)
    }
    return (
        <div onClick={()=> handlePurchase(name)} className='col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center' style={style}>
            <div className='card mt-4' style={{width: '15rem', backgroundColor:'thistle' }}>
                <img className='card-img-top img-fluid' style={{height: '12rem'}} src={img} alt=""/>
                <div className='card-body'>
                    <h4 className='card-title'>{name}</h4>
                </div>
            </div>
            
        </div>
    );
};

export default Transport;