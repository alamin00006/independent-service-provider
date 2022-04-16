import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const { id, name, price, picture, description} = service;
    const navigate = useNavigate();
    const BookingNow = (id) =>{
        navigate(`/service/${id}`)
    }
    return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={picture} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Title>pirce: ${price}</Card.Title>
    <Card.Text>
      {description}
    </Card.Text>
    <Button variant="primary" onClick={()=>BookingNow(id)}>Booking Now</Button>
  </Card.Body>
</Card>
        </div>
    );
};

export default Service;