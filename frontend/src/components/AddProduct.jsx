import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    imageUrl: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/product/add", formData)
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="card shadow p-4">
      <h3 className="mb-3">Add Product</h3>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          name="name"
          placeholder="Product Name"
          onChange={handleChange}
          required
        />

        <input
          className="form-control mb-2"
          name="price"
          type="number"
          placeholder="Price"
          onChange={handleChange}
          required
        />

        <input
          className="form-control mb-2"
          name="category"
          placeholder="Category"
          onChange={handleChange}
          required
        />

        <input
          className="form-control mb-2"
          name="imageUrl"
          placeholder="Image URL"
          onChange={handleChange}
          required
        />

        <textarea
          className="form-control mb-3"
          name="description"
          placeholder="Description"
          onChange={handleChange}
          required
        ></textarea>

        <button className="btn btn-success w-100">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;