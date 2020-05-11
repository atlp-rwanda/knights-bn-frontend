import { useTranslation } from 'react-i18next';
import { validateSignUp, validateInput } from '../../src/util/loginValidations';
import { regexPatterns, validateReset } from '../../src/util/regExPatterns';

const trueFiels = {
  firstName: 'eugene',
  lastName: 'munya',
  email: 'eugenemu@gmail.com',
  password: 'sad@123A',
  confirmPassword: 'sad@123A',
  newPassword: 'sad@123A',
  gender: {
    male: 'male',
  },
};

const emptyFiels = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  newPassword: '',
  confirmPassword: '',
  gender: {
    male: '',
  },
};

const notValid = {
  firstName: 'eugen',
  lastName: 'munya',
  email: 'eugem@gmail',
  password: 'passq',
  newPassword: 'sad@1',
  confirmPassword: 'pass',
  gender: {
    male: '',
    female: '',
  },
};
const setStateFunc = jest.fn();
const translate = jest.fn();
describe(' test validation', () => {
  it('will validate inputs', () => {
    expect(validateSignUp(trueFiels, setStateFunc, regexPatterns, translate)).toBe(true);
  });
  it('will validate inputs', () => {
    expect(validateSignUp(emptyFiels, setStateFunc, regexPatterns, translate)).toBe(true);
  });
  it('will validate inputs', () => {
    expect(validateSignUp(notValid, setStateFunc, regexPatterns, translate)).toBe(true);
  });
  it('will validate inputs', () => {
    expect(validateInput(trueFiels.email, trueFiels.password, setStateFunc, translate)).toBe(true);
  });
  it('will validate inputs', () => {
    expect(validateInput(emptyFiels.email, emptyFiels.password, setStateFunc, translate)).toBe(true);
  });
  it('will validate inputs', () => {
    expect(validateReset(trueFiels, regexPatterns, setStateFunc, translate)).toBe(true);
  });
  it('will validate inputs', () => {
    expect(validateReset(emptyFiels, regexPatterns, setStateFunc, translate)).toBe(true);
  });
  it('will validate inputs', () => {
    expect(validateReset(notValid, regexPatterns, setStateFunc, translate)).toBe(true);
  });
  it('will validate inputs', () => {
    const invalidFields1 = {
      newPassword: 'sad@123A',
      confirmPassword: '',
    };
    expect(validateReset(invalidFields1, regexPatterns, setStateFunc, translate)).toBe(true);
  });
  it('will validate inputs', () => {
    const invalidFields2 = {
      newPassword: 'sad@sqw',
      confirmPassword: 'sad@sqw',
    };
    expect(validateReset(invalidFields2, regexPatterns, setStateFunc, translate)).toBe(true);
  });
});
