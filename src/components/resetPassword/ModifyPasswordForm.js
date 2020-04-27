import React, { useState } from 'react';
import queryString from 'query-string';
import '../../assets/styles/components/resetPasswordForm.scss';
import { resetUserPassword } from '../../redux/actions/actionCreators';
import { InputElement, ButtonElememnt } from '../htmlElements/FormInputs';

const PasswordReset = ({
  checkOnchange, checkOnsubmit, callApiThunk, location, displayMessage,
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
    checkOnsubmit(setCredentials);
  };

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
