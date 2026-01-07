const express = require("express");
const mongoose = require('mongoose');
const app = express();
const userRoute = require("./routes/user");
const courseRoute = require("./routes/course");
const adminRoute = require("./routes/admin");


app.use('/user',userRoute);
app.use('/course',courseRoute);
app.use('/admin',adminRoute);

async function main()
{
    await mongoose.connect("process.env.MONGO_URL");
    console.log("connected mongoose");
    app.listen(3000);
}

main();


