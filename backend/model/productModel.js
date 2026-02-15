const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    category: String,
    imageUrl: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const productModel = mongoose.model("products", productSchema);

module.exports = productModel;