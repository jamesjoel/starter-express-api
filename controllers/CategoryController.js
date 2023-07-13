const app = require("express").Router();
const Category = require("../models/Category")

app.post("/", async(req, res)=>{
    let result = await Category.create(req.body);
    res.send({success : true, info: result });
})

app.get("/", async(req, res)=>{
    let result = await Category.find();
    res.send({success : true, info: result });
})
app.get("/subcate/:cateid", async(req, res)=>{
    // console.log(req.params.catename);
    let a = req.params.cateid;
    let result = await Category.find({ _id : a });
    res.send({success : true, info: result });
})
// app.get("/:id", async (req, res)=>{
//     let result = await Category.find({ _id : req.params.id});
//     res.send({success : true, info: result[0] });
// })

app.delete("/subcate/:subcateid/:cateid", async(req, res)=>{
    // console.log(req.params.id);
    let sid = req.params.subcateid;
    let cid = req.params.cateid;

    let result = await Category.findOneAndUpdate(
            { _id : cid }, 
            { $pull : { subcategory : {_id : sid }}}
        )
     res.send({success : true, info: result });

})

app.delete("/:id", async(req, res)=>{
    let id = req.params.id;
    let result = await Category.deleteMany({ _id : id })
    res.send({success : true, info: result });
})
app.put("/:id", async(req, res)=>{
    let id = req.params.id;
    let result = await Category.updateMany({ _id : id }, req.body)
    res.send({success : true, info: result });
})











app.post("/subcategory", async(req, res)=>{
    // console.log(req.body);
    // return;

    let result = await Category.updateOne({name : req.body.category}, {$push : {subcategory : {name : req.body.name}}});
    
    res.send({success : true, info: result });
})




module.exports = app;

/*


        });
    });
});

*/