import React, { useState, useEffect } from 'react';
import '../../assets/styles/components/resetPasswordForm.scss';
import { useTranslation } from 'react-i18next';
import { Spinner } from 'react-bootstrap';
import { resetUserPassword } from '../../redux/actions/actions';
import { InputElement, ButtonElememnt } from '../../util/customInput/customInputs';
import { regexPatterns } from '../../util/regExPatterns';

const RestPasswordForm = ({
  callApiThunk, displayMessage,
  errorMessage, isLoading,
}) => {
  const { t: translate } = useTranslation();
  const initialState = {
    email: '',
    message: '',
    serverError: '',
    emailError: '',
  };

  const [{
    email, emailError, message, serverError,
  }, setEmail] = useState(initialState);
  const inputChange = (e) => {
    const { name, value } = e.target;
    setEmail((emailState) => ({
      ...emailState, [name]: value, emailError: '',
    }));
  };
  const isValid = () => {
    let invalidEmail = '';
    if (email === '') {
      invalidEmail = translate('email-required.1');
    } else if (!regexPatterns.email.test(email)) {
      invalidEmail = translate('Email must be a valid address.1');
    }
    if (invalidEmail) {
      setEmail((stateData) => ({
        ...stateData,
        emailError: invalidEmail,
        message: '',
        serverError: '',
      }));
      return false;
    }
    return true;
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const body = {
      email,
    };
    if (isValid()) {
      await callApiThunk('post', '/reset_pw/user', resetUserPassword, body);
      setEmail(() => ({ ...initialState }));
    }
  };
  useEffect(() => {
    if (displayMessage || errorMessage) {
      setEmail(() => ({
        ...initialState,
        serverError: errorMessage,
        message: displayMessage,
      }));
    }
  }, [displayMessage, errorMessage]);
  return (

    <form className="resetform" data-testid="reset-form">
      <span className="display-message">{message}</span>
      <span className="display-message-err">{serverError}</span>
      {isLoading ? <Spinner animation="border" variant="primary" /> : ''}
      <InputElement
        type="email"
        name="email"
        id="user-email"
        testid="user-email"
        value={email}
        palceholder={translate('Type your email.1')}
        onchenge={inputChange}
        className="input"
        error={emailError}

      />

      <ButtonElememnt
        id="submitBtn"
        onclick={onSubmit}
        value={translate('Submit.1')}
        testid="user-email-reset"
      />
    </form>

  );
};

export default RestPasswordForm;
