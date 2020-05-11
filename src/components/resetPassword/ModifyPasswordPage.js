import React from 'react';
import { connect } from 'react-redux';
import { resetPassword } from '../../redux/thunk/index';
import ModifyPassword from './ModifyPasswordForm';

const ModifyPasswordContainer = ({
  resetPassword, displayMessage,
}) => (
  <div className="layout">
    <ModifyPassword
      resetPassword={resetPassword}
      displayMessage={displayMessage.message}
      errorMessage={displayMessage.error}
      isLoading={displayMessage.loading}
      isAuthenticated={displayMessage.isAuthenticated}
    />
  </div>

);
const mapStateToProps = (state) => ({
  displayMessage: state.AuthReducer,
});

export default connect(mapStateToProps, { resetPassword })(ModifyPasswordContainer);
