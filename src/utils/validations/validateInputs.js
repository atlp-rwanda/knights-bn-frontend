export const regexPatterns = {
  password: /^[\d\w@-]{8,}$/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  newPassword: /^[\d\w@-]{8,}$/i,
  confirmPassword: /^[\d\w@-]{8,}$/i,

};

export const validateInput = (field, regex) => {
  let calassName = '';
  if (regex.test(field.value) && field.value !== '') {
    calassName = 'valid';
    return calassName;
  }
  calassName = 'invalid';
  return calassName;
};
