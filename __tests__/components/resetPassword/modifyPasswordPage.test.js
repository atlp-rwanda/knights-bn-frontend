import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import ModifyPassWordPage from '../../../src/components/resetPassword/ModifyPasswordPage';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  user: {
    message: 'hello',
  },
});

describe('Test modify password', () => {
  it('resetPassword', async () => {
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <ModifyPassWordPage />
        </BrowserRouter>
      </Provider>,
    );
    const newPassword = wrapper.find('input#newPassword');
    const confirm = wrapper.find('input#confirmPassword');
    newPassword.simulate('change', { target: { name: 'newPassword', value: 'eugene2@gmail' } });
    confirm.simulate('change', { target: { name: 'confirmPassword', value: 'eugene2@gmail' } });
    expect(wrapper.find('input#newPassword').props().value).toEqual('eugene2@gmail');
    expect(wrapper.find('input#confirmPassword').props().value).toEqual('eugene2@gmail');
    expect(wrapper.props().store.getState()).toEqual({ user: { message: 'hello' } });

  });
});
