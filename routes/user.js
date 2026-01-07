const express = require("express");
const userRoute = express.Router();

userRoute.post('/signin',function(req,res){
            res.json({
                messege : "Baseline Code"
            })
});

userRoute.post('/signup',function(req,res){
            res.json({
                messege : "Baseline Code"
            })
});

userRoute.get('/purchases',function(req,res){
            res.json({
                messege : "Baseline Code"
            })
});

module.exports = userRoute;