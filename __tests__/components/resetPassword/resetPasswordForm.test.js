
import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import ModifyPassWordForm from '../../../src/components/resetPassword/ModifyPasswordForm';

it('form test', async () => {
  const checkOnsubmit = jest.fn();
  const callApiThunk = jest.fn();
  const location = jest.fn();
  let wrapper;

  await act(async () => {
    wrapper = mount(

      <BrowserRouter>
        <ModifyPassWordForm checkOnsubmit={checkOnsubmit} location={location} callApiThunk={callApiThunk} />
      </BrowserRouter>,

    );
  });
  const subMitBtn = wrapper.find('button#submitBtn');
  subMitBtn.simulate('click');
  expect(wrapper.find('input#confirmPassword').props().value).toEqual('');
  expect(wrapper.find('input#newPassword').props().value).toEqual('');
});
