import validationStatus from '../src/util/validations';

describe(' test validation', () => {
  it('Should throw an error for invalid email', () => {
    const input1 = 'alain';
    const field = 'email';
    const value = 'alain';
    const isEmailValid = 'is-invalid';
    const key = field;

    expect(validationStatus({
      key,
      value,
      input1,
      field,
      isEmailValid,
    }));
  });
  it('Should throw an error for invalid email', () => {
    const input1 = 'alain.maxime@gmail.com';
    const field = 'email';
    const value = 'alain.maxime@gmail.com';
    const isEmailValid = 'is-valid';
    const key = field;

    expect(validationStatus({
      key,
      value,
      input1,
      field,
      isEmailValid,
    }));
  });
  it('Should throw an error for invalid email', () => {
    const input1 = '';
    const field = 'password';
    const value = '';
    const isPasswordValid = 'is-valid';
    const key = field;

    expect(validationStatus({
      key,
      value,
      input1,
      field,
      isPasswordValid,
    }));
  });
});
