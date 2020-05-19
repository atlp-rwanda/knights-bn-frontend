import userReducer from '../../../src/redux/reducers/userReducer';
import * as types from '../../../src/redux/actions/actionTypes';
import { resetUserPassword } from '../../../src/redux/actions/actions';

describe('Test userReducer test', () => {
  it('should be able test errorHandle', () => {
    const state = {
      data: {},
      loading: false,
      token: 'abc',
      error: '',
    };
    const action = {
      payload: {
        token: 'abc',
      },
      type: types.USER_LOGIN_SUCCESS,
    };
    expect(userReducer(state, action).data.token).toBe('abc');
  });
  it('reset password', () => {
    expect(userReducer({}, resetUserPassword('successfully'))).toEqual({ message: 'successfully' });
  });
  it('should return current state by default', () => {
    const action = {};
    const initialState = {
      loading: false,
      token: '',
      error: '',
    };
    expect(userReducer(initialState, action)).toEqual(initialState);
  });
  it('should return current state by default', () => {
    const action = {};
    const initialState = {
      loading: false,
      token: '',
      error: '',
      data: {
        message: '',
      },
    };
    expect(userReducer(null, action)).toEqual(initialState);
  });
  it('test view all reducer', () => {
    const state = {
      loading: true,
    };
    const action = {
      payload: {
        email: 'abc@gmail.com',
      },
      type: types.GET_ALL_USERS,
    };

    const expectedResult = {
      data: {
        email: 'abc@gmail.com',
      },
      loading: true,
    };
    expect(userReducer(state, action)).toEqual(expectedResult);
  });
  it('test view One reducer', () => {
    const state = {
      loading: true,
    };
    const action = {
      payload: {
        email: 'abc@gmail.com',
      },
      type: types.GET_ONE_USER,
    };

    const expectedResult = {
      datas: {
        email: 'abc@gmail.com',
      },
      loading: true,
    };
    expect(userReducer(state, action)).toEqual(expectedResult);
  });
  it('test to update role', () => {
    const state = {
      loading: true,
    };
    const action = {
      payload: {
        email: 'abc@gmail.com',
      },
      type: types.UPDATE_ROLE,
    };

    const expectedResult = {
      data: {
        email: 'abc@gmail.com',
      },
      loading: true,
    };
    expect(userReducer(state, action)).toEqual(expectedResult);
  });
});
