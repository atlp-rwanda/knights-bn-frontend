import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import {
  callApiThunk, axiosInstance,
  authThunk, clearMessage,
  resetPassword, logout,
} from '../../../src/redux/thunk/index';
import { loginUsersSuccess, resetUserPassword, userSignUp } from '../../../src/redux/actions/actions';

describe('test thunk', () => {
  let axiosMock;
  let store;
  const initialState = {
    signupSuccess: {},
    errors: null,
    message: '',
    token: '',
    isAuthenticated: false,
  };
  const token = 'mytoken';
  const id = 16;

  beforeEach(() => {
    axiosMock = new MockAdapter(axiosInstance);
    const mockStore = configureStore([thunk]);
    store = mockStore(initialState);
  });
  it('Login', async () => {
    const body = { };
    axiosMock.onPost('/auth/login').reply(201, body);
    store.dispatch(callApiThunk('post', '/auth/login', loginUsersSuccess, body));
  });
  it('mock user login', () => {
    const body = {
      email: 'superadmin@barefootnomad.com',
      password: 'Niyonkuru@1',
    };
    axiosMock.onPost('/auth/login').reply(201, { token: 'mytoken' });
    store.dispatch(authThunk('post', '/auth/login', loginUsersSuccess, body));
  });

  it('universal thunk', async () => {
    const body = { };
    axiosMock.onPost('/auth/signup').reply(201, body);
    store.dispatch(authThunk('post', '/auth/signup', userSignUp, body));
  });

  it('resetPassword', async () => {
    const body = { };
    axiosMock.onPatch(`/password/reset/${id}/${token}`).reply(201, body);
    store.dispatch(resetPassword('patch', `/password/reset/${id}/${token}`, resetUserPassword, body, token));
  });
  it('logOut', async () => {
    store.dispatch(logout());
  });
  it('clearErrorMessage', async () => {
    store.dispatch(clearMessage());
  });

  it('test get thunk error', async () => {
    const data = {
      error: {},
    };
    axiosMock.onPost('/auth/signup').reply(404, data);
    store.dispatch(callApiThunk('post', '/auth/signup', userSignUp, {}));
  });
  it('test signUp', async () => {
    const body = {
      firstName: 'Kigale',
      lastName: 'Butare',
      email: 'kigali.butare@gmail.com',
      password: 'sad@123A',
      confirmPassword: 'sad@123A',
      gender: 'male',
    };
    axiosMock.onPost('/auth/signup').reply(201, body);
    store.dispatch(authThunk('post', '/auth/signup', userSignUp, body));
  });
});
