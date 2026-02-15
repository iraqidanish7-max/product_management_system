const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/product_management_system")
    .then(() => {
      console.log("MongoDB Connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDB;