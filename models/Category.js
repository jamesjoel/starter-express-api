require("../config/db")
const mongoose = require("mongoose");

const SubCateSchema = mongoose.Schema({
    name : String
})

const CateSchema = mongoose.Schema({
    name : String,
    subcategory : [SubCateSchema]
})

module.exports = mongoose.model("category", CateSchema);

/*
[
    {
        _id : 123
        name : "Electronics",
        subcategory : [
            {
                name : "TV"

            },
            {
                name : "Fridge"
            }
        ]
    }
]




*/