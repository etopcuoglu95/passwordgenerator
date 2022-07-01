const express = require('express');
const router = express.Router();
const {user} = require("../models");

router.get("/", async (req, res) => {

    const list = await user.findAll();
    res.json(list);
});

router.post("/", async (req, res) => {
    const post = req.body;
    await user.create(post);
    res.json(post);
});

module.exports = router;