import React from 'react';
import '../assets/styles/components/navigationlinks.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import Languages from './Languages';
import logo from '../assets/images/logo@2x.png';
import { logout } from '../redux/thunk/index';

const Nav = ({ isLoggedIn, logout, role }) => {
  const { t } = useTranslation();
  const notAuth = (
    <ul>
      <li><Link to="/login" className="nav-link">{t('Login.1')}</Link></li>
      <li><Link to="/signup" className="nav-link">{t('Sign up.1')}</Link></li>
    </ul>
  );
  const isAuth = (
    <ul>
      <li><Link to="/" id="logout-link" onClick={logout} className="nav-link">logout</Link></li>
      <li><Link to="/admin" id="users-link" className="nav-link">{(role === 'superAdmin') ? 'AllUsers' : ''}</Link></li>
      <li><Link to="/profile" id="logout-link" className="nav-link">Profile</Link></li>
      <Languages />
    </ul>
  );
  return (
    <div className="main-navigation">
      <div className="nav-menu">
        <div className="web-logo">
          <Link to="/" className="nav-link-img">
            <img className="logo-img" src={logo} />
          </Link>
        </div>
        <div className="right-menu">
          <Languages />
          {isLoggedIn ? isAuth : notAuth}

        </div>

      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.AuthReducer.isAuthenticated,
  role: state.AuthReducer.role,
});

export default connect(mapStateToProps, { logout })(Nav);
