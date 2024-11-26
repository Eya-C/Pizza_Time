import React from 'react';
import './login.css';

function Login() {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="auth-title">Login</h1>
        <form>
          <label>Email</label>
          <input type="email" placeholder="Entrez votre email" />
          <label>Mot de passe</label>
          <input type="password" placeholder="Entrez votre mot de passe" />
          <button type="submit" className="auth-button">Se connecter</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
