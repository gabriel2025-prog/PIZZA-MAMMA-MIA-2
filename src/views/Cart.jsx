import React, { useState } from 'react';
import { pizzaCart as initialCart } from '../pizzas.js';
import { formatPrice } from '../utils/formatPrice';

const Cart = () => {
  const [cart, setCart] = useState(initialCart);

  const increaseQuantity = (id) => {
    setCart(cart.map(pizza => 
      pizza.id === id 
        ? { ...pizza, count: pizza.count + 1 }
        : pizza
    ));
  };

  const decreaseQuantity = (id) => {
    setCart(cart.map(pizza => 
      pizza.id === id 
        ? { ...pizza, count: pizza.count - 1 }
        : pizza
    ).filter(pizza => pizza.count > 0));
  };

  const total = cart.reduce((sum, pizza) => sum + (pizza.price * pizza.count), 0);

  return (
    <div className="container my-4">
      <h2 className="mb-4">Detalles del pedido:</h2>
      
      {cart.length === 0 ? (
        <div className="alert alert-info text-center">
          El carrito está vacío
        </div>
      ) : (
        <>
          {cart.map((pizza) => (
            <div key={pizza.id} className="card mb-3">
              <div className="row g-0 align-items-center">
                <div className="col-md-2">
                  <img 
                    src={pizza.img} 
                    className="img-fluid rounded-start" 
                    alt={pizza.name}
                    style={{ height: '100px', objectFit: 'cover', width: '100%' }}
                  />
                </div>
                <div className="col-md-10">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h5 className="card-title text-capitalize mb-1">Pizza {pizza.name}</h5>
                        <p className="card-text mb-0">
                          <span className="fw-bold">Precio: ${formatPrice(pizza.price)}</span>
                        </p>
                      </div>
                      <div className="d-flex align-items-center gap-3">
                        <button 
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => decreaseQuantity(pizza.id)}
                        >
                          -
                        </button>
                        <span className="fw-bold fs-5">{pizza.count}</span>
                        <button 
                          className="btn btn-outline-primary btn-sm"
                          onClick={() => increaseQuantity(pizza.id)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <div className="card mt-4 bg-dark text-white">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="mb-0">Total: ${formatPrice(total)}</h4>
                <button className="btn btn-success btn-lg">
                  Ir a Pagar 💳
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;