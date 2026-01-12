import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <div className="card shadow-lg">
            <div className="card-body p-5">
              <h1 className="display-1 fw-bold text-danger">404</h1>
              <h2 className="mb-4">¡Página no encontrada!</h2>
              <p className="lead mb-4">
                Lo sentimos, la página que buscas no existe o ha sido movida.
              </p>
              <div className="mb-4">
                <span style={{ fontSize: '5rem' }}>🍕</span>
              </div>
              <Link to="/" className="btn btn-dark btn-lg">
                🏠 Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;