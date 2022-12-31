import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navigation";
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const doLogin = async event => {
    event.preventDefault();

    var obj = { email: email, password: password };
    var js = JSON.stringify(obj);
    var config =
        {
            method: 'post',
            url: "http://localhost:5000/posts/login",
            headers:
                {
                    'Content-Type': 'application/json'
                },
            data: js
        };

    axios(config)
        .then(function (response) {
            const res = response.data;
            if (res.error) {
              alert(response.data.error);
            }
            else {
                var user = { id: res.id, email: email, token: res.token};
                localStorage.setItem('user_data', JSON.stringify(user));
                navigate("/userhome", {
                    state: {
                        user: user
                    }
                })
                console.log(user.token);
            }
        })
        .catch(function (error) {
            console.log(error);
            setMessage("User/Password combination incorrect")
        });
}

function handleSubmit(event) {
    event.preventDefault();
    doLogin(event);
}

  return (
    <div>
      <Navbar/>
      <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={(event => handleSubmit(event))} >
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
                        <Button type="submit" variant="flat" className="custom-btn" style={{color: 'white'}}>
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