import React, { useState, useEffect, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import '../assets/styles/nav.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import jwt from 'jsonwebtoken';
import { Dropdown } from 'react-bootstrap';
import env from 'dotenv';
import Proptypes from 'prop-types';
import { callApiThunk as thunk } from '../redux/thunk/index';
import logo from '../assets/images/logo@2x.png';
import Languages from './Languages';
import notificationIcon from '../assets/images/notification.svg';
import AddProfile from './AddProfile';
import { getNotifications, markAllAsRead } from '../redux/actions/index';
import convertDate from '../util/convertDate';

env.config();
const Nav = ({ thunk, userNotifications }) => {
  const { tokenForTesting } = process.env;
  let token;
  process.env.NODE_ENV === 'test'
    ? (token = tokenForTesting)
    : (token = localStorage.getItem('user-token'));
  const { firstName, profileImage } = jwt.decode(token);
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [notification, setNotification] = useState(0);
  useLayoutEffect(() => {
    thunk('get', '/notifications', getNotifications);
  }, []);
  useEffect(() => {
    setData(userNotifications || []);
  }, [userNotifications]);
  useEffect(() => {
    setNotification(data.length <= 0 ? 0 : data.length);
  }, [data]);
  const markAsRead = () => {
    thunk('patch', '/notifications', markAllAsRead);
    setData([]);
  };
  return (
    <div className="nav__background">
      <Languages />
      <Link to="/">
        <img className="logo" src={logo} />
      </Link>
      <div className="nav-auth">
        <ul>
          <li>
            <Link to="/Home">{t('Home.1')}</Link>
          </li>
          <li>
            <Link to="/pending">{t('Requests.1')}</Link>
          </li>
          <li>
            <Link to="/Bookings">{t('Bookings.1')}</Link>
          </li>
          <li>
            <Link to="/stats">{t('Stats.1')}</Link>
          </li>
          <li className="notification">
            <Dropdown className="dropdown-2" onClick={() => setNotification(0)}>
              <Dropdown.Toggle variant="" id="dropdown-basic" />
              <Dropdown.Menu className="notiftnBody">
                {data.map((message) => (
                  <Dropdown.Item href="" className="notMessage">
                    {message.message}
                    <br />
                    on
                    {' '}
                    {convertDate(message.createdAt)}
                  </Dropdown.Item>
                ))}
                <footer className="text-center pt-3 notificationFooter">
                  <a onClick={markAsRead}>
                    <span>
                      {data.length <= 0
                        ? 'no new notification'
                        : 'Mark all as read'}
                    </span>
                  </a>
                </footer>
              </Dropdown.Menu>
            </Dropdown>
            <img src={notificationIcon} className="notification__icon" />
            <h6 className="notification__message">
              {notification <= 0 ? '' : notification}
            </h6>
          </li>
          <AddProfile
            firstName={firstName}
            profileImage={profileImage}
            translate={t}
          />
        </ul>
      </div>
    </div>
  );
};

export const mapStateToProps = (state) => ({
  userNotifications: state.user.notification,
  markedRead: state.user.message,
});
Nav.propTypes = {
  thunk: Proptypes.func.isRequired,
  userNotifications: Proptypes.object,
};
Nav.defaultProps = {
  userNotifications: [],
};
const mapDispatchToProps = { thunk };
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));
