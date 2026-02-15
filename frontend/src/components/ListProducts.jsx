import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ListProducts() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4000/product")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Products</h2>

      <div className="row">
        {products.map((p) => (
          <div className="col-md-4 mb-4" key={p._id}>
            <div className="card h-100 shadow-sm">
              <img
                src={p.imageUrl}
                className="card-img-top"
                alt="Product"
                style={{ height: "200px", objectFit: "cover" }}
              />

              <div className="card-body text-center">
                <h5 className="card-title">{p.name}</h5>
                <p className="text-muted">{p.category}</p>

                <button
                  className="btn btn-primary"
                  onClick={() => navigate(`/view/${p._id}`)}
                >
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListProducts;