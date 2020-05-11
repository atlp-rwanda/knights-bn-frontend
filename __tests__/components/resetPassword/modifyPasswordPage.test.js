
import { Provider } from 'react-redux';
import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '../../../src/i18next';
import ModifyPage from '../../../src/components/resetPassword/ModifyPasswordPage';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  AuthReducer: { message: '' },
});
describe('Reset password Test', () => {
  it('Reset', async () => {
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <ModifyPage />
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
