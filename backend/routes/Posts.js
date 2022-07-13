const express = require('express');
const router = express.Router();
const db = require("../models");

router.get("/", async (req, res) => {

    const list = await db.users.findAll();
    res.json(list);

});

router.post("/CreateUser", async (req, res) => {
    const post = req.body;
    await db.users.create(post);
    res.json(post);
});

router.post("/CreatePassword", async (req, res) => {
    const post = req.body;
    await db.passwords.create(post);
    res.json(post);
});


router.post("/FindPasswords", async (req, res) => {
    const {id} = req.body;
    const list = await db.passwords.findAll({
        where: { userId : id}
    });
    res.json(list);
});

router.post("/login", async (req, res) => {
    const {email, password} = req.body;
    try {

        const User = await db.users.findOne({
            where: { email: email, password: password },
        });

        if (!User)
            return res.status(401).json({ id: "", token: "", error: "Invalid Credentials" });

        return res.status(200).json({ id: User.id, token: "", error: "" });
    } catch (e) {
        return res.status(400).json({ id: "", token: "", error: e });
    }
});

module.exports = router;