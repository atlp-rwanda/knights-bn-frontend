import { render, cleanup, waitFor } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import Login from '../src/views/Login';
import store from '../src/redux/store';

const LoginComponent = () => render(
  <Provider store={store}>
    <Router>
      <Login />
    </Router>
  </Provider>,
);
describe('=============>LOGIN<=============', () => {
  afterEach(cleanup);
  it('should render login component', () => {
    const { asFragment } = LoginComponent();
    expect(asFragment(<Login />)).toMatchSnapshot();
  });
  it('should print error if email is not provided', () => {
    const { getByLabelText, getByText } = LoginComponent();
    const button = getByLabelText('Login');
    const password = getByLabelText('password');
    userEvent.type(password, '12345six');

    expect(password.value).toBe('12345six');
    userEvent.click(button);
    waitFor(() => expect(getByText('Wrong email address.')).toBeTruthy());
  });

  it('should print error if password is not provided', () => {
    const { getByLabelText, getByText } = LoginComponent();
    const email = getByLabelText('email');
    const button = getByLabelText('Login');

    userEvent.type(email, 'knights@gmail.com');
    expect(email.value).toBe('knights@gmail.com');
    userEvent.click(button);
    waitFor(() => expect(getByText('Please enter your password.')).toBeTruthy());
  });

  it('should print error if password is not provided', () => {
    const { getByLabelText, getByText } = LoginComponent();
    const email = getByLabelText('email');
    const button = getByLabelText('Login');
    const password = getByLabelText('password');
    userEvent.type(password, '12345six');

    userEvent.type(email, 'knights@gmail.com');
    userEvent.click(button);
    waitFor(() => expect(
      getByText('Incorrect email or password. Please try again.'),
    ).toBeTruthy());
  });

  it('should print error if password is not provided', () => {
    const { getByLabelText, getByText } = LoginComponent();
    const button = getByLabelText('Login');
    userEvent.click(button);
    waitFor(() => expect(getByText('Please fill in the required fields.')).toBeTruthy());
  });

  it('should print error if password is not provided', () => {
    const { getByLabelText, getByText } = LoginComponent();
    const email = getByLabelText('email');
    const button = getByLabelText('Login');
    const password = getByLabelText('password');

    userEvent.type(password, 'Niyonkuru@1');
    userEvent.type(email, 'alain.maxime@gmail.com');

    userEvent.click(button);
    waitFor(() => expect(getByText('Home Page')).toBeTruthy());
  });
});
