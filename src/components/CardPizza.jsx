import React from 'react';
import { formatPrice } from '../utils/formatPrice';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card" style={{ width: '100%', maxWidth: '350px' }}>
      <img src={img} className="card-img-top" alt={name} style={{ height: '200px', objectFit: 'cover' }} />
      <div className="card-body">
        <h5 className="card-title text-capitalize">Pizza {name}</h5>
        <hr />
        <p className="card-text" style={{ fontSize: '0.9rem', color: '#666' }}>
          <strong>Ingredientes:</strong>
        </p>
        <ul style={{ fontSize: '0.85rem', color: '#888', paddingLeft: '1.2rem' }}>
          {ingredients.map((ingredient, index) => (
            <li key={index}>🍕 {ingredient}</li>
          ))}
        </ul>
        <hr />
        <p className="text-center" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          Precio: ${formatPrice(price)}
        </p>
        <div className="d-flex justify-content-between gap-2">
          <button className="btn btn-outline-dark flex-fill">
            Ver Más 👀
          </button>
          <button className="btn btn-dark flex-fill">
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;