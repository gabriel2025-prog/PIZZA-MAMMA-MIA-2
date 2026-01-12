import React from 'react';
import { pizzas } from '../pizzas';
import { formatPrice } from '../utils/formatPrice';

const Pizza = () => {
  // Por ahora mostramos la pizza con id P001
  const pizza = pizzas.find(p => p.id === 'P001');

  if (!pizza) {
    return <div className="container my-4">Pizza no encontrada</div>;
  }

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-6">
          <img 
            src={pizza.img} 
            alt={pizza.name} 
            className="img-fluid rounded"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div className="col-md-6">
          <h2 className="text-capitalize mb-3">Pizza {pizza.name}</h2>
          <p className="text-muted">{pizza.desc}</p>
          
          <h5 className="mt-4">Ingredientes:</h5>
          <ul>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index}>🍕 {ingredient}</li>
            ))}
          </ul>
          
          <hr />
          
          <div className="d-flex justify-content-between align-items-center">
            <h3>Precio: ${formatPrice(pizza.price)}</h3>
            <button className="btn btn-dark btn-lg">
              Añadir al carrito 🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;