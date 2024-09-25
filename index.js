const express=require("express");
const path = require("ejs");
const mongoose=require("mongoose");

const PORT = 8003;

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

mongoose.connect("mongodb://localhost:27017/protfolio",()=>console.log("mongodb connected succesfully"));

app.listen(PORT,()=>console.log("server started at port:",PORT));
