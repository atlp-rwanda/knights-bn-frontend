import React, { useState } from 'react';
import '../../assets/styles/components/resetPasswordForm.scss';
import { useTranslation } from 'react-i18next';
import { resetUserPassword } from '../../redux/actions/actions';
import { InputElement, ButtonElememnt } from './customInput/customInputs';

const RestPasswordForm = ({
  checkOnchange, callApiThunk, displayMessage,
}) => {
  const { t: translate } = useTranslation();
  const [{ email, message, isvalid }, setEmail] = useState({
    email: '',
    isvalid: '',
    message: '',
  });
  const validationMsg = translate('Email must be a valid address.1');
  const inputChange = (e) => {
    checkOnchange(e, validationMsg, setEmail);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const body = {
      email,
    };
    await callApiThunk('post', '/reset_pw/user', resetUserPassword, body);
    setEmail((prevEmail) => ({
      ...prevEmail,
      isvalid: '',
      message: '',
      email: '',

    }));
  };

  return (

    <form className="resetform" data-testid="reset-form">
      <span className="validation-message" id="validation-message">{(message === '') ? translate(`${displayMessage}.1`) : ''}</span>
      {isvalid ? <span className={isvalid} id="validate">{message}</span> : ''}
      <InputElement
        type="email"
        name="email"
        id="user-email"
        value={email}
        palceholder={translate('Type your email.1')}
        onchenge={inputChange}

      />

      <ButtonElememnt
        id="submitBtn"
        onclick={onSubmit}
        value={translate('Submit.1')}
      />
    </form>

  );
};

export default RestPasswordForm;
