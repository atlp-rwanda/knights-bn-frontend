import React from 'react';
import '../assets/styles/styles.scss';

import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="nav ">
    <Link to="/">
      <h3 className="text-center pt-2 li">
        <img className="logo" src={require('../assets/images/logo@2x.png')} />
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
  </div>
);

export default Nav;
