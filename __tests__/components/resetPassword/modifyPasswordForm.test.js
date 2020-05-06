
import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import ModifyPassWordForm from '../../../src/components/resetPassword/ModifyPasswordForm';

describe('Change passwordForm', () => {
  it('form test', async () => {
    const mockProps = {
      isSuccess: true,
      checkOnsubmit: jest.fn(),
      callApiThunk: jest.fn(),
      location: jest.fn(),
      checkOnchange: jest.fn(),
      history: [],
    };
    let wrapper;
    await act(async () => {
      wrapper = mount(

        <BrowserRouter>
          <ModifyPassWordForm {...mockProps} />
        </BrowserRouter>,

      );
    });
    await act(async () => {
      wrapper.find('button#submitBtn').simulate('click');
    });
    expect(wrapper.find('input#confirm').props().value).toEqual('');
  });
});
