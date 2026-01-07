const express = require("express");
const courseRoute = express.Router();

courseRoute.get('/preview',function(req,res){
            res.json({
                messege : "Baseline Code"
            })
} );

courseRoute.post('/purchase',function(req,res){
            res.json({
                messege : "Baseline Code"
            })
});

module.exports = courseRoute;