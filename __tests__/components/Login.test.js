import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from '../../setupTests';
import { mapStateToProps, Login as View } from '../../src/views/Login';

let wrapper;

describe('Empty Inputs', () => {
  const props = {
    handleError: jest.fn(),
    setLoadingStatus: jest.fn(),
    user: {
    },
    userData: {
      isLoggedIn: false,
    },
    thunk: jest.fn(async () => ({})),
    validations: {
    },
    error: 'Please fill in the required fields.',
  };

  it('Should not pass, empty inputs', () => {
    wrapper = mount(
      <MemoryRouter>
        <View {...props} />
      </MemoryRouter>,
    );
    wrapper.find('Button').simulate('click');
    expect(wrapper.find('AlertComponent').text()).toBe(
      'Please fill in the required fields.',
    );
    wrapper.unmount();
  });
});

describe('Missing Password', () => {
  const props = {
    handleError: jest.fn(),
    setLoadingStatus: jest.fn(),
    user: {
      email: 'niyonsenga@gmail.com',
    },
    userData: {
      isLoggedIn: false,
    },
    thunk: jest.fn(async () => ({})),
    validations: {
      email: 'is-valid',
    },
    error: 'Please enter your password.',
  };

  it('Should not pass, empty password', () => {
    wrapper = mount(
      <MemoryRouter>
        <View {...props} />
      </MemoryRouter>,
    );
    wrapper.props();
    wrapper.find('Button').simulate('click');
    expect(wrapper.find('AlertComponent').text()).toBe(
      'Please enter your password.',
    );
    wrapper.unmount();
  });
});

describe('Missing Password', () => {
  const props = {
    handleError: jest.fn(),
    setLoadingStatus: jest.fn(),
    user: {
      password: 'Niyonsenga@1',
    },
    userData: {
      isLoggedIn: false,
    },
    thunk: jest.fn(async () => ({})),
    validations: {
      password: 'is-valid',
    },
    error: 'Wrong email address.',
  };

  it('Should not pass, empty email', () => {
    wrapper = mount(
      <MemoryRouter>
        <View {...props} />
      </MemoryRouter>,
    );
    wrapper.props();
    wrapper.find('Button').simulate('click');
    expect(wrapper.find('AlertComponent').text()).toBe(
      'Wrong email address.',
    );
    wrapper.unmount();
  });
});

describe('<Login />....', () => {
  const props = {
    handleError: jest.fn(),
    setLoadingStatus: jest.fn(),
    token: 'abc',
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
  it('Should render <LoginComponet />  component', () => {
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
  it('Should render <LoginComponet />  component', () => {
    const props1 = {
      isLoading: true,
      handleError: jest.fn(),
      setLoadingStatus: jest.fn(),
      user: {
        email: 'efwhjh@bmwef.com',
        password: 'Fofo188',
      },
      userData: {
        isLoggedIn: false,
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

  it('test mapStateToProps', () => {
    const state = {
      user: {
        token: 'abc',
        data: {},
      },
      errorHandler: {
        error: '',
      },
      eventHandler: {
        validations: {},
        user: {},
        isLoading: false,
      },
    };
    expect(mapStateToProps(state).isLoading).toBe(false);
  });
});

describe('<Login />....', () => {
  const props = {
    handleError: jest.fn(),
    setLoadingStatus: jest.fn(),
    user: {
      email: 'abc',
      password: '',
    },
    userData: {
      isLoggedIn: false,
    },
    thunk: jest.fn(async () => ({})),
    validations: {
      email: 'is-invalid',
      password: 'is-invalid',
    },
    error: 'Wrong email address.',
  };
  it('Should render <LoginComponet />  component', () => {
    wrapper = mount(
      <MemoryRouter>
        <View {...props} />
      </MemoryRouter>,
    );
    wrapper.props();
    wrapper.find('Button').simulate('click');
    expect(wrapper.find('AlertComponent').text()).toBe(
      'Wrong email address.',
    );
    wrapper.unmount();
  });
});
