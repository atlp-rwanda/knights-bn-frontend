import React from 'react';
import '../assets/styles/nav.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import logo from '../assets/images/logo@2x.png';
import Languages from './Languages';
import AddProfile from './AddProfile';

const profileImage = 'https://via.placeholder.com/150';
dotenv.config();

const NavAuth = () => {
  let token;
  const tokenForTesting = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ0cmF2ZWxhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoidHJhdmVsYWRtaW4iLCJmaXJzdE5hbWUiOiJ0cmF2ZWxlciIsImxhc3ROYW1lIjoiSGltYmFyYSIsImlhdCI6MTU5MDU3NTM0N30.ktaH67UBQyE1V3g8LlJATchsA2jrWF8DyxK5cLarP4s';
  process.env.NODE_ENV === 'test'
    ? (token = tokenForTesting)
    : (token = localStorage.getItem('user-token'));
  const { firstName } = jwt.decode(token);
  const { t } = useTranslation();
  return (
    <div className="nav__background">
      <Languages />
      <Link to="/">
        <img className="logo" src={logo} />
      </Link>
      <div className="nav-auth">
        <ul>
          <li>
            <Link to="/viewaccomodation">{t('Accommodations.1')}</Link>
          </li>
          <li>
            <Link to="/accommodation">{t('Add Accommodation.1')}</Link>
          </li>
          <AddProfile firstName={firstName} profileImage={profileImage} translate={t} />
        </ul>
      </div>
    </div>
  );
};

export default NavAuth;
