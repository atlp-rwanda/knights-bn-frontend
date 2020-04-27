import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { callApiThunk } from '../../src/redux/thunk/index';
import { resetUserPassword } from '../../src/redux/actions/actionCreators';

const mockStore = configureMockStore([thunk]);

describe('Thunk', () => {
  const store = mockStore();
  const body = (email) => ({
    email,
  });
  it('Test thunk', async () => {
    await store.dispatch(callApiThunk('post', '/reset_pw/user', resetUserPassword, body('eukigali@yahoo.com')));
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'RESET_PASSWORD',
      payload: {
        error: 'email is not registered! Please check the entered email',
        isLoggedIn: false,
      },
    });
  });
});
