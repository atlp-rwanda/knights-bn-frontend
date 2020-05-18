import eventHandler from '../../../src/redux/reducers/eventHandler';
import * as types from '../../../src/redux/actions/actionTypes';

describe('test eventHandler', () => {
  it('be able to test eventHandler', () => {
    const initialState = {
      user: {
        password: 'abc',
      },
      validations: {},
      isLoading: false,
    };

    const action = {
      payload: {
        key: 'confirmPassword',
        value: '',
      },
      type: types.VALIDATE_INPUT,
    };
    expect(eventHandler(initialState, action).user.password).toBe('abc');
  });
  it('be able to test eventHandler', () => {
    const initialState = {
      user: {
        password: 'abc',
      },
      validations: {},
      isLoading: false,
    };

    const action = {
      payload: {
        key: '',
        value: '',
      },
      type: types.VALIDATE_INPUT,
    };
    expect(eventHandler(initialState, action).user.password).toBe('abc');
  });
  it('be able to test eventHandler', () => {
    const initialState = {
      user: {
        password: 'abc',
      },
      validations: {},
      isLoading: true,
    };

    const action = {
      status: true,
      payload: {
        key: '',
        value: '',
      },
      type: types.SET_LOADING_STATUS,
    };
    expect(eventHandler(initialState, action).isLoading).toBe(true);
  });
  it('VALIDATE_LOGIN_INPUT should match password and confirmPassword fields', () => {
    const state = {
      user: {
        password: 'Password@123',
      },
      validations: {
        login: {},
        signup: {},
      },
      isLoading: false,
      isValidated: false,
    };
    const action = {
      type: types.VALIDATE_LOGIN_INPUT,
      payload: {
        key: 'confirmPassword',
        value: 'Password@123',
      },
    };
    expect(eventHandler(state, action).validations.login.confirmPassword).toBe('is-valid');
  });
  it('VALIDATE_LOGIN_INPUT should validate individual fields', () => {
    const state = {
      user: {},
      validations: {
        login: {},
        signup: {},
      },
      isLoading: false,
      isValidated: false,
    };
    const action = {
      type: types.VALIDATE_LOGIN_INPUT,
      payload: {
        key: 'email',
        value: 'knights@barefoot.com',
      },
    };
    expect(eventHandler(state, action).validations.login.email).toBe('is-valid');
  });
  it('VALIDATE_SIGNUP_INPUT should match password and confirmPassword fields', () => {
    const state = {
      user: {
        password: 'Password@123',
      },
      validations: {
        login: {},
        signup: {
          firstName: 'is-invalid',
          lastName: 'is-invalid',
          email: 'is-invalid',
          password: 'is-invalid',
          confirmPassword: 'is-invalid',
          gender: 'is-invalid',
        },
      },
      isLoading: false,
      isValidated: false,
    };
    const action = {
      type: types.VALIDATE_SIGNUP_INPUT,
      payload: {
        key: 'confirmPassword',
        value: 'Password@123',
      },
    };
    expect(eventHandler(state, action).validations.signup.confirmPassword).toBe('is-valid');
  });
  it('VALIDATE_SIGNUP_INPUT should validate individual fields', () => {
    const state = {
      user: {},
      validations: {
        login: {},
        signup: {
          firstName: 'is-invalid',
          lastName: 'is-invalid',
          email: 'is-invalid',
          password: 'is-invalid',
          confirmPassword: 'is-invalid',
          gender: 'is-invalid',
        },
      },
      isLoading: false,
      isValidated: false,
    };
    const action = {
      type: types.VALIDATE_SIGNUP_INPUT,
      payload: {
        key: 'email',
        value: 'knights@barefoot.com',
      },
    };
    expect(eventHandler(state, action).validations.signup.email).toBe('is-valid');
  });
  it('RESET_INPUT_FIELDS should return the initial state', () => {
    const initialState = {
      user: {},
      validations: {
        login: {},
        signup: {
          firstName: 'is-invalid',
          lastName: 'is-invalid',
          email: 'is-invalid',
          password: 'is-invalid',
          confirmPassword: 'is-invalid',
          gender: 'is-invalid',
        },
      },
      isLoading: false,
      isValidated: false,
    };
    const action = {
      type: types.RESET_INPUT_FIELDS,
    };
    expect(eventHandler({}, action)).toEqual(initialState);
  });
  it('VALIDATE_FORM should return isValidated flag on the form', () => {
    const action = {
      type: types.VALIDATE_FORM,
      status: true,
    };
    expect(eventHandler({}, action).isValidated).toEqual(true);
  });
  it('should return current state by default', () => {
    const action = {};
    const initialState = {
      user: {},
      validations: {
        login: {},
        signup: {
          firstName: 'is-invalid',
          lastName: 'is-invalid',
          email: 'is-invalid',
          password: 'is-invalid',
          confirmPassword: 'is-invalid',
          gender: 'is-invalid',
        },
      },
      isLoading: false,
      isValidated: false,
    };
    expect(eventHandler(null, action)).toEqual(initialState);
  });
});
