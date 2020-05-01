import React, { Component } from 'react';
import { Form, Spinner } from 'react-bootstrap';
import '../assets/styles/containers/loginPage.scss';
import { connect } from 'react-redux';
import {
  fetchUsers,
  validateInput,
  loginUsersSuccess,
  handleError,
  setLoadingStatus,
} from '../redux/actions/index';
import { Redirect } from 'react-router-dom';
import TextBox from '../components/Textbox';
import Button from '../components/Button';
import Line from '../components/line';
import { thunk } from '../redux/thunk/index';
import { withRouter } from 'react-router';
import AlertComponent from '../components/Alert';
import SocialLogin from '../components/SocialLogin';

export class Login extends Component {
  state = {
    data: { email: '', password: '' },
    error: ' ',
    loggedIn: false,
  };

  login = async (e) => {
    e.preventDefault();
    this.props.handleError('');
    const { validations: validatedFields } = this.props;
    const invalidFields = Object.keys(validatedFields).filter(
      (field) => validatedFields[field] === 'is-invalid'
    );
    let validatedFieldsToArray = Object.keys(validatedFields);
    if (validatedFieldsToArray.length > 1 && invalidFields.length === 0) {
      this.props.setLoadingStatus(true);
      await this.props.thunk(
        'post',
        '/auth/login',
        loginUsersSuccess,
        this.props.user
      );
      this.props.setLoadingStatus(false);

      const { isLoggedIn } = this.props.userData;
      isLoggedIn
        ? this.props.history.push('/home')
        : this.props.handleError(
            'Incorrect email or password. Please try again.'
          );
    } else {
      const errorMsg =
        validatedFieldsToArray.length === 0
          ? 'Please fill in the required fields.'
          : this.props.validations.email === 'is-valid' &&
            !this.props.validations.password
          ? 'Please enter your password.'
          : 'Wrong email address.';
      this.props.handleError(errorMsg);
    }
  };

  render() {
    const { validateInput, error, isLoading } = this.props;
    return (
      <div className="login-page loginContainer">
        <Spinner
          animation="border"
          variant="primary"
          className={isLoading ? 'spinner--position__center' : 'hide'}
        />
        <Form className="form">
          <h1>Sign in</h1>
          <AlertComponent isError={error ? true : false} errorMsg={error} />
          <p>Login with social media</p>
          <SocialLogin
            googleAction="Sign in with Google"
            facebookAction="Sign in with Facebook"
          />
          <div id="or">
            <Line className="Line" />
            <div id="or_">
              <span>or</span>
            </div>
            <Line className="Line_" />
          </div>
          <TextBox
            type="email"
            placeholder="email"
            id="email"
            name="email"
            onChange={validateInput}
            label="email"
            value={this.props.user.email}
          />
          <TextBox
            type="password"
            placeholder="password"
            id="password"
            name="password"
            onChange={validateInput}
            label="password"
            value={this.props.user.password}
          />
          <p>{this.props.token ? <Redirect to="home" /> : null}</p>
          <Button
            aria-label="login"
            onClick={(e) => this.login(e)}
            id="loginBtn"
            label="Login"
          />
          <a id="forgotPassword" href="#">
            <p>Forgot Password?</p>
          </a>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.user.token,
    error: state.errorHandler.error,
    validations: state.eventHandler.validations,
    user: state.eventHandler.user,
    userData: state.user.data,
    isLoading: state.eventHandler.isLoading,
  };
};

const mapDispatchToProps = {
  fetchUsers,
  validateInput,
  thunk,
  handleError,
  setLoadingStatus,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
