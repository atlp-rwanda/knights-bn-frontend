
export const validateInput = (email, password, setLogin, translate) => {
  let emailEror = '';
  let passwordError = '';
  if (email === '') {
    emailEror = translate('email-required.1');
  }

  if (password === '') {
    passwordError = translate('password-required.1');
  }
  if (emailEror || passwordError) {
    setLogin((data) => ({
      ...data, emailEror, passwordError,
    }));
    return false;
  }
  return true;
};
export const validateSignUp = (fields, setSignUp, regex, translate) => {
  let emailError = '';
  let passwordError = '';
  let firstNameError = '';
  let lastNameError = '';
  let confirmError = '';
  let genderError = '';

  if (fields.email === '') {
    emailError = translate('email-required.1');
  }
  if (!regex.email.test(fields.email)) {
    emailError = translate('invalid email.1');
  }
  if (fields.firstName === '') {
    firstNameError = translate("first name can't be empty.1");
  }
  if (fields.lastName === '') {
    lastNameError = translate("last name can't be empty.1");
  }
  if (Object.getOwnPropertyNames(fields.gender).length === 2) {
    genderError = translate('choose.1');
  }
  if (fields.password === '') {
    passwordError = translate('password-required.1');
  } else if (!regex.password.test(fields.password)) {
    passwordError = translate('invalid-email error message.1');
  }
  if (fields.password !== fields.confirmPassword) {
    confirmError = translate('password confirmation has to match password.1');
  }
  if (fields.confirmPassword === '') {
    confirmError = translate('confirm password.1');
  }
  if (emailError || passwordError
    || genderError || firstNameError
    || lastNameError || confirmError) {
    setSignUp((data) => ({
      ...data,
      emailError,
      passwordError,
      firstNameError,
      lastNameError,
      genderError,
      confirmError,
    }));
    return false;
  }
  return true;
};
