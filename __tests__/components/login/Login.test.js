import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from '../../../src/components/login/LoginForm';
import '../../../src/i18next';

describe('Login form test', () => {
  afterEach(cleanup);
  it('login form', async () => {
    const mockProps = {
      isSuccess: true,
      logIn: jest.fn(),
      location: jest.fn(),
      history: [],
      isAuthenticated: true,
      validateInput: jest.fn(),
      isLoading: true,
      isLoggedIn: true,
      displayMessage: false,
    };


    const { getByTestId } = render(
      <BrowserRouter>
        <Login {...mockProps} />
      </BrowserRouter>,
    );
    const password = getByTestId('login-password');
    const email = getByTestId('login-email');
    const sbmtBtn = getByTestId('submitBtn');
    fireEvent.change(password, { target: { value: 'sad@123A' } });
    fireEvent.change(email, { target: { value: 'eugene@gmail.com' } });
    await act(async () => {
      fireEvent.click(sbmtBtn);
    });
  });
});
