var express = require('express')
var router = express.Router()

const credentials ={
    email:"farzinahammed@gmail.com",
    password:"123"
}

router.post('/login',(req,res)=>{
    if(req.body.email==credentials.email && req.body.password==credentials.password){
        req.session.user=req.body.email;
        // res.end("Login Succes...")
           res.redirect('/route/dashboard')

    }else{
        res.end("invalid Username")
    }
})


//route-das

router.get('/dashboard',(req,res)=>{
    if(req.session.user){
        res.render('dashboard',{user:req.session.user})
    }else{
        res.send("u")
    }
})

//rout logf

router.get('/logout',(req,res )=>{
    req.session.destroy(function(err){
        if(err){
            console.log(err);
            res.send("Error")
        }else{
            res.render('base',{title: "Express",logout:"logout successfully...!"})
        }
    })
})

module.exports =router