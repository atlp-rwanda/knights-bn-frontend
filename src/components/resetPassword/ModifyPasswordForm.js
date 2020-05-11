
import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import queryString from 'query-string';
import '../../assets/styles/components/resetPasswordForm.scss';
import { withRouter } from 'react-router-dom';
import { resetUserPassword } from '../../redux/actions/actions';
import { InputElement, ButtonElememnt } from '../../util/customInput/customInputs';
import { regexPatterns, validateReset } from '../../util/regExPatterns';

const PasswordReset = ({
  resetPassword,
  location,
  displayMessage,
  errorMessage,
  history,
  isLoading,
  isAuthenticated,
}) => {
  const initialState = {
    newPassword: '',
    newPasswordError: '',
    confirmError: '',
    confirmPassword: '',
    notMacthError: '',
    message: '',
  };
  const { t: translate } = useTranslation();
  const [stateData, setCredentials] = useState(initialState);
  const { id, token } = queryString.parse(location.search);
  const inputChanging = (e) => {
    const { name, value } = e.target;
    setCredentials((resetData) => ({
      ...resetData,
      [name]: value,
      newPasswordError: '',
      confirmError: '',
    }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const body = {
      newPassword: stateData.newPassword,
      confirmPassword: stateData.confirmPassword,
    };
    if (validateReset(stateData, regexPatterns, setCredentials, translate)) {
      await resetPassword('patch', `/password/reset/${id}/${token}`, resetUserPassword, body, token);
      setCredentials(() => ({ ...initialState }));
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/home');
    }
  }, [isAuthenticated]);
  return (
    <form className="resetform" data-testid="modify-password">
      {displayMessage ? <span className="display-message">{displayMessage}</span>
        : <span className="display-message-err">{errorMessage}</span>}
      {isLoading ? <Spinner animation="border" variant="primary" /> : ''}
      <InputElement
        name="newPassword"
        value={stateData.newPassword}
        palceholder={translate('password.1')}
        onchenge={inputChanging}
        type="password"
        id="newPassword"
        testid="newPassword"
        className="input"
        error={stateData.newPasswordError}
      />
      <InputElement
        name="confirmPassword"
        value={stateData.confirmPassword}
        palceholder={translate('confirm password.1')}
        onchenge={inputChanging}
        type="password"
        id="confirm"
        testid="confirm-reset"
        className="input"
        error={stateData.confirmError}
      />
      <ButtonElememnt
        id="submitBtn"
        testid="submitBtn-reset"
        onclick={onSubmit}
        value={translate('Submit.1')}
      />

    </form>
  );
};

export default withRouter(PasswordReset);
