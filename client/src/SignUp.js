import React from 'react';
import './login.css';

function SignUp() {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="auth-title">Créer un compte</h1>
        <form>
          <label>Nom d'utilisateur</label>
          <input type="text" placeholder="Entrez votre nom" />
          <label>Email</label>
          <input type="email" placeholder="Entrez votre email" />
          <label>Mot de passe</label>
          <input type="password" placeholder="Entrez un mot de passe" />
          <button type="submit" className="auth-button">S'inscrire</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
