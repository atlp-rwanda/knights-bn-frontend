import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import facebookIcon from '../../assets/images/facebook.png';
import googleIcon from '../../assets/images/google.png';
import { setCurentUser } from '../../redux/actions/actions';
import { validateInput } from '../../util/loginValidations';
import { InputElement, ButtonElememnt, SocialLogin } from '../../util/customInput/customInputs';

const LoginForm = ({
  logIn, displayMessage,
  history, isLoading,
  isAuthenticated,
  errorMessage,
}) => {
  const initialState = {
    email: '',
    password: '',
    emailEror: '',
    passwordError: '',
  };
  const [{
    email, password, emailEror, passwordError,
  }, setLogin] = useState({ ...initialState });
  const { t: translate } = useTranslation();
  const inputChange = (e) => {
    const {
      name, value,
    } = e.target;
    setLogin((prevState) => ({ ...prevState, [name]: value }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const body = {
      email,
      password,
    };
    if (validateInput(email, password, setLogin, translate)) {
      await logIn('post', '/auth/login', setCurentUser, body);
      setLogin(() => ({ ...initialState }));
    }
  };
  useEffect(() => {
    if (isAuthenticated) {
      history.push('/home');
    }
  }, [isAuthenticated]);
  return (

    <form className="loginform" data-testid="login-form">
      <div className="form-title">{translate('Sign in.1')}</div>
      {displayMessage ? <span className="display-message">{displayMessage}</span>
        : <span className="display-message-err">{errorMessage}</span>}
      {isLoading ? <Spinner animation="border" variant="primary" /> : ''}
      <div className="scocial-title">{translate('Login with social media.1')}</div>
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
      <div className="divider">Or</div>
      <InputElement
        type="email"
        className="input"
        name="email"
        id="login-email"
        testid="login-email"
        value={email}
        palceholder={translate('email.1')}
        onchenge={inputChange}
        error={emailEror}

      />

      <InputElement
        type="password"
        name="password"
        id="login-password"
        testid="login-password"
        className="input"
        value={password}
        palceholder={translate('password.1')}
        onchenge={inputChange}
        error={passwordError}
      />
      <div className="forgot-password">
        <a href="/forgetpassword">
          {translate('Forgot Password.1')}
        </a>
      </div>
      <ButtonElememnt
        id="submitBtn"
        testid="submitBtn"
        onclick={onSubmit}
        value={translate('Login.1')}
      />
      <div className="sign-up-link">
        <a href="/signup">{translate('no-account.1')}</a>
      </div>
    </form>
  );
};

export default withRouter(LoginForm);
