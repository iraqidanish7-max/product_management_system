import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    imageUrl: "",
    description: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:4000/product/${id}`)
      .then((res) => setFormData(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:4000/product/${id}`, formData)
      .then(() => navigate(`/view/${id}`))
      .catch((err) => console.log(err));
  };

  return (
    <div className="card shadow p-4">
      <h3 className="mb-3">Edit Product</h3>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          className="form-control mb-2"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <input
          className="form-control mb-2"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />

        <input
          className="form-control mb-2"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          required
        />

        <textarea
          className="form-control mb-3"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>

        <button className="btn btn-warning w-100">Update Product</button>
      </form>
    </div>
  );
}

export default EditProduct;