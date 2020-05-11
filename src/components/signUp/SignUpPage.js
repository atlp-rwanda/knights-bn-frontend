import React from 'react';
import { connect } from 'react-redux';
import { authThunk } from '../../redux/thunk/index';
import '../../assets/styles/containers/signUp.scss';
import SignUpForm from './SignUpForm';

const ResetPasswordPage = ({ authThunk, displayMessage }) => (
  <div className="layout">
    <SignUpForm
      signUp={authThunk}
      displayMessage={displayMessage.message}
      isLoading={displayMessage.loading}
      errorMessage={displayMessage.error}
    />
  </div>
);
const mapStateToProps = (state) => ({
  displayMessage: state.AuthReducer,
});
export default connect(mapStateToProps, { authThunk })(ResetPasswordPage);
