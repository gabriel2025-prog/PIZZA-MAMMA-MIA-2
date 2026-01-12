import React from 'react';
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
import { pizzas } from '../pizzas';

const Home = () => {
  return (
    <div style={{ flex: 1 }}>
      <Header />
      <div className="container my-4">
        <div className="row g-4 justify-content-center">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;