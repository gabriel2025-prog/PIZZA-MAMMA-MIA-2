import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/formatPrice';

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="d-flex align-items-center gap-3">
          <span className="navbar-brand mb-0 h1">Pizzería Mamma Mia!</span>
          <Link to="/" className="btn btn-outline-light">
            🍕 Home
          </Link>
        </div>
        
        <div className="d-flex gap-2">
          {token ? (
            <>
              <Link to="/profile" className="btn btn-outline-light">
                🔓 Profile
              </Link>
              <button className="btn btn-outline-light">
                🔒 Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline-light">
                🔐 Login
              </Link>
              <Link to="/register" className="btn btn-outline-light">
                🔐 Register
              </Link>
            </>
          )}
          <Link to="/cart" className="btn btn-primary">
            🛒 Total: ${formatPrice(total)}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;