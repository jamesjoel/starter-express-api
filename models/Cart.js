require("../config/db");
let mongoose = require("mongoose");

let CartSchema = mongoose.Schema({
    userid : mongoose.ObjectId,
    cartItems : []
});

module.exports = mongoose.model("cart", CartSchema);