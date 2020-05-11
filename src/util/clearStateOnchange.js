import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { clearMessage } from '../redux/thunk/index';

export default (ComposedComponent) => {
  class Authenticate extends React.Component {
    componentDidMount() {
      this._isMounted = true;

      this.props.clearMessage();
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }
  return withRouter(connect(null, { clearMessage })(Authenticate));
};
