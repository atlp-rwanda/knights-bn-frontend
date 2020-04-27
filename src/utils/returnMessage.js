export default (messageObject) => {
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
