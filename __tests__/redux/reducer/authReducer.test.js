import authReducer from '../../../src/redux/reducers/authReducer';
import * as types from '../../../src/redux/actions/actionTypes';

describe('Test userReducer test', () => {
  const initialState = {
    loading: false,
    token: '',
    error: '',
    role: '',
    message: '',
    isAuthenticated: false,
  };
  it('should return current state by default', () => {
    expect(authReducer(undefined, {})).toEqual(initialState);
  });
  it('should return loggedIn user', () => {
    const action = {
      payload: {
        name: 'serge',
      },
      type: types.USER_LOGIN_SUCCESS,
    };
    expect(authReducer(initialState, action).name).toEqual('serge');
  });
  it('should return current loggedIn user', () => {
    const action = {
      payload: {
        name: 'serge',
      },
      type: types.CURRENT_USER,
    };
    expect(authReducer(initialState, action).name).toEqual('serge');
  });
  it('should return USER_SIGNUP inofrmation', () => {
    const action = {
      payload: {
        message: 'verify email',
      },
      type: types.USER_SIGNUP,
    };
    expect(authReducer(initialState, action).message).toEqual('verify email');
  });
  it('should  RESET_PASSWORD ', () => {
    const action = {
      payload: {
        message: 'successgully password reset',
      },
      type: types.RESET_PASSWORD,
    };
    expect(authReducer(initialState, action).message).toEqual('successgully password reset');
  });
  it('should  VERIFY_ACCOUNT ', () => {
    const action = {
      payload: {
        message: 'your account created successfully',
      },
      type: types.VERIFY_ACCOUNT,
    };
    expect(authReducer(initialState, action).message).toEqual('your account created successfully');
  });
  it('should  CLEAR_ERROR_MSG ', () => {
    const action = {
      payload: {
        message: 'your account created successfully',
      },
      type: types.CLEAR_ERROR_MSG,
    };
    expect(authReducer(initialState, action).error).toEqual('');
  });
});
