import React from 'react';
import { useParams } from 'react-router';

const Destination = () => {
    const {name} = useParams()
    return (
        <div>
            <h3>Journey with {name}</h3>
        </div>
    );
};

export default Destination;