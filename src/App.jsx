import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Cart from './components/Cart';
// import Register from './components/Register';
// import Login from './components/Login';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      {/* Componente Home con las 6 pizzas */}
      <Home />
      
      {/* Para ver el carrito, comenta <Home /> y descomenta <Cart /> */}
      {/* <Cart /> */}
      
      {/* <Register /> */}
      {/* <Login /> */}
      <Footer />
    </div>
  );
}

export default App;