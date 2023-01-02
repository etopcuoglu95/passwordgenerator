const express = require('express');
const router = express.Router();
const db = require("../models");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const jwt = require('./jsonwt');
const {sign} = require('jsonwebtoken');

// add verification using jsonwt

router.get("/", async (req, res) => {

    const list = await db.users.findAll();
    res.json(list);

});

router.post("/CreateUser", async (req, res) => {
    const {email,password,name,surname} = req.body;
    bcrypt.hash(password,10).then((hash) => {
        db.users.create({
            email : email,
            password : hash,
        });
        res.json("Success");
    });
    
    
});

router.post("/CreatePassword", async (req, res) => {
    const {name,pass,userId} = req.body;
    let token;

    if (jwt.isExpired(req)) {
        return res.status(401).json({ id: "", token: "", error: "Token Expired" });
    } else {
        token = jwt.refresh(req);
    }

    bcrypt.hash(pass,10).then((hash) => {
        db.passwords.create({
            name : name,
            pass : hash,
            userId : userId
        });
        return res.status(200).json({ error: "" });
    });
});


router.post("/FindPasswords", async (req, res) => {
    const {userId} = req.body;

    if (jwt.isExpired(req)) {
        return res.status(401).json({ id: "", token: "", error: "Token Expired" });
    } else {
        token = jwt.refresh(req);
    }

    try{
        const Passwords = await db.passwords.findAll({
            where: { userId : userId}
        });
        console.log(Passwords);
        return res.status(200).json({Password: Passwords, token: token, error: ""});
    } catch (e){
        return res.status(500).json({error: e});
    }
});

// update login
router.post("/login", async (req, res) => {
    const {email, password} = req.body;
        const User = await db.users.findOne({
            where: { email: email}
        });

        if (!User) 
            return res.json({ id: "", token: "", error: "Invalid Credentials" });
        
        else
        {
            bcrypt.compare(password,User.password).then((match) =>{
                if (!match) res.json({error : "Wrong Password"});
                
                else
                {
                  return res.json({ id: User.id, token: jwt.createToken(req),error: "" });
                }
            });
        }
        
});

module.exports = router;