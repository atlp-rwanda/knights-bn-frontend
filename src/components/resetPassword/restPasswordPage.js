import React from 'react';
import { connect } from 'react-redux';
import { callApiThunk } from '../../redux/thunk/index';
import { checkOnchange, onServerMessage } from '../../util/eventListeners';
import ResetPassword from './ResetPasswordForm';

const ResetPasswordPage = ({ displayMessage, callApiThunk }) => (
  <div className="layout">
    <ResetPassword
      checkOnchange={checkOnchange}
      callApiThunk={callApiThunk}
      displayMessage={onServerMessage(displayMessage)}
    />
  </div>
);
const mapStateToProps = (state) => ({
  displayMessage: state.user.message,
});
export default connect(mapStateToProps, { callApiThunk })(ResetPasswordPage);
