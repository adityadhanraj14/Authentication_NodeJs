async function Signup(req,res){
    return res.render("signup");
}

async function Login(req,res){
    return res.render("login");
}


async function handleSignup(req,res){
    return res.send("new signup");
}

async function handleLogin(req,res){
    return res.send("new Login");
}



module.exports={
    handleSignup,
    handleLogin,
    Signup,
    Login
}