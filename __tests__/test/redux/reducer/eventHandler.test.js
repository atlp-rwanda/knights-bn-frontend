import errorHandler from '../../../../src/redux/reducers/eventHandler';
import * as types from '../../../../src/redux/actions/actionTypes';

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
    expect(errorHandler(initialState, action).user.password).toBe('abc');
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
    expect(errorHandler(initialState, action).user.password).toBe('abc');
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
    expect(errorHandler(initialState, action).isLoading).toBe(true);
  });
});
