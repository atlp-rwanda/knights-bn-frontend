export default (input1, input2) => {
  const { key: field, value } = input1;
  let validationStatus = '';

  if (field === 'firstName' || field === 'lastName') {
    const regex = /^\S{3,}$/;
    const isNameValid = regex.test(value);
    validationStatus = isNameValid ? 'valid' : 'invalid';
  } else if (field === 'email') {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isEmailValid = regex.test(value);
    validationStatus = isEmailValid ? 'valid' : 'invalid';
  } else if (field === 'passportNumber') {
    const regex = /\w{8,9}/;
    const isPassportNumberValid = regex.test(value);
    validationStatus = isPassportNumberValid ? 'valid' : 'invalid';
  } else if (field === 'password' || field === 'confirmPassword') {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    const isPasswordValid = regex.test(value);
    validationStatus = isPasswordValid ? 'valid' : 'invalid';
    if (input2 && input2.key === 'confirmPassword') {
      const password = input1.value;
      const confirmPassword = input2.value;
      validationStatus = (password === confirmPassword) ? 'valid' : 'invalid';
    }
  }
  return validationStatus;
};
