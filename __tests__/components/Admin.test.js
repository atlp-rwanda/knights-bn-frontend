import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import jwt from 'jsonwebtoken';
import { mount, shallow } from '../../setupTests';
import Login, { mapStateToProps, Login as View } from '../../src/views/Login';

let wrapper;

describe('Admin Test', () => {
  const props = {
    handleError: jest.fn(),
    setLoadingStatus: jest.fn(),
    userRole: jwt.decode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiZW1haWwiOiJzdXBlcmFkbWluQGJhcmVmb290bm9tYWQuY29tIiwicm9sZSI6InN1cGVyQWRtaW4iLCJmaXJzdE5hbWUiOiJNb2lzZSIsImxhc3ROYW1lIjoiUndpYnV0c28iLCJpYXQiOjE1ODk4MTMzODZ9.h1lJE2HrysRanY1M6leXaiHPqgYZi8lxZB_FFFaVSpM').role,
    user: { email: 'superadmin@barefootnomad.com', password: 'Niyonkuru@1' },
    userData: {
      isLoggedIn: true,
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiZW1haWwiOiJzdXBlcmFkbWluQGJhcmVmb290bm9tYWQuY29tIiwicm9sZSI6InN1cGVyQWRtaW4iLCJmaXJzdE5hbWUiOiJNb2lzZSIsImxhc3ROYW1lIjoiUndpYnV0c28iLCJpYXQiOjE1ODk4MTMzODZ9.h1lJE2HrysRanY1M6leXaiHPqgYZi8lxZB_FFFaVSpM',
    },
    thunk: jest.fn(async () => ({})),
    validations: {
      email: 'is-valid',
      password: 'is-valid',
    },
  };

  it('Should login as a super Admin', () => {
    wrapper = mount(
      <MemoryRouter>
        <View {...props} />
      </MemoryRouter>,
    );
    wrapper.props();
    wrapper.find('Button').simulate('click');
    expect(wrapper.find('TextBox').length).toBe(2);
    wrapper.unmount();
  });

  describe('Admin Test', () => {
    it('Should login as a usual employee', () => {
      const props1 = {
        handleError: jest.fn(),
        setLoadingStatus: jest.fn(),
        user: { email: 'alain.maxime@gmail.com', password: 'Niyonkuru@1' },
        userData: {
          isLoggedIn: true,
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbGFpbi5tYXhpbWVAZ21haWwuY29tIiwicm9sZSI6InJlcXVlc3RlciIsImZpcnN0TmFtZSI6IkthZ29yb3JhIiwibGFzdE5hbWUiOiJBbGFpbiBNYXhpbSIsImlhdCI6MTU4OTgzNTYxMH0.N22iw1o0cUsomfynlyAyYF8XfQrleFqx0d5ljZCDoPY',
        },
        thunk: jest.fn(async () => ({})),
        validations: {
          email: 'is-valid',
          password: 'is-valid',
        },
      };

      wrapper = mount(
        <MemoryRouter>
          <View {...props1} />
        </MemoryRouter>,
      );
      wrapper.props();
      wrapper.find('Button').simulate('click');
      expect(wrapper.find('TextBox').length).toBe(2);
      wrapper.unmount();
    });
  });
});
