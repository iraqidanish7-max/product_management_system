import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ListProducts from "./components/ListProducts";
import AddProduct from "./components/AddProduct";
import ViewProduct from "./components/ViewProduct";
import EditProduct from "./components/EditProduct";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<ListProducts />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/view/:id" element={<ViewProduct />} />
          <Route path="/edit/:id" element={<EditProduct />} />
        </Routes>
      </div>
    </>
  );
}

export default App;