import React from 'react';
import { connect } from 'react-redux';
import ResetPassword from './ResetPasswordForm';
import { callApiThunk } from '../../redux/thunk/index';
import returnMessage from '../../utils/returnMessage';
import { checkOnchange, checkOnsubmit } from '../../utils/helperFunctions';

const ResetPasswordPage = ({ callApiThunk, displayMessage }) => {

  return (

    <div className="layout">
      <ResetPassword checkOnchange={checkOnchange} checkOnsubmit={checkOnsubmit} callApiThunk={callApiThunk} displayMessage={returnMessage(displayMessage)} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  displayMessage: state.message,

});
export default connect(mapStateToProps, { callApiThunk })(ResetPasswordPage);
