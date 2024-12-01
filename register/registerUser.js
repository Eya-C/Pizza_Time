import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/users/register', {
        username,
        password,
      });

      alert('Utilisateur enregistré avec succès!');
      setUsername('');
      setPassword('');
    } catch (err) {
      setError(err.response.data.message || 'Erreur lors de l\'enregistrement');
    }
  };

  return (
    <div>
      <h2>Créer un compte</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom d'utilisateur</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Mot de passe</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div>{error}</div>}
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default Register;
