import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function ViewProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/product/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const deleteProduct = () => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    axios
      .delete(`http://localhost:4000/product/${id}`)
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="card shadow">
      <img
        src={product.imageUrl}
        className="card-img-top"
        alt="product"
        style={{ height: "300px", objectFit: "cover" }}
      />

      <div className="card-body">
        <h3>{product.name}</h3>
        <p className="text-muted">{product.category}</p>
        <h5>₹ {product.price}</h5>
        <p>{product.description}</p>
      </div>

      <div className="card-footer d-flex justify-content-between">
        <button
          className="btn btn-warning"
          onClick={() => navigate(`/edit/${product._id}`)}
        >
          Edit
        </button>

        <button className="btn btn-danger" onClick={deleteProduct}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ViewProduct;