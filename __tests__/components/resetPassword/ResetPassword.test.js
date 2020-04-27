import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import ResetPaswordPage from '../../../src/components/resetPassword/ResetPasswordPage';
import ModifyPassWordPage from '../../../src/components/resetPassword/ModifyPasswordPage';
import ResetPaswordForm from '../../../src/components/resetPassword/ResetPasswordForm';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

describe('Test rest password', () => {
  it('resetPassword', async () => {
    const displayMessage = {
      isLoggedIn: true,
      error: '',
      message: 'Hello',
    };
    let wrapper;
    await act(async () => {
      wrapper = mount(
        <Provider store={store}>
          <ResetPaswordPage displayMessage={displayMessage} />
        </Provider>,
      );
    });

    const emailInput = wrapper.find('input');
    const subMitBtn = wrapper.find('button');
    emailInput.simulate('change', { target: { name: 'email', value: 'eugene2@gmail.com' } });
    expect(wrapper.find('input').props().value).toEqual('eugene2@gmail.com');
    subMitBtn.simulate('click', { preventDefault() {} });
  });

  it('resetPassword', async () => {
    let wrapper;
    await act(async () => {
      wrapper = mount(
        <Provider store={store}>
          <BrowserRouter>
            <ModifyPassWordPage />
          </BrowserRouter>
        </Provider>,
      );
    });
    const newPassword = wrapper.find('input#newPassword');
    const confirm = wrapper.find('input#confirmPassword');
    const subMitBtn = wrapper.find('button#submitBtn');
    newPassword.simulate('change', { target: { name: 'newPassword', value: 'eugene2@gmail' } });
    confirm.simulate('change', { target: { name: 'confirmPassword', value: 'eugene2@gmail' } });
    expect(wrapper.find('input#newPassword').props().value).toEqual('eugene2@gmail');
    expect(wrapper.find('input#confirmPassword').props().value).toEqual('eugene2@gmail');
    subMitBtn.simulate('click');
  });

  it('form test', async () => {
    const checkOnsubmit = jest.fn();
    const callApiThunk = jest.fn();
    const location = jest.fn();
    const wrapper = mount(
      <ResetPaswordForm
        checkOnsubmit={checkOnsubmit}
        location={location}
        callApiThunk={callApiThunk}
      />,
    );

    const subMitBtn = wrapper.find('button#submitBtn');
    subMitBtn.simulate('click');
    expect(wrapper.find('input#user-email').props().value).toEqual('');
  });
});
