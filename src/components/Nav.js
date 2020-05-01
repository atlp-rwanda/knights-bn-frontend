import React from 'react';
import '../assets/styles/styles.scss';
import { Link, BrowserRouter } from 'react-router-dom';
import logo from '../assets/images/logo@2x.png';

const Nav = () => (
  <div className="nav ">
    <BrowserRouter>
      <Link to="/">
        <h3 className="text-center pt-2 li">
          <img className="logo" src={logo} />
        </h3>
      </Link>
      <ul className="nav-link">
        <Link to="/login">
          <li className="li">Login</li>
        </Link>
        <Link to="/">
          <li className="li">SignUp</li>
        </Link>
      </ul>
    </BrowserRouter>
  </div>
);

export default Nav;
