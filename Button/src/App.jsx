import React from 'react';
import './App.css' // importacion archivo css 

const Button = () => {
  return (
    <div className="button-container">
      <button className="animated-button">
        <span className="front-face">Click me!</span>
        <span className="back-face">Click me!</span>
      </button>
    </div>
  );
}

export default Button;



