import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navigation';
import AddPassword from '../Components/AddPassword';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams} from "react-router-dom";

// After login come here, axios post create password using middleware,
// do the post request passing accesstoken in headers. 

// we have id in the localstorage call get passwords to show users passwords.



function UserHome() {
  const [Passwords, setPasswords] = useState([]);

  const User = JSON.parse(localStorage.getItem('user_data'));
  const fetchAllPasswords = async () => {
    var js = { userId: User.id, token: User.token };
          js = JSON.stringify(js);
          var config =
          {
              method: 'post',
              url: "http://localhost:5000/posts/FindPasswords",
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
                      console.log('Error getting passwords');
                  } else {
                      setPasswords(res.Password);
                      console.log(Passwords);
                  }
              })
              .catch(function (error) {
                  console.log(error);
              });
      }
      useEffect(() => {
          fetchAllPasswords();
      }, []);

  return (
    <main>
    <Navbar/>
        <div className="PasswordManage" style ={{ minWidth:'60rem', marginTop:"40px"}}>
            <h1 class="leftpadding headingfont " style={{color: "#532004", marginTop:"0.4rem"}}> 
              Manage Passwords
            </h1>
            <hr/>
            <h3 class="sectiondivide labelpadding leftpadding headingfont" style={{color:"#532004"}}>Current Passwords</h3>
            <AddPassword/>
        </div>
    </main>
  )
}

export default UserHome