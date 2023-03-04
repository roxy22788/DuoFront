import React from 'react';
import ReactDOM from 'react-dom/client';
import Cadastro from './pages/cadastro/Cadastro';
import Inicial from './pages/inicial/Inicial';
import Login from './pages/login/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);