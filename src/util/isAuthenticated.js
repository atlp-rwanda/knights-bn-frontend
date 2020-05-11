import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export default (ComposedComponent) => {
  class Authenticate extends React.Component {
    UNSAFE_componentWillMount() {
      if (!this.props.isLoggedIn) {
        this.props.history.push('/login');
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }
  const mapStateToProps = (state) => ({
    isLoggedIn: state.AuthReducer.isAuthenticated,
  });
  return withRouter(connect(mapStateToProps)(Authenticate));
};
