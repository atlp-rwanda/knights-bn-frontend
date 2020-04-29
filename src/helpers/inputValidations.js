export default (input1, input2) => {
  const { key: field, value } = input1;
  let validationStatus = '';

  if (field === 'firstName' || field === 'lastName') {
    const regex = /^\S{3,}$/;
    const isNameValid = regex.test(value);
    validationStatus = isNameValid ? 'is-valid' : 'is-invalid';
  } else if (field === 'email') {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isEmailValid = regex.test(value);
    validationStatus = isEmailValid ? 'is-valid' : 'is-invalid';
  } else if (field === 'passportNumber') {
    const regex = /\w{8,9}/;
    const isPassportNumberValid = regex.test(value);
    validationStatus = isPassportNumberValid ? 'is-valid' : 'is-invalid';
  } else if (field === 'password') {
    const regex = /\w{1,}/;
    const isPasswordValid = regex.test(value);
    validationStatus = isPasswordValid ? 'is-valid' : 'is-invalid';
  }
  return validationStatus;
};
