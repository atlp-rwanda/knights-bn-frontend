import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { callApiThunk } from '../../redux/thunk/index';
import { checkOnchange, onServerMessage, onSuccessFullyChanged } from '../../util/eventListeners';
import ModifyPassword from './ModifyPasswordForm';

const ModifyPasswordContainer = ({
  location, displayMessage, history,
}) => (

  <div className="layout">
    <ModifyPassword
      callApiThunk={callApiThunk}
      location={location}
      history={history}
      checkOnchange={checkOnchange}
      isSuccess={onSuccessFullyChanged(displayMessage)}
      displayMessage={onServerMessage(displayMessage)}
    />
  </div>

);
const mapStateToProps = (state) => ({
  displayMessage: state.user.message,
});

export default withRouter(connect(mapStateToProps, { callApiThunk })(ModifyPasswordContainer));
