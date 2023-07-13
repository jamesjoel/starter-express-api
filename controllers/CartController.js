const app = require("express").Router();
const Cart = require("../models/Cart")
const jwt  = require("jsonwebtoken");

app.post("/:token", async(req, res)=>{
    //console.log(req.body);
    //return;
    var info = req.params.token;
    var obj = jwt.decode(info, "the stepping stone");
    var insertOjb = { userid : obj.id, cartItems : req.body };
    let result = await Cart.create(insertOjb);
    res.send({success : true, info: result });
})

app.get("/", async(req, res)=>{
    let result = await Cart.find();
    res.send({success : true, info: result });
})

app.delete("/:id", async(req, res)=>{
    let id = req.params.id;
    let result = await Cart.deleteMany({ _id : id })
    res.send({success : true, info: result });
})
app.put("/:id", async(req, res)=>{
    let id = req.params.id;
    let result = await Cart.updateMany({ _id : id }, req.body)
    res.send({success : true, info: result });
})


module.exports = app;
