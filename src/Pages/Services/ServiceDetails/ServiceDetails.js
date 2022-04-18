import React from 'react';
import { useParams } from 'react-router-dom';
import CheckOut from '../../CheckOut/CheckOut';

const ServiceDetails = () => {
    const {serviceId} = useParams()
    return (
        <div>
            <h1>servise details{serviceId}</h1>
            <CheckOut></CheckOut>
        </div>
    );
};

export default ServiceDetails;