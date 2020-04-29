import React from 'react';
import '../assets/styles/styles.css';

import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="nav ">
    <Link to="/">
      <h3 className="text-center pt-2 li">Logo</h3>
    </Link>
    <ul className="nav-link">
      <Link to="/login">
        <li className="li">Login</li>
      </Link>
      <div>
        <Link to="/">
          <li className="li">SignUp</li>
        </Link>
      </div>
    </ul>
  </div>
);

export default Nav;
