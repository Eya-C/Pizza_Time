import React from 'react';
import './acceuil.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faTruck, faPizzaSlice } from '@fortawesome/free-solid-svg-icons';

const LoginPage = ({ onLoginClick, onSignUpClick }) => {
  return (
    <div className="login-container">
      <div className="pizza-background">PIZZA TIME</div>

      <div className="background-circle top-left"></div>
      <div className="background-circle bottom-right"></div>

      <div className="login-box">
        <div className="additional-text">Savourez la meilleure pizza de la ville !</div>

        <div className="button-container">
          <button className="login-button" onClick={onLoginClick}>Se connecter</button>
          <button className="login-button" onClick={onSignUpClick}>Créer un compte</button>
        </div>
      </div>

      {/* Section des icônes */}
      <div className="icon-section">
        <div className="icon-box">
          <FontAwesomeIcon icon={faUtensils} className="icon" />
          <h3>ORDER YOUR FOOD</h3>
          <p>Quick and easy ordering for fresh pizza at your doorstep.</p>
        </div>
        <div className="icon-box">
          <FontAwesomeIcon icon={faTruck} className="icon" />
          <h3>DELIVERY OR PICK UP</h3>
          <p>Choose your preference, we'll make sure it's ready.</p>
        </div>
        <div className="icon-box">
          <FontAwesomeIcon icon={faPizzaSlice} className="icon" />
          <h3>DELICIOUS RECIPES</h3>
          <p>Made with the finest ingredients for an unforgettable taste.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

