const app = require("express").Router();
const City = require("../models/City")

app.get("/", async (req, res)=>{
    var result = await City.find();
    res.send(result);
})


app.get("/state", async (req, res)=>{
    var result = await City.distinct("state");
    res.send(result);  
})

app.get("/getcity/:x", async(req, res)=>{
    var a = req.params.x;
    var result = await City.find({ state : a});
    res.send(result);
})

module.exports = app;
/*
    URL = localhost:3001/api/city/getcity/Madhya Prash

    URL =  localhost:3001/api/city/rohit/21
    URL =  localhost:3001/api/city/amar/24
    URL =  localhost:3001/api/city/jaya/31


    app.get("/api/city/:a/:b", (req, res)=>{
        req.params.a
        req.params.b
    })

*/