
import { Provider } from 'react-redux';
import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ResetPaswordPage from '../../../src/components/resetPassword/restPasswordPage';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  user: { message: 'This is rest page' },
});
describe('Test reset password page', () => {
  it('resetPassword', async () => {
    const wrapper = mount(
      <Provider store={store}>
        <ResetPaswordPage />
      </Provider>,
    );

    const emailInput = wrapper.find('input#user-email');
    emailInput.simulate('change', { target: { name: 'email', value: 'eugene2@gmail.com' } });
    expect(wrapper.find('input#user-email').props().value).toEqual('eugene2@gmail.com');
    expect(wrapper.props().store.getState()).toEqual({ user: { message: 'This is rest page' } });
  });
});
