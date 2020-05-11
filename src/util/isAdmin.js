import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export default (ComposedComponent) => {
  class Authenticate extends React.Component {
    UNSAFE_componentWillMount() {
      if (this.props.isLoggedIn !== 'superAdmin') {
        this.props.history.push('/home');
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }
  const mapStateToProps = (state) => ({
    isLoggedIn: state.AuthReducer.role,
  });
  return withRouter(connect(mapStateToProps)(Authenticate));
};
