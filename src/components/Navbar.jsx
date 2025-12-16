import React from 'react';
import { formatPrice } from '../utils/formatPrice';

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="d-flex align-items-center gap-3">
          <span className="navbar-brand mb-0 h1">Pizzería Mamma Mia!</span>
          <button className="btn btn-outline-light">
            🍕 Home
          </button>
        </div>
        
        <div className="d-flex gap-2">
          {token ? (
            <>
              <button className="btn btn-outline-light">
                🔓 Profile
              </button>
              <button className="btn btn-outline-light">
                🔒 Logout
              </button>
            </>
          ) : (
            <>
              <button className="btn btn-outline-light">
                🔐 Login
              </button>
              <button className="btn btn-outline-light">
                🔐 Register
              </button>
            </>
          )}
          <button className="btn btn-primary">
            🛒 Total: ${formatPrice(total)}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;