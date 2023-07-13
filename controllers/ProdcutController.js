const app = require("express").Router();
const Product = require("../models/Products")
const Category = require("../models/Category");
const path = require("path");
const rand = require("randomstring");
//sdferteertert.jpeg

app.post("/", async(req, res)=>{
    // console.log(JSON.parse(req.body.data));
    // console.log(req.files.file);
    let formdata = JSON.parse(req.body.data);
    let file = req.files.file;
    let arr = file.name.split(".");
    let ext = arr[arr.length-1];
    let newname = rand.generate()+"."+ext;
    formdata.image = newname;
    file.mv(path.resolve()+"/build/assets/upload/"+newname, async (err)=>{

        let result = await Product.create(formdata);
        res.send({success : true, info: result });
    });
})

app.get("/", async(req, res)=>{
    let result = await Product.find();
    res.send({success : true, info: result });
})
app.delete("/:id", async(req, res)=>{
    let id = req.params.id;
    let result = await Product.deleteMany({ _id : id })
    res.send({success : true, info: result });
})
app.put("/:id", async(req, res)=>{
    let id = req.params.id;
    let result = await Product.updateMany({ _id : id }, req.body)
    res.send({success : true, info: result });
})

app.get("/category/:name", async(req, res)=>{
    let catename = req.params.name;
    // console.log(catename);
    let cateresult = await Category.find({ name : catename });
    let result = await Product.find({ category : cateresult[0]._id });
    res.send({success : true, info: result });
})
app.get("/subcategory/:name/:sub", async(req, res)=>{
    let catename = req.params.name;
    let subcate = req.params.sub;
    let cateresult = await Category.find({ 'name' : catename, 'subcategory.name' : subcate }, {'subcategory.$': 1});
    // console.log(cateresult);
    let subcateid = cateresult[0].subcategory[0]._id;
    let result = await Product.find({ subcategory : subcateid });
    res.send({success : true, info: result });
})


module.exports = app;



/*
Product.aggregat({

},
{

},
{

})
*/