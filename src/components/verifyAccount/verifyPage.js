import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../../assets/styles/containers/login.scss';
import queryString from 'query-string';
import decodeJwt from 'jwt-decode';
import { withRouter } from 'react-router-dom';
import { verifyAccount } from '../../redux/actions/actions';
import { callApiThunk } from '../../redux/thunk/index';

const VerifyPage = ({ history, callApiThunk, location }) => {
  useEffect(() => {
    const { token } = queryString.parse(location.search);
    callApiThunk('get', `auth/verify/signup/${token}`, verifyAccount);
    if (!token) return history.push('/login');
    const { email, password } = decodeJwt(token);
    const data = {
      email,
      password,
    };
    setTimeout(() => {
      history.push('/verified', data);
    }, 2000);
  }, []);
  return null;
};
const mapStateToProps = (state) => ({
  test: state,
  displayMessage: state.AuthReducer,
});
export default withRouter(connect(mapStateToProps, { callApiThunk })(VerifyPage));
