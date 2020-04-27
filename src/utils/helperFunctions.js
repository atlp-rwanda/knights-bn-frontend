import { regexPatterns, validateInput } from './validations/validateInputs';

export const checkOnchange = (eveNt, displayMessage, setCredentials) => {
  const { name, value } = eveNt.target;
  const isVAlid = validateInput(eveNt.target, regexPatterns[name]);
  return setCredentials((prevState) => ({
    ...prevState,
    [name]: value,
    isvalid: isVAlid,
    message: displayMessage,
  }));
};
export const checkOnsubmit = (setCredentials) => setCredentials((prevState) => ({
  ...prevState,
  isvalid: '',
  message: '',
  newPassword: '',
  confirmPassword: '',
  email: '',
}));
