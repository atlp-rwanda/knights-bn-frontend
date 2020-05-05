import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { callApiThunk as reduxThunk, axiosInstance } from '../../../src/redux/thunk/index';
import { loginUsersSuccess } from '../../../src/redux/actions/actions';

describe('test thunk', () => {
  let axiosMock;
  let store;
  const initialState = {
    signupSuccess: {},
    errors: null,
  };
  beforeEach(() => {
    axiosMock = new MockAdapter(axiosInstance);
    const mockStore = configureStore([thunk]);
    store = mockStore(initialState);
  });
  it('test get thunk data', async () => {
    const data = {
      data: {},
    };
    axiosMock.onPost('/auth/login').reply(201, data);
    store
      .dispatch(reduxThunk('post', '/auth/login', loginUsersSuccess, {}))
      .then((d) => {
      });
  });
  it('test get thunk error', async () => {
    const data = {
      error: {},
    };
    axiosMock.onPost('/auth/login').reply(404, data);
    store
      .dispatch(reduxThunk('post', '/auth/login', loginUsersSuccess, {}))
      .then((d) => {
      });
  });
});
