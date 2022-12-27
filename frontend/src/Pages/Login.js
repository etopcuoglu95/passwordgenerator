import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navigation";
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
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
      <div className="Auth-form-container">
            <form className="Auth-form" >
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                            onChange={(c) => setEmail(c.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            onChange={(c) => setPassword(c.target.value)}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <>
                        <Button type="submit" variant="flat" className="custom-btn" style={{color: 'white'}} onClick={login}>
                            Login
                        </Button>
                        <a href ="/signup" className="accountLogin" style={{color: 'white'}}> Need an Account?</a>
                        </>
                    </div>
                </div>
            </form>
        </div>
      
    
        
    </div>
    
  );
}

export default Login;