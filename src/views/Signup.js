import React, { Component } from 'react';
import { Form, Spinner } from 'react-bootstrap';
import '../assets/styles/containers/loginPage.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import queryString from 'querystring';
import { useTranslation } from 'react-i18next';
import {
  validateSignupInput,
  loginUsersSuccess,
  handleError,
  setLoadingStatus,
  handleSuccess,
  resetInputFields,
  validateForm,
  clearErrorMsg,
  clearSuccessMsg,
} from '../redux/actions/index';
import TextBox from '../components/Textbox';
import Button from '../components/Button';
import { callApiThunk as thunk } from '../redux/thunk/index';
import AlertComponent from '../components/Alert';
import SocialLogin from '../components/SocialLogin';
import NavAuth from '../components/NavAuth';
import LineDivider from '../components/lineDivider';
import Footer from '../components/Footer';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.renderingCounter;
  }

  componentDidMount() {
    this.renderingCounter = 0;
  }

  async handleClick(translate) {
    this.renderingCounter += 1;
    this.props.handleError('');
    this.props.handleSuccess('');
    this.props.validateForm(false);
    const { validations: validatedFields } = this.props;
    const invalidFields = Object.keys(validatedFields).filter(
      (field) => validatedFields[field] === 'is-invalid',
    );
    const validatedFieldsToArray = Object.keys(validatedFields);

    if (validatedFieldsToArray.length === 6 && invalidFields.length === 0) {
      this.props.setLoadingStatus(true);
      await this.props.thunk(
        'post',
        '/auth/signup',
        loginUsersSuccess,
        this.props.user,
      );
      this.props.setLoadingStatus(false);
      this.props.userData.error
        ? this.props.handleError(translate(`${this.props.userData.error}.1`))
        : this.props.handleSuccess(
          translate(
            'Please check the email sent to your inbox to finish registration.1',
          ),
        );
      this.props.resetInputFields();
      this.props.validateForm(false);
    } else if (invalidFields.length === 6) {
      this.props.handleError(
        `${translate('Please fill in the required fields.1')}`,
      );
    } else {
      this.props.validateForm(true);
    }
  }

  render() {
    const { t: translate } = useTranslation();
    if (this.renderingCounter > 0) this.handleClick(translate);
    const {
      validateInput,
      error,
      isLoading,
      validations,
      user,
      success,
      isValidated,
    } = this.props;
    const returnedEmailVerificationQueryString = queryString.decode(
      this.props.location.search,
    );
    if (
      returnedEmailVerificationQueryString['?message']
      === 'Email already exists.'
    ) this.props.handleError('Email already exists.');
    if (returnedEmailVerificationQueryString['?token']) {
      const token = returnedEmailVerificationQueryString['?token'];
      localStorage.setItem('user-token', token);
      window.location.href = '/home';
    }
    return (
      <div>
        <NavAuth />
        <div className="signup-page loginContainer">
          <Spinner
            animation="border"
            variant="primary"
            className={isLoading ? 'spinner--position__center' : 'hide'}
          />
          <Form>
            <h1>{translate('Sign up.1')}</h1>
            <AlertComponent isError={!!error} message={error} />
            <AlertComponent isSuccess={!!success} message={success} />
            <p>{translate('Sign up with social media.1')}</p>
            <SocialLogin
              googleAction={translate('Sign up with Google.1')}
              facebookAction={translate('Sign up with Facebook.1')}
            />
            <LineDivider />
            <div className="flex--items">
              <TextBox
                type="text"
                placeholder={translate('first name.1')}
                id="firstName"
                name="firstName"
                onChange={validateInput}
                label="firstName"
                value={user.firstName || ''}
                isValid={isValidated ? validations.firstName : ''}
                errorMsg={translate('first name can\'t be empty.1')}
              />
              <TextBox
                type="text"
                placeholder={translate('last name.1')}
                id="lastName"
                name="lastName"
                onChange={validateInput}
                label="lastName"
                value={user.lastName || ''}
                isValid={isValidated ? validations.lastName : ''}
                errorMsg={translate('last name can\'t be empty.1')}
              />
            </div>
            <TextBox
              type="email"
              placeholder={translate('email.1')}
              id="email"
              name="email"
              onChange={validateInput}
              label="email"
              value={user.email || ''}
              isValid={isValidated ? validations.email : ''}
              errorMsg={translate('invalid email.1')}
            />
            <div className="flex--items">
              <TextBox
                type="password"
                placeholder={translate('password.1')}
                id="password"
                name="password"
                onChange={validateInput}
                label="password"
                value={user.password || ''}
                isValid={isValidated ? validations.password : ''}
                errorMsg={translate('invalid-email error message.1')}
              />
              <TextBox
                type="password"
                placeholder={translate('confirm password.1')}
                id="confirmPassword"
                name="confirmPassword"
                onChange={validateInput}
                label="confirmPassword"
                value={user.confirmPassword || ''}
                isValid={isValidated ? validations.confirmPassword : ''}
                errorMsg={translate(
                  'password confirmation has to match password.1',
                )}
              />
            </div>
            <div className="position--center">
              <Form.Check
                type="radio"
                name="gender"
                id="male"
                value="male"
                label={translate('Male.1')}
                onChange={(event) => validateInput(event.target)}
                inline
              />
              <Form.Check
                type="radio"
                name="gender"
                id="female"
                value="female"
                label={translate('Female.1')}
                onChange={(event) => validateInput(event.target)}
                inline
              />
            </div>
            <Button
              aria-label="signup"
              label={translate('Sign up.2')}
              id="loginBtn"
              className="btn"
              onClick={() => this.handleClick(translate)}
            />
            <a id="forgotPassword" href="/login">
              <p>{translate('Already have an account? Login here.1')}</p>
            </a>
          </Form>
        </div>
        <Footer className="auth__footer" />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.user.token,
  error: state.errorHandler.error,
  validations: state.eventHandler.validations.signup,
  user: state.eventHandler.user,
  userData: state.user.data,
  isLoading: state.eventHandler.isLoading,
  isValidated: state.eventHandler.isValidated,
  success: state.successHandler.message,
});

const mapDispatchToProps = {
  validateInput: validateSignupInput,
  thunk,
  handleError,
  setLoadingStatus,
  handleSuccess,
  resetInputFields,
  validateForm,
  clearErrorMsg,
  clearSuccessMsg,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signup));
