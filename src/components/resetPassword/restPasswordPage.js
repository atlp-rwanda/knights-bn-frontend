import React from 'react';
import { connect } from 'react-redux';
import { authThunk } from '../../redux/thunk/index';
import ResetPassword from './ResetPasswordForm';

const ResetPasswordPage = ({ displayMessage, authThunk }) => (
  <div className="layout">
    <ResetPassword
      callApiThunk={authThunk}
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
