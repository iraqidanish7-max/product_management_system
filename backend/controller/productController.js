const productModel = require("../model/productModel");

/* Add Product */
exports.addProduct = async (req, res) => {
  const newProduct = new productModel(req.body);
  const result = await newProduct.save();
  res.status(200).json(result);
};

/* Show All Products */
exports.showProducts = async (req, res) => {
  const products = await productModel.find();
  if (products != null) {
    res.status(200).json(products);
  } else {
    res.status(404).json({ message: "No Products Found" });
  }
};

/* Show Single Product */
exports.showProduct = async (req, res) => {
  const product = await productModel.findById(req.params.id);
  if (product != null) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: "Product Not Found" });
  }
};

/* Update Product */
exports.updateProduct = async (req, res) => {
  const data = await productModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(data);
};

/* Delete Product */
exports.deleteProduct = async (req, res) => {
  const data = await productModel.findByIdAndDelete(req.params.id);
  res.status(200).json(data);
};