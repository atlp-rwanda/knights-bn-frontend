
import { Provider } from 'react-redux';
import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import '../../../src/i18next';
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import LoginPage from '../../../src/components/login/LoginPage';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  AuthReducer: { message: 'This is login page' },
});
describe('Login Test', () => {
  it('Login', async () => {
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      </Provider>,
    );
    await act(async () => {
      wrapper.find('button#submitBtn').props().onClick({
        preventDefault: () => {},
      });
    });
  });
});
