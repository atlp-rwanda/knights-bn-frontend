import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import facebookIcon from '../../assets/images/facebook.png';
import googleIcon from '../../assets/images/google.png';
import { userSignUp } from '../../redux/actions/actions';
import { validateSignUp } from '../../util/loginValidations';
import { regexPatterns } from '../../util/regExPatterns';
import {
  InputElement, ButtonElememnt, SocialLogin, SelectInput,
} from '../../util/customInput/customInputs';

const SignUpForm = ({
  signUp, displayMessage,
  isLoading, errorMessage,
}) => {
  const { t: translate } = useTranslation();
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    confirmError: '',
    lastNameError: '',
    firstNameError: '',
    emailError: '',
    passwordError: '',
    gender: {
      male: '',
      female: '',
    },
    genderError: '',
  };
  const [formData, setSignUp] = useState({ ...initialState });


  const inputChange = (e) => {
    const {
      name, value,
    } = e.target;
    setSignUp((prevState) => ({
      ...prevState,
      [name]: value,
      ...formData.gender[value],
      confirmError: '',
      lastNameError: '',
      firstNameError: '',
      emailError: '',
      passwordError: '',
      genderError: '',
    }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const body = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      gender: formData.gender,
    };
    if (validateSignUp(formData, setSignUp, regexPatterns, translate)) {
      await signUp('post', '/auth/signup', userSignUp, body);
      setSignUp(() => ({
        ...initialState,
        gender: formData.gender,
      }));
    }
  };

  return (

    <form className="signup-form">
      <div className="form-header">
        <span className="form-title">{translate('Sign up.1')}</span>
        {displayMessage ? <span className="display-message">{displayMessage}</span>
          : <span className="display-message-err">{errorMessage}</span>}
        {isLoading ? <div className="spinner-border text-primary" /> : ''}
        <div className="scocial-title">{translate('Login with social media.1')}</div>
      </div>
      <div className="social-media-links">
        <SocialLogin
          text={translate('Sign in with Google.1')}
          icon={googleIcon}
          className="google-btn"
          imgClass="google"
          href="https://knights-bn-backnd.herokuapp.com/api/v1/auth/login/google"
        />
        <SocialLogin
          text={translate('Sign in with Facebook.1')}
          className="facebook-btn"
          imgClass="fecebook"
          icon={facebookIcon}
          href="https://knights-bn-backnd.herokuapp.com/api/v1/auth/login/facebook"
        />

      </div>
      <div className="divider">Or</div>
      <InputElement
        type="text"
        name="firstName"
        className="input"
        id="sign-up-fn"
        testid="sign-up-fn"
        value={formData.firstName}
        palceholder={translate('first name.1')}
        onchenge={inputChange}
        error={formData.firstNameError}
      />
      <InputElement
        type="text"
        className="input"
        name="lastName"
        id="sign-up-ln"
        testid="sign-up-ln"
        value={formData.lastName}
        palceholder={translate('last name.1')}
        onchenge={inputChange}
        error={formData.lastNameError}
      />
      <InputElement
        type="email"
        className="input"
        name="email"
        id="sign-up-email"
        testid="sign-up-email"
        value={formData.email}
        palceholder={translate('email.1')}
        onchenge={inputChange}
        error={formData.emailError}
      />
      <InputElement
        type="password"
        className="input"
        name="password"
        id="sign-up-password"
        testid="sign-up-password"
        value={formData.password}
        palceholder={translate('password.1')}
        onchenge={inputChange}
        error={formData.passwordError}
      />
      <InputElement
        type="password"
        name="confirmPassword"
        className="input"
        id="password-confirm"
        testid="password-confirm"
        value={formData.confirmPassword}
        palceholder={translate('confirm password.1')}
        onchenge={inputChange}
        error={formData.confirmError}
      />
      <SelectInput
        male={formData.gender.male}
        female={formData.gender.male}
        error={formData.genderError}
        testid="select-id"
        onchenge={inputChange}
        className="select-el"
      />

      <ButtonElememnt
        id="submitBtn"
        testid="submitBtn"
        onclick={onSubmit}
        value={translate('Sign up.2')}
      />
      <div className="sign-in-link">
        <a href="/login">{translate('Already have an account? Login here.1')}</a>
      </div>
    </form>

  );
};

export default withRouter(SignUpForm);
