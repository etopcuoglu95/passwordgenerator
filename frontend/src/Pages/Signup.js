import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navigation";
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';

// Do ul for buttons to do side by side

function Signup() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signup = () => {
    const data = { email: email, password: password };
    axios.post("http://localhost:5000/posts/CreateUser", data).then((response) => {
    console.log("It worked");
    });
  }

  return (
    <div className="signup-page">
      <Navbar/>
      <div className="Auth-form-container">
            <form className="Auth-form" >
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Create an Account</h3>
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
                        <Button type="submit" variant="flat" className="custom-btn" style={{color: 'white'}} onClick={signup}>
                            Create Account
                        </Button>
                        <a href ="/login" className="accountLogin" style={{color: 'white'}}>Already have an account?</a>
                        </>
                    </div>
                </div>
            </form>
        </div>
        
    </div>
  )
}

export default Signup