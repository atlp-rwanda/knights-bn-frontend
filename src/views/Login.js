import React, { Component } from 'react';
import { Form, Image, Alert } from 'react-bootstrap';
import '../assets/styles/containers/loginPage.scss';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux/actions/index';
import { Redirect } from 'react-router-dom';
import Textbox from '../components/Textbox';
import Button from '../components/Button';
import Line from '../components/line';

// eslint-disable-next-line react/prefer-stateless-function
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { data: { email: '', password: '' } };
  }
  render() {
    return (
      <div className="login-page">
        <Form>
          <h1>Sign in</h1>
          <p>Login with so social media</p>
          <div className="Google-login-btn">
            Sign in with Google
          </div>
          <div className="Facebook-login-btn">Sign in with Facebook</div>
          <div id="or">
            <Line className="Line" />
            <div id="or_">
              <span>or</span>
            </div>
            <Line className="Line_" />
          </div>
          <Textbox
            type="email"
            placeholder="email"
            id="email"
            name="email"
            onChange={this.onChangeHandler}
          />
          <Textbox
            type="password"
            placeholder="password"
            id="password"
            name="password"
            onChange={this.onChangeHandler}
          />
          <p>{this.props.token ? <Redirect to="home" /> : null}</p>
          <p>{this.props.error}</p>
          <Button onClick={(e) => this.login(e)} id="loginBtn" label="Login" />
          <a id="forgotPassword" href="#">
            <p>Forgot Password?</p>
          </a>
        </Form>
      </div>
    );
  }
  onChangeHandler = (event) => {
    console.log(event);
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };
  login = (e) => {
    e.preventDefault();
    this.props.fetchUsers(this.state.data);
  };
}

const mapStateToProps = (state) => {
  return {
    token: state.user.token,
    error: state.user.message,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: (request) => dispatch(fetchUsers(request)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
