import React from 'react';
import '../assets/styles/styles.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/images/logo@2x.png';
import Languages from './Languages';

const Nav = () => {
  const { t } = useTranslation();
  return (
    <div className="nav ">
      <Languages />
      <Link to="/">
        <h3 className="text-center pt-2 li">
          <img className="logo" src={logo} />
        </h3>
      </Link>
      <ul className="nav-link">
        <Link to="/login">
          <li className="li">{t('Login.1')}</li>
        </Link>
        <Link to="/signup">
          <li className="li">{t('Sign up.1')}</li>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
