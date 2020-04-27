import React from 'react';
import '../assets/styles/components/navigationlinks.scss';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="nav">
    <div className="logo">
      <Link to="/" className="nav-link">Logo</Link>
    </div>
    <ul className="right-menu">
      <li><Link to="/login" className="nav-link">Login</Link></li>
      <li><Link to="/signup" className="nav-link">sign up</Link></li>
      <li><Link to="/kiny" className="nav-link">Kinya</Link></li>
      <li><Link to="/en" className="nav-link">Eng</Link></li>
    </ul>
  </div>
);
export default Nav;
