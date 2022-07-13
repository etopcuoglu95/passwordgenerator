import React from 'react';
import "../navbar.css"

function Navbar()
{ 
  return (
    <nav className="navbar">
      <ul>
        <li>
        <a href ="/login" className=""> Login</a>
        </li>
        <li>
        <a href ="/signup" className=""> Signup</a>
        </li>
        <li>
        <a href ="/home" className=""> Home</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;