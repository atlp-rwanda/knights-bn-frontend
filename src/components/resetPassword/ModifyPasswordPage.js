import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ModifyPassword from './ModifyPasswordForm';
import { callApiThunk } from '../../redux/thunk/index';
import returnMessage from '../../utils/returnMessage';
import { checkOnchange, checkOnsubmit } from '../../utils/helperFunctions';

const ModifyPasswordContainer = ({ callApiThunk, displayMessage, location }) => (

  <div className="layout">
    <ModifyPassword
      callApiThunk={callApiThunk}
      location={location}
      checkOnchange={checkOnchange}
      checkOnsubmit={checkOnsubmit}
      displayMessage={returnMessage(displayMessage)}
    />
  </div>

);
const mapStateToProps = (state) => ({
  displayMessage: state.message,
});

export default withRouter(connect(mapStateToProps, { callApiThunk })(ModifyPasswordContainer));
