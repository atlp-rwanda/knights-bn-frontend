
import { Provider } from 'react-redux';
import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '../../../src/i18next';
import SignupPage from '../../../src/components/signUp/SignUpPage';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  AuthReducer: { message: 'This is login page' },
});
describe('Test reset password page', () => {
  it('resetPassword', async () => {
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <SignupPage />
        </BrowserRouter>
      </Provider>,
    );
    await act(async () => {
      wrapper.find('button#submitBtn').simulate('click', { preventDefault() {} });
    });
  });
});
