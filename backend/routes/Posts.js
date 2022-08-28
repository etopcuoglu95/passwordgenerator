const express = require('express');
const router = express.Router();
const db = require("../models");
const bcrypt = require("bcrypt");
const {sign} = require('jsonwebtoken');
const { validateToken } = require('../middleware/Auth');



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

router.post("/CreatePassword", validateToken, async (req, res) => {
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
                    const  accessToken = sign({username: User.email, id: User.id},
                        "SKDHASFsakfashiaDHSLF="
                   );
                    
                   res.json({ id: User.id, token: accessToken});
                }
            });
        }
        
});

module.exports = router;