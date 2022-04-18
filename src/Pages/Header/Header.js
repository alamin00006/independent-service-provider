import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Header.css";

const Header = () => {

  const [user, loading, error] = useAuthState(auth);

  const SingOutHandle = ()=>{
    signOut(auth);
  }
  return (
    <nav className="fs-5">
      <div>
        <Navbar collapseOnSelect  expand="lg" bg="info" variant="light">
          <Container>
            <Navbar.Brand as={Link} to="/">
              My Logo
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link as={Link} to="/home" className="text-white">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/health" className="text-white">
                  Health&Medicine
                </Nav.Link>

                <Nav.Link href="home#services" className="text-white">Services</Nav.Link>
                <Nav.Link as={Link} to="/blog" className="text-white">
                  Blog
                </Nav.Link>
                <Nav.Link as={Link} to="/about" className="text-white">
                  About
                </Nav.Link>
                {user?.email?<p onClick={SingOutHandle} className="mt-2 text-white sing-Out" >SingOut</p>:<Nav.Link as={Link} to="/login" className="text-white">
                  Login
                </Nav.Link>}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </nav>
  );
};

export default Header;
