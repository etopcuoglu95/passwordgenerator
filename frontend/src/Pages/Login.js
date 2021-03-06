import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    const data = { email: email, password: password };
    axios.post("http://localhost:5000/posts/login", data).then((response) => {
      console.log("Worked");
    });
  };

  return (
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
  );
}

export default Login;