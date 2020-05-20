import React, { Component } from 'react';
import { Form, Spinner } from 'react-bootstrap';
import '../assets/styles/containers/loginPage.scss';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import { useTranslation } from 'react-i18next';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import {
  validateLoginInput,
  loginUsersSuccess,
  handleError,
  setLoadingStatus,
} from '../redux/actions/index';
import TextBox from '../components/Textbox';
import Button from '../components/Button';
import Line from '../components/line';
import { callApiThunk as thunk } from '../redux/thunk/index';
import AlertComponent from '../components/Alert';
import SocialLogin from '../components/SocialLogin';
import 'react-universal-hooks';

dotenv.config();

export class Login extends Component {
  async handleClick(translate) {
    this.props.handleError('');
    const { validations: validatedFields } = this.props;
    const invalidFields = Object.keys(validatedFields).filter(
      (field) => validatedFields[field] === 'is-invalid',
    );
    const validatedFieldsToArray = Object.keys(validatedFields);
    if (validatedFieldsToArray.length === 2 && invalidFields.length === 0) {
      this.props.setLoadingStatus(true);
      await this.props.thunk(
        'post',
        '/auth/login',
        loginUsersSuccess,
        this.props.user,
      );
      this.props.setLoadingStatus(false);

      const { isLoggedIn, token } = this.props.userData;
      localStorage.setItem('user-token', token);

      if (isLoggedIn === false) return this.props.handleError('Incorrect email or password. Please try again.');
      const userRole = jwt.decode(token).role;
      const isSuperAdmin = (userRole === 'superAdmin');
      isLoggedIn && isSuperAdmin
        ? this.props.history.push('/admin')
        : this.props.history.push('/home');
    } else {
      const errorMsg = validatedFieldsToArray.length === 0
        ? translate('Please fill in the required fields.1')
        : this.props.validations.email === 'is-valid'
            && !this.props.validations.password
          ? translate('Please enter your password.1')
          : translate('Wrong email address.1');
      this.props.handleError(errorMsg);
    }
  }

  render() {
    const { t: translate } = useTranslation();
    const { validateInput, error, isLoading } = this.props;
    return (
      <div className="login-page loginContainer">
        <Spinner
          animation="border"
          variant="primary"
          className={isLoading ? 'spinner--position__center' : 'hide'}
        />
        <Form className="form">
          <h1>{translate('Sign in.1')}</h1>
          <AlertComponent isError={!!error} message={error} />
          <p>{translate('Login with social media.1')}</p>
          <SocialLogin
            googleAction={translate('Sign in with Google.1')}
            facebookAction={translate('Sign in with Facebook.1')}
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
            placeholder={translate('email.1')}
            id="email"
            name="email"
            onChange={validateInput}
            label="email"
            value={this.props.user.email}
          />
          <TextBox
            type="password"
            placeholder={translate('password.1')}
            id="password"
            name="password"
            onChange={validateInput}
            label="password"
            value={this.props.user.password}
          />
          <p>{this.props.token ? <Redirect to="home" /> : null}</p>
          <Button
            aria-label="login"
            onClick={() => this.handleClick(translate)}
            id="loginBtn"
            label={translate('Login.1')}
          />
          <a id="forgotPassword" href="/forgetpassword">
            <p>{translate('Forgot Password.1')}</p>
          </a>
        </Form>
      </div>
    );
  }
}
export const mapStateToProps = (state) => ({
  token: state.user.token,
  error: state.errorHandler.error,
  validations: state.eventHandler.validations.login,
  user: state.eventHandler.user,
  userData: state.user.data,
  isLoading: state.eventHandler.isLoading,
});

const mapDispatchToProps = {
  validateInput: validateLoginInput,
  thunk,
  handleError,
  setLoadingStatus,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
