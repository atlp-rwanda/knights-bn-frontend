import React from 'react';
import '../assets/styles/styles.scss';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo@2x.png';

const Nav = () => (
  <div className="nav ">
    <Link to="/">
      <h3 className="text-center pt-2 li">
        <img className="logo" src={logo} />
      </h3>
    </Link>
    <ul className="nav-link">
      <Link to="/login">
        <li className="li">Login</li>
      </Link>
      <Link to="/signup">
        <li className="li">Sign up</li>
      </Link>
    </ul>
  </div>
);

export default Nav;
