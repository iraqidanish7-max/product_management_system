const express = require("express");
const {
  addProduct,
  showProducts,
  showProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/productController");

const router = express.Router();

/* Routes */
router.post("/add", addProduct);
router.get("/", showProducts);
router.get("/:id", showProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;