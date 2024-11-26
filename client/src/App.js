import React, { useState } from 'react';
import LoginPage from './acceuil';
import Login from './login';
import SignUp from './SignUp';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      {currentPage === 'home' && <LoginPage onLoginClick={() => handlePageChange('login')} onSignUpClick={() => handlePageChange('signup')} />}
      {currentPage === 'login' && <Login />}
      {currentPage === 'signup' && <SignUp />}
    </div>
  );
}

export default App;
