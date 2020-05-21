import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import { I18nextProvider } from 'react-i18next';
import { mount } from '../../setupTests';
import { Login as View } from '../../src/views/Login';
import i18n from '../../src/i18next';

let wrapper;

describe('Accommodation Test', () => {
  const props = {
    handleError: jest.fn(),
    setLoadingStatus: jest.fn(),
    userRole: jwt.decode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ0cmF2ZWxhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoidHJhdmVsYWRtaW4iLCJmaXJzdE5hbWUiOiJ0cmF2ZWxlciIsImxhc3ROYW1lIjoiSGltYmFyYSIsImlhdCI6MTU5MDQyMjI3MX0.S10ZbjQ1ijtY3n8MwuzhtVa5cHvCMsdAllMHUwSqypI').role,
    user: { email: 'traveladmin@gmail.com', password: 'Niyonkuru@1' },
    userData: {
      isLoggedIn: true,
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ0cmF2ZWxhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoidHJhdmVsYWRtaW4iLCJmaXJzdE5hbWUiOiJ0cmF2ZWxlciIsImxhc3ROYW1lIjoiSGltYmFyYSIsImlhdCI6MTU5MDQyMjI3MX0.S10ZbjQ1ijtY3n8MwuzhtVa5cHvCMsdAllMHUwSqypI',
    },
    thunk: jest.fn(async () => ({})),
    validations: {
      email: 'is-valid',
      password: 'is-valid',
    },
  };

  it('Should login as a super Admin', () => {
    wrapper = mount(
      <I18nextProvider i18n={i18n}>
        <MemoryRouter>
          <View {...props} />
        </MemoryRouter>
      </I18nextProvider>,
    );
    wrapper.props();
    wrapper.find('Button').simulate('click');
    expect(wrapper.find('TextBox').length).toBe(2);
    wrapper.unmount();
  });
});
