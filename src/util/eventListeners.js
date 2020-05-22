import { regexPatterns, validateInput } from './regExPatterns';

export const onServerMessage = (messageObject) => {
  let validationMassage = '';
  if (messageObject) {
    const { isLoggedIn, error, message } = messageObject;
    if (isLoggedIn) {
      validationMassage = message;
      return validationMassage;
    }
    validationMassage = error;
    return validationMassage;
  }
};
export const onSuccessFullyChanged = (serverData) => {
  if (serverData) {
    const { isLoggedIn } = serverData;
    if (isLoggedIn) {
      return true;
    }
    return false;
  }
};

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