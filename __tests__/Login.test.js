import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount, shallow } from '../setupTests';
import Login, { Login as View } from '../src/views/Login';

let wrapper;

describe('<Login />....', () => {
  const props = {
    handleError: jest.fn(),
    setLoadingStatus: jest.fn(),
    user: {
      email: 'efwhjh@bmwef.com',
      password: 'Fofo188',
    },
    userData: {
      isLoggedIn: true,
    },
    thunk: jest.fn(async () => ({})),
    validations: {
      email: 'is-valid',
      password: 'is-valid',
    },
  };
  wrapper = mount(
    <MemoryRouter>
      <View {...props} />
    </MemoryRouter>
  );
  it('Should render <LoginComponet />  component', () => {
    console.log('<<<<<</////>>>>', wrapper.props());
    console.log('.......>>>>', wrapper.find('Button').simulate('click'));
    expect(wrapper.find('TextBox').length).toBe(2);
  });
});
