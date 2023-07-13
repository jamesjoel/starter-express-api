require("../config/db");

const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
    name : String,
    email : String,
    password : String,
    gender : String,
    contact : String,
    address : String,
    city : String
})

module.exports = mongoose.model("user", UserSchema);