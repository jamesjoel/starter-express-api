require("../config/db");
const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    title : String,
    price : Number,
    detail : String,
    category : mongoose.ObjectId,
    subcategory : mongoose.ObjectId,
    quantity : Number,
    detail : String,
    discount : Number,
    image : String
})

module.exports = mongoose.model("product", ProductSchema);