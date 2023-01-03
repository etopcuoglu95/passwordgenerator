import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navigation';
import AddPassword from '../Components/AddPassword';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams} from "react-router-dom";
import PasswordCardList from '../Components/PasswordCardList';

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
    <div className='user-home'>
    <Navbar/>
        <div className="PasswordManage" style ={{ minWidth:'60rem', marginTop:"25px"}}>
            <h1 style={{color: "#532004", marginLeft:"15px"}}> 
              Manage Passwords
            </h1>
            <hr/>
            <h3 style={{color:"#532004", marginLeft: "15px"}}>Current Passwords</h3>
            <div>
                    <PasswordCardList PasswordList={Passwords} />
            </div>
            <AddPassword/>
            <br />
            <br />
            
        </div>
    </div>
  )
}

export default UserHome