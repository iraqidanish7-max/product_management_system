const express = require("express");
const cors = require("cors");
const connectDB = require("./db/db_config");
const productRoutes = require("./routes/productRoutes");

const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/product", productRoutes);
app.listen(4000, () => {
  console.log("Server running on port 4000");
});