import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import Register from './views/Register';
import Login from './views/Login';
import Cart from './views/Cart';
import Pizza from './views/Pizza';
import Profile from './views/Profile';
import NotFound from './views/NotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route> 
          {/* <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/p001" element={<Pizza />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
