import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
const Header = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" collapseOnSelect  sticky="top">
      <Container>
      <LinkContainer to="/"><Navbar.Brand href="#home">Online shop</Navbar.Brand></LinkContainer>
 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
    
          <Nav style={{ marginLeft: 'auto' }}>
         
            <Nav.Link href="#home">
            <i className="fa-solid fa-cart-shopping"></i>&nbsp;
           Cart </Nav.Link>
            <Nav.Link href="Login"><i className="fa-solid fa-user"></i>&nbsp;Signin </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
