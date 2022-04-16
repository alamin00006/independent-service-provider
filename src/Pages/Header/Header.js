import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='fs-5 text-white'>
            <div>
            
           <Navbar collapseOnSelect expand="lg" bg="info" >
  <Container>
  <Navbar.Brand as ={Link} to="/">My Logo</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
             
    </Nav>
    <Nav>
    <Nav.Link as={Link}to="home">Home</Nav.Link>
    <Nav.Link as={Link}to="health">Health&Medicine</Nav.Link>
    
      <Nav.Link href="home#services">Services</Nav.Link>
      <Nav.Link as={Link}to="about">About</Nav.Link>
      <Nav.Link as={Link}to="login">Login</Nav.Link>
     
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            </div>
        </nav>
    );
};

export default Header;