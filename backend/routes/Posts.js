const express = require('express');
const router = express.Router();
const db = require("../models");
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {

    const list = await db.users.findAll();
    res.json(list);

});

router.post("/CreateUser", async (req, res) => {
    const {email,password} = req.body;
    bcrypt.hash(password,10).then((hash) => {
        db.users.create({
            email : email,
            password : hash,
        });
        res.json("Success");
    });
    
    
});

router.post("/CreatePassword", async (req, res) => {
    const {name,pass} = req.body;
    bcrypt.hash(pass,10).then((hash) => {
        db.passwords.create({
            name : name,
            pass : hash,
        });
        res.json("Success");
    });
});


router.post("/FindPasswords", async (req, res) => {
    const {id} = req.body;
    const list = await db.passwords.findAll({
        where: { userId : id}
    });
    res.json(list);
});

// update login
router.post("/login", async (req, res) => {
    const {email, password} = req.body;
    try {

        const User = await db.users.findOne({
            where: { email: email}
        });

        if (!User)
            return res.status(401).json({ id: "", token: "", error: "Invalid Credentials" });
        
        bcrypt.compare(password,User.password).then((match) =>{
            if (!match) res.json({error : "Wrong Password"});
        });

        return res.status(200).json({ id: User.id, token: "", error: "" });
    } catch (e) {
        return res.status(400).json({ id: "", token: "", error: e });
    }
});

module.exports = router;