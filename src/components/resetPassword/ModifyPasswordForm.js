
import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import '../../assets/styles/components/resetPasswordForm.scss';
import { resetUserPassword } from '../../redux/actions/actions';
import { InputElement, ButtonElememnt } from './customInput/customInputs';

const PasswordReset = ({
  checkOnchange,
  callApiThunk,
  location,
  displayMessage,
  isSuccess,
  history,
}) => {
  const [{
    newPassword, message, confirmPassword, isvalid,
  }, setCredentials] = useState({
    newPassword: '',
    confirmPassword: '',
    isvalid: '',
    message: '',
  });

  const validationMsg = 'Make it alphanumeric and at least 6 characters';
  const { id, token } = queryString.parse(location.search);
  const inputChanging = (e) => {
    checkOnchange(e, validationMsg, setCredentials);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const body = {
      newPassword,
      confirmPassword,
    };
    await callApiThunk('patch', `/password/reset/${id}/${token}`, resetUserPassword, body);
    setCredentials((prevState) => ({
      ...prevState,
      isvalid: '',
      message: '',
      newPassword: '',
      confirmPassword: '',
    }));
  };
  useEffect(() => {
    if (isSuccess) {
      history.push('/home');
    }
  }, [isSuccess]);
  return (
    <form className="resetform" data-testid="modify-password">
      <span className="validation-message" id="validation-message">{(message === '') ? displayMessage : ''}</span>
      {isvalid ? <span className={isvalid}>{ message}</span> : ''}
      <InputElement
        name="newPassword"
        value={newPassword}
        palceholder="Type new password"
        onchenge={inputChanging}
        type="password"
        id="newPassword"
      />

      <InputElement
        name="confirmPassword"
        value={confirmPassword}
        palceholder="Confirm password"
        onchenge={inputChanging}
        type="password"
        id="confirmPassword"
      />
      <ButtonElememnt
        id="submitBtn"
        onclick={onSubmit}
        value="Submit"
      />

    </form>
  );
};

export default PasswordReset;
