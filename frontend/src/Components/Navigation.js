import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation()
{ 
  return (
        <Navbar bg="primary" variant="dark" className='topnav' style={{boxShadow:'1px 2px 9px', overflow:'visible',}}>
              <Navbar.Brand href="/home/" id='Navtitle' style={{marginLeft:"100px"}}>Password Generator</Navbar.Brand>
                  <Nav className="justify-content-end" style={{ width: "100%", marginRight: "15px" }}>
                      <Nav.Link href="/home/" className="nav-text">Home</Nav.Link>
                      <Nav.Link href="/login" className="nav-text">Login</Nav.Link>
                      <Nav.Link href="/signup"className="nav-text">Signup</Nav.Link>
                  </Nav>
      </Navbar>
  );
}

export default Navigation;