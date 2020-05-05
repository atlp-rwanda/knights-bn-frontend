import signupValidations from '../../src/util/signupValidations';

describe('Signup validation file', () => {
  it('should return is-valid on a non empty username', () => {
    const input = {
      key: 'firstName',
      value: 'Maxime',
    };
    expect(signupValidations(input)).toEqual('is-valid');
  });
  it('should return is-invalid on a an empty username', () => {
    const input = {
      key: 'firstName',
      value: '',
    };
    expect(signupValidations(input)).toEqual('is-invalid');
  });
  it('should return is-invalid on a an invalid email ', () => {
    const input = {
      key: 'email',
      value: '12qwe',
    };
    expect(signupValidations(input)).toEqual('is-invalid');
  });
  it('should return is-invalid on a weak password', () => {
    const input = {
      key: 'password',
      value: '12qwe',
    };
    expect(signupValidations(input)).toEqual('is-invalid');
  });
  it('should validate confirmPassword field', () => {
    const input = {
      key: 'confirmPassword',
      value: 'Password@1',
    };
    expect(signupValidations(input)).toEqual('is-valid');
  });
  it('should return is-valid on matching password and confirm password ', () => {
    const input1 = {
      key: 'password',
      value: 'Password@1',
    };
    const input2 = {
      key: 'confirmPassword',
      value: 'Password@1',
    };
    expect(signupValidations(input1, input2)).toEqual('is-valid');
  });
  it('should return is-invalid on non matching password and confirm password ', () => {
    const input1 = {
      key: 'password',
      value: 'Password@12',
    };
    const input2 = {
      key: 'confirmPassword',
      value: 'Password@1',
    };

    expect(signupValidations(input1, input2)).toEqual('is-invalid');
  });
  it('should return is-valid on gender only on male/female', () => {
    const input1 = {
      key: 'gender',
      value: 'male',
    };
    const input2 = {
      key: 'gender',
      value: 'female',
    };
    expect(signupValidations(input1)).toEqual('is-valid');
    expect(signupValidations(input2)).toEqual('is-valid');
  });
  it('should return is-invalid on wrong input for gender', () => {
    const input = {
      key: 'gender',
      value: 'boy',
    };
    expect(signupValidations(input)).toEqual('is-invalid');
  });
});
