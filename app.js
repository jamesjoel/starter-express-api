const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./config/routes");
const upload = require("express-fileupload")
const root = require("path").join(__dirname, "build");
app.use(express.static(root));
// app.use(express.state(__dirname+"/assets"));
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
// localhost:3001
app.use(upload());
app.use(cors());

// Disabled the CORS Policy
app.use(routes);


// "*" ---- any route
app.use("*", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
})


const port = process.env.PORT || 3001;
app.listen(port, ()=>{
    console.log("server running with port, ", port)
})