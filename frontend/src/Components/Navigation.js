import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


// TODO
// Make userhome on navigation after logged in
function Navigation()
{ 

  const token = JSON.parse(localStorage.getItem('user_data'))?.token;
    const date = new Date();
    const [isLoggedIn, setLogIn] = useState(false);


    function handleLogout()
    {
        localStorage.clear();
        window.location.href= '/home';
    }

    useEffect(()=>{
        if (token === undefined)
            return;
        const decode = JSON.parse(atob(token.split('.')[1]));
        if (decode.exp * 1000 > new Date().getTime()) {
            setLogIn(true);
        }
    });

  return (
        <Navbar bg="primary" variant="dark" className='topnav' style={{boxShadow:'1px 2px 9px', overflow:'visible',}}>
              <Navbar.Brand href="/home/" id='Navtitle' style={{marginLeft:"100px"}}>Password Generator</Navbar.Brand>
                  <Nav className="justify-content-end" style={{ width: "100%", marginRight: "15px" }}>
                      <Nav.Link href="/home/" className="nav-text" style={{"font-weight" : "600"}}>Home</Nav.Link>
                      <Nav.Link href="/signup"className="nav-text" style={{"font-weight" : "600"}}>Signup</Nav.Link>

                      {isLoggedIn ?
                        <Nav>
                          <Nav.Link href="/userhome" className="nav-text" style={{"font-weight" : "600"}}>My Passwords</Nav.Link>
                          <Nav.Link onClick={handleLogout} className="nav-text" style={{"font-weight" : "600"}}>Logout</Nav.Link>  
                        </Nav>
                            :
                            <Nav.Link href="/login" className="nav-text" style={{"font-weight" : "600"}}>Login</Nav.Link>
                        }
                      
                  </Nav>
      </Navbar>
  );
}

export default Navigation;