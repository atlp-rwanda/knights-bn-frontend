export const regexPatterns = {
  password: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  newPassword: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
  confirmPassword: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,

};

export const validateReset = (fields, regex, setSingState, translate) => {
  let newPasswordError = '';
  let confirmError = '';
  if (fields.newPassword === '') {
    newPasswordError = translate('password-required.1');
  } else if (fields.confirmPassword === '') {
    confirmError = translate('password-required.1');
  } else if (fields.newPassword !== fields.confirmPassword) {
    confirmError = translate('password confirmation has to match password.1');
  } else if (!regex.password.test(fields.newPassword) && fields.newPassword !== '') {
    newPasswordError = translate('invalid-email error message.1');
  }

  if (newPasswordError || confirmError) {
    setSingState((data) => ({
      ...data,
      newPasswordError,
      confirmError,
    }));
    return false;
  }
  return true;
};
