
import { Provider } from 'react-redux';
import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ResetPaswordPage from '../../../src/components/resetPassword/restPasswordPage';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  AuthReducer: {
    isAuthenticated: true,
    message: 'This is rest page',
  },
});
describe('Test reset password page', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <ResetPaswordPage />
      </Provider>,
    );
  });
  it('resetPassword', async () => {
    const emailInput = wrapper.find('input#user-email');
    emailInput.simulate('change', { target: { name: 'email', value: 'eugene2@gmail.com' } });
    expect(wrapper.find('input#user-email').props().value).toEqual('eugene2@gmail.com');
    await act(async () => {
      wrapper.find('button#submitBtn').simulate('click');
    });
    expect(wrapper.props().store.getState()).toEqual({
      AuthReducer: {
        isAuthenticated: true,
        message: 'This is rest page',
      },
    });
  });
  it('resetPassword', async () => {
    const emailInput = wrapper.find('input#user-email');
    emailInput.simulate('change', { target: { name: 'email', value: 'eugene2@gma' } });
    expect(wrapper.find('input#user-email').props().value).toEqual('eugene2@gma');
    await act(async () => {
      wrapper.find('button#submitBtn').simulate('click');
    });
  });
  it('resetPassword', async () => {
    const emailInput = wrapper.find('input#user-email');
    emailInput.simulate('change', { target: { name: 'email', value: '' } });
    expect(wrapper.find('input#user-email').props().value).toEqual('');
    await act(async () => {
      wrapper.find('button#submitBtn').simulate('click');
    });
  });
});
