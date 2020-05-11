import React from 'react';
import { connect } from 'react-redux';
import { authThunk } from '../../redux/thunk/index';
import '../../assets/styles/containers/login.scss';
import LoginForm from './LoginForm';

const LoginPage = ({ displayMessage, authThunk }) => (
  <div className="layout">
    <LoginForm
      logIn={authThunk}
      displayMessage={displayMessage.message}
      isLoading={displayMessage.loading}
      errorMessage={displayMessage.error}
      isAuthenticated={displayMessage.isAuthenticated}
    />
  </div>
);
const mapStateToProps = (state) => ({
  displayMessage: state.AuthReducer,
});
export default connect(mapStateToProps, { authThunk })(LoginPage);
