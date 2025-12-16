import React from 'react';

const Header = () => {
  const headerStyle = {
    backgroundImage: 'url(https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    position: 'relative'
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 1,
    padding: '2rem'
  };

  return (
    <div style={headerStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          ¡Pizzería Mamma Mia!
        </h1>
        <p style={{ fontSize: '1.2rem' }}>
          ¡Tenemos las mejores pizzas que podrás encontrar!
        </p>
      </div>
    </div>
  );
};

export default Header;