import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <NavLink className="navbar-brand fw-bold" to="/">
        Product Management System
      </NavLink>

      <div className="ms-auto d-flex gap-2">
        <NavLink to="/" className="btn btn-secondary">
          Products
        </NavLink>

        <NavLink to="/add" className="btn btn-primary">
          Add Product
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;