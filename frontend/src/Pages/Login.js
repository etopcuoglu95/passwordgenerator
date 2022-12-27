import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navigation";
import { useNavigate } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


  const login = () => {
    const data = { email: email, password: password };
    axios.post("http://localhost:5000/posts/login", data).then((response) => {
      if(response.data.error)
        alert(response.data.error);
      else
      {
        sessionStorage.setItem("accessToken(Dont peek please lol)", response.data.token);
        navigate(`/userhome/${response.data.id}`);
      }
    });
  };

  return (
    <div>
      <Navbar/>
      <div className="loginPage">
          <div className="loginContainer">
            <h2>Login</h2>
            <label>Username:</label>
            <input
              type="text"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <label>Password:</label>
            <input
              type="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />

            <ul className='loginFormUl'>
                    <button onClick={login}> Login </button>
                    <a href ="/signup" className="accountLogin"> Need an Account?</a>
            </ul>
          </div>
        </div>
    </div>
    
  );
}

export default Login;