const app = require("express").Router();
const User = require("../models/User")
const jwt = require("jsonwebtoken");

app.get("/:x", async (req, res)=>{
    var a = req.params.x;
    var obj = jwt.decode(a, "the stepping stone");
    var result = await User.find({ _id : obj.id});
    res.send(result[0]);
})


module.exports = app;