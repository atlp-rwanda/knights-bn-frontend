import userReducer from '../../../src/redux/reducers/userReducer';
import * as types from '../../../src/redux/actions/actionTypes';
import { resetUserPassword} from '../../../src/redux/actions/actions';

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
});
