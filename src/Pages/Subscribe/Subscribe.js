
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Subscribe.css'

const Subscribe = () => {

    const handleSubmit =(e)=>{
        e.preventDefault();
    }
    return (
        <div className='container subscribe-container'>
                     
              <h4 className='subscribe-title mt-5'>Subscribe Now</h4>
          <Form onSubmit={handleSubmit} className='d-flex justify-content-center subscribe'>
              
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='fs-5 fw-bold text-white'>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter Your email" className='subscribe-input' />
                <Button className='fw-bold fs-5' variant="primary" type="submit">
                Subscribe Now
              </Button>
              </Form.Group>
            
             
            </Form>
          
          </div>
   
       
    );
};

export default Subscribe;