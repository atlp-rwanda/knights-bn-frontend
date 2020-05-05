export default (input1) => {
  const { key: field, value } = input1;
  let validationStatus = '';

  if (field === 'email') {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isEmailValid = regex.test(value);
    validationStatus = isEmailValid ? 'is-valid' : 'is-invalid';
  }
  if (field === 'password') {
    const regex = /\w{1,}/;
    const isPasswordValid = regex.test(value);
    validationStatus = isPasswordValid ? 'is-valid' : 'is-invalid';
  }
  return validationStatus;
};
