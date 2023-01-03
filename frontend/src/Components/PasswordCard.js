import React, {useState} from 'react';
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import {useNavigate} from "react-router-dom";


export default function PasswordCard({currentPassword}) {
    const inputView = {
        color:'#532004',
        display: 'inline-block',
        width: '100px'
    }
    const [open, setOpen] = useState(false); // collapsible button on card
    const history = useNavigate();
    const User = JSON.parse(localStorage.getItem('user_data'));

    return (

        <Card class="passcard" style={{width: "35%", minWidth:'400px', backgroundColor:"#1e90ff", padding:"0.50rem", display:"grid", margin:"1rem"}}>
            <text className='headingfont' style={{"font-weight": 'bold', "margin-bottom": "10px"}}>Company : {currentPassword.name}</text>
            <text className='headingfont' style={{"font-weight": 'bold', "margin-bottom": "10px"}}>Password : {currentPassword.pass}</text>
        </Card>

    );
}