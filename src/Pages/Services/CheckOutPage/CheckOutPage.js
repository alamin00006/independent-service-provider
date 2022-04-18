import React from 'react';
import { useParams } from 'react-router-dom';


const CheckOutPage = () => {
    const {serviceId} = useParams()
    return (
        <div>
            <h1>CheckOut Page</h1>
      </div>
    );
};

export default CheckOutPage;