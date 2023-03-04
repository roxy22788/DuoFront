import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Cadastro from './pages/cadastro/Cadastro';
import Inicial from './pages/inicial/Inicial';
import Login from './pages/login/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicial />
  },
  {
    path: "/cadastro",
    element: <Cadastro />
  },
  {
    path: "/login",
    element: <Login />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);