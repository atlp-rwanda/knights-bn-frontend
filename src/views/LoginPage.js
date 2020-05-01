import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Login from './Login';

const LoginPage = () => (
  <div className="loginContainer">
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  </div>
);

export default LoginPage;
