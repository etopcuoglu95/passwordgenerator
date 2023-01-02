import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function AddPassword()
{
    const history = useNavigate();
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");

    const User = JSON.parse(localStorage.getItem('user_data'));
    const handleCreate = async () => {
        let js = {name: name, pass: pass, userId: User.id,token: User.token};
        js = JSON.stringify(js);
        const config =
            {
                method: 'post',
                url: "http://localhost:5000/posts/CreatePassword",
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
                console.log("DOOM");
            } else {
                history(0);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    
    }

    const [showCreate, setShowCreate] = useState(false);
    const handleCloseCreate = () => setShowCreate(false);
    const handleShowCreate = () => setShowCreate(true);
    const inputView = {
        color:'#532004',
        display: 'inline-block',
        width: '100px'
    }

    return(
        <div>
            <Button variant="primary" style={{float: "left", display: "inline-block", marginLeft:"1rem", fontFamily:'Raleway'}} onClick={handleShowCreate}>
                Add Password
            </Button>

            <Modal show={showCreate} onHide={handleCloseCreate} style={{ "backdropFilter": "blur(5px)" }}>
                <Modal.Header closeButton style={{ "background-color": "#f2ad88", fontFamily:'Raleway', color:'#75300a' }}>
                    <Modal.Title>Add your Password</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ "background-color": "#fdd5bf" }}>
                <form> 
                    <div className='password-input'>
                    <label for="name" class="labelpadding clickable" style={inputView}>Name :</label>
                    <input id="name" name="name" type="text" class="labelpadding clickable" onChange={(e) => setName(e.target.value)}></input>
                    <br />
                    <label for="lastName" class="labelpadding clickable" style={inputView}>Password:</label>
                    <input id="lastName" name="lastName" type="text" class="labelpadding clickable" onChange={(e)=>setPass(e.target.value)}></input>
                    <br />
                    <br />
                    </div>
                </form>
                </Modal.Body>
                <Modal.Footer style={{ "background-color": "#f2ad88" }}>
                    <br/>
                    <Button variant="secondary" onClick={handleCloseCreate} style={{fontFamily:'Raleway'}}>
                        Go Back
                    </Button>
                    <Button variant="success" onClick={() => handleCreate()} style={{fontFamily:'Raleway'}}>
                        Add Password
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}