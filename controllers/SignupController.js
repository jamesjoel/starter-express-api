const express = require("express");
const app = express();
const User = require("../models/User")
const sha1 = require("sha1");

app.post("/", async(req, res)=>{
    delete req.body.repass;

    req.body.password = sha1(req.body.password);

    await User.create(req.body);
    res.send({ success : true });
})

module.exports = app;

/*
    res.render()
    res.sendFile()
    res.redirect()

    res.send()
*/