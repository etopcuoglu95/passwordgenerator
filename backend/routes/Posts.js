const express = require('express');
const router = express.Router();
const db = require("../models");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const jwt = require('./jsonwt');
const crypt = require("crypto-js");
const {sign} = require('jsonwebtoken');

// TODO
// Add edit and delete

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

    // PUT THIS ON DOTENV
    var key = "SECRETFORNOW";

    var cipher = crypt.AES.encrypt(pass,key);
    cipher = cipher.toString();
    //console.log(cipher);

    var desc = crypt.AES.decrypt(cipher,key);
    desc = desc.toString(crypt.enc.Utf8);
    //console.log(desc);
    
    db.passwords.create({
        name : name,
        pass : cipher,
        userId : userId
    });
    return res.status(200).json({ error: "" });
    
    /*
    bcrypt.hash(pass,10).then((hash) => {
        db.passwords.create({
            name : name,
            pass : hash,
            userId : userId
        });
        return res.status(200).json({ error: "" });
    });
    */
});

router.put("/DeletePassword", async (req, res) => {
    const {targetName} = req.body;

    let token;

    if (jwt.isExpired(req)) {
        return res.status(401).json({ id: "", token: "", error: "Token Expired" });
    } else {
        token = jwt.refresh(req);
    }

    try {
        await db.passwords.destroy({where: {name: targetName}});
        return res.status(200).json({error: "", token: token});
    } catch (e) {
        // catch any errors
        return res.status(500).json({ error: e });
    }
});



router.post("/FindPasswords", async (req, res) => {
    const {userId} = req.body;

    var key = "SECRETFORNOW";

    if (jwt.isExpired(req)) {
        return res.status(401).json({ id: "", token: "", error: "Token Expired" });
    } else {
        token = jwt.refresh(req);
    }

    try{
        var Passwords = await db.passwords.findAll({
            where: { userId : userId}
        });
        
        //console.log(Passwords[4].pass.toString());

        //var desc = crypt.AES.decrypt(Passwords[4].pass,key);
        //desc = desc.toString(crypt.enc.Utf8);
        //console.log(desc);

        
        for (var i = 0; i < Passwords.length; i++)
        {
            Passwords[i].pass = crypt.AES.decrypt(Passwords[i].pass,key).toString(crypt.enc.Utf8);
        }
        
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