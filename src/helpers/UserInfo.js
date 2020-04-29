import React, { Component } from 'react';
import queryString from 'query-string';

export default class UserInfo extends Component {
  componentDidMount() {
    try {
      const userInfo = queryString.parse(this.props.location.search);
      const { data } = userInfo;
      const userData = JSON.parse(data);
      const { user, token } = userData;
      localStorage.setItem('user-token', token);
      localStorage.setItem('user-info', JSON.stringify(user));
      window.location.href = '/home';
    } catch (error) {
      window.location.href = '/lost';
    }
  }

  render() {
    return (
      <div>
        <h1>Request loading error</h1>
      </div>
    );
  }
}
