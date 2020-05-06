import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import ResetPaswordForm from '../../../src/components/resetPassword/ResetPasswordForm';

describe('Test reset password', () => {
  it('form test', async () => {
    const mockProps = {
      displayMessage: '',
      checkOnsubmit: jest.fn(),
      callApiThunk: jest.fn(),
      location: jest.fn(),
      checkOnchange: jest.fn(),
    };
    let wrapper;
    await act(async () => {
      wrapper = mount(
        <ResetPaswordForm {...mockProps} />,
      );
    });
    await act(async () => {
      wrapper.find('button#submitBtn').simulate('click');
    });
    expect(wrapper.find('input#user-email').props().value).toEqual('');
    expect(wrapper.find('span').props().children).toEqual('');
  });
});
