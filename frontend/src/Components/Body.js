import React from 'react';
import logo from '../images/lock1.jpg'

function Body()
{ 
  return (
    <main>
      <h3 className="body--logo_text">Welcome to Secure Password Generetor</h3>
      <div className = "logo--div">
      <img src={logo} className="body--icon"/>
      </div>
    </main>
  )
}

export default Body;