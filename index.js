const express=require("express");
const path = require("path");
const mongoose=require("mongoose");
const authRoutes = require("./routers/auth");

const PORT = 8003;

const app=express();

//making public file static
app.use(express.static('public'));

//seting view engine
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

//connecting mongodb
mongoose.connect("mongodb://localhost:27017/portfolio")
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.error("MongoDB connection error:", err));
//middleware
// app.use(express.json());
// app.use(express.urlencoded({extended:false}));

//routers

app.get('/home',(req,res)=>{
    return res.render("home");
})

app.get('/protfolio',(req,res)=>{
    return res.render("protfolio");
})

app.use('/',authRoutes);

//setting port
app.listen(PORT,()=>console.log("server started at port:",PORT));
