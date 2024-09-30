const express = require("express");
const {handleSignup,handleLogin,Signup,Login} = require("../controllers/auth");

const router = express.Router();

router.get('/signup',Signup);
router.post('/signup',handleSignup);
router.get('/login',Login);
router.post('/login',handleLogin);

module.exports=router;