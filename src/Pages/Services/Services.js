import React, { useEffect, useState } from 'react';
import Service from './Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() =>{
        fetch('service.json')
        .then(res =>res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div  id='services'>
           <h1 className='service-title text-center fw-bold' >Services</h1>
           <div className='all-card container'>
           {
               services.map(service =><Service key={service.id} service ={service}></Service>)
           }
           </div>
        </div>
    );
};

export default Services;