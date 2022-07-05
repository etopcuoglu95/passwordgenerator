const express = require('express');
const router = express.Router();
const db = require("../models");

router.get("/", async (req, res) => {

    const list = await user.findAll();
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

module.exports = router;