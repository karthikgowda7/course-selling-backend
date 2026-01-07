const express = require("express");
const adminRoute = express.Router();
const {adminModel} = require('../db');
adminRoute.post('/signin', function (req, res) {
  res.json({
    message: "Admin signin"
  });
});

adminRoute.post('/signup', function (req, res) {
  res.json({
    message: "Admin signup"
  });
});

adminRoute.post('/createcourse', function (req, res) {
  res.json({
    message: "Course created"
  });
});

adminRoute.put('/modifycourse', function (req, res) {
  res.json({
    message: "Course modified"
  });
});

module.exports = adminRoute;
