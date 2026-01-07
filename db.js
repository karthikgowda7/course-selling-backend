const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;
require('dotenv').config();

mongoose.connect("process.env.MONGO_URL");

const userSchema = new Schema({
  username: String,
  password: String
});

const adminSchema = new Schema({
  username: String,
  password: String
});

const courseSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  creatorId: ObjectId
});

const purchaseSchema = new Schema({
  userId: ObjectId,
  courseId: ObjectId
});

const UserModel = mongoose.model("User", userSchema);
const AdminModel = mongoose.model("Admin", adminSchema);
const CourseModel = mongoose.model("Course", courseSchema);
const PurchaseModel = mongoose.model("Purchase", purchaseSchema);

module.exports = {
  UserModel,
  AdminModel,
  CourseModel,
  PurchaseModel
};
