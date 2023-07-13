const express = require("express");
const app = express();
const User = require("../models/User")
const sha1 = require("sha1");
const jwt = require("jsonwebtoken")


// Token based Auth

app.post("/", async(req, res)=>{
    // console.log(req.body);
    var e = req.body.email;
    var p = req.body.password;

    var result = await User.find({ email : e });
    if(result.length > 0){
        if(result[0].password == sha1(p)){

            var obj = { id : result[0]._id, name : result[0].name };
            var token = jwt.sign(obj, "the stepping stone");
            res.send({ success : true, token : token });
        }else{
            res.send({ success : false, errType : 2 });
        }
    }else{
        res.send({ success : false, errType : 1 });
    }

})

module.exports = app;

/*
    res.render()
    res.sendFile()
    res.redirect()

    res.send()
*/