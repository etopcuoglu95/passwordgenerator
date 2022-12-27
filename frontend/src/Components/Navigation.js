import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation()
{ 
  return (
        <Navbar fluid expand="lg" bg="primary" variant="dark" className='topnav' style={{zIndex: 1001, boxShadow:'1px 2px 9px', overflow:'visible',}}>
          <Container>
              <Navbar.Brand href="/home/" id='Navtitle'>Password Generator</Navbar.Brand>
                  <Nav className='navbar-text'>
                      <Nav.Link href="/home/" className="nav-text">Home</Nav.Link>
                      <Nav.Link href="/login" className="nav-text">Login</Nav.Link>
                      <Nav.Link href="/signup"className="nav-text">Signup</Nav.Link>
                  </Nav>
          </Container>
      </Navbar>
  );
}

export default Navigation;