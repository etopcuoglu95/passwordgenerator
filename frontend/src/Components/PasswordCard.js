import React, {useState} from 'react';
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import {useNavigate} from "react-router-dom";


export default function PasswordCard({currentPassword}) {

    const history = useNavigate();

    const User = JSON.parse(localStorage.getItem('user_data'));
    const handleDelete = async (name) => {
        var js = {targetName: name, token: User.token};

        js = JSON.stringify(js);
        var config =
            {
                method: 'put',
                url: "http://localhost:5000/posts/DeletePassword",
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
                    console.log('Error fetching Admins');
                } else {
                    history(0);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const inputView = {
        color:'#532004',
        display: 'inline-block',
        width: '100px'
    }

    const [showRemove, setShowRemove] = useState(false); 
    const handleCloseRemove = () => setShowRemove(false); 
    const handleShowRemove = () => setShowRemove(true);
    const [open, setOpen] = useState(false); // collapsible button on card

    return (

        <Card class="passcard" style={{width: "20%", minWidth:'400px', backgroundColor:"#1e90ff", padding:"0.50rem", display:"grid", margin:"1rem"}}>
            <text className='headingfont' style={{"color":"white","font-weight": '600', "margin-bottom": "10px"}}>Company : {currentPassword.name}</text>
            <text className='headingfont' style={{"color":"white","font-weight": '600', "margin-bottom": "10px"}}>Password : {currentPassword.pass}</text>
            <div id="adminOps">
                    <Button variant="danger" style={{ "text-align": 'center'}} onClick={handleShowRemove}>Remove</Button>
            </div>

            <Modal show={showRemove} onHide={handleCloseRemove} style={{"backdrop-filter": "blur(5px)"}}>
                <Modal.Header closeButton style={{"background-color": "#007bff"}}>
                    <Modal.Title>Remove Password?</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{"background-color": "#fffaf0"}}>Are you sure you want to remove this
                    Password?</Modal.Body>
                <Modal.Footer style={{"background-color": "#fffaf0"}}>
                    <Button variant="secondary" onClick={handleCloseRemove}>
                        No, Go Back
                    </Button>
                    <Button variant="danger" onClick={()=>handleDelete(currentPassword.name)}>
                        Yes, Remove Password
                    </Button>
                </Modal.Footer>
            </Modal>

        </Card>

        

    );
}