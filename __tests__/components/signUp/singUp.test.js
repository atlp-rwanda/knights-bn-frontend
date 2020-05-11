import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SingUp from '../../../src/components/signUp/SignUpForm';
import '../../../src/i18next';

describe('Login form test', () => {
  afterEach(cleanup);
  it('login form', async () => {
    const mockProps = {
      isSuccess: true,
      signUp: jest.fn(),
      location: jest.fn(),
      history: [],
      validateInput: jest.fn(),
      isLoading: true,
      isLoggedIn: true,
      displayMessage: false,
    };


    const { getByTestId } = render(
      <BrowserRouter>
        <SingUp {...mockProps} />
      </BrowserRouter>,
    );
    const firstName = getByTestId('sign-up-fn');
    const lastname = getByTestId('sign-up-ln');
    const email = getByTestId('sign-up-email');
    const password = getByTestId('sign-up-password');
    const confirmPassword = getByTestId('password-confirm');
    const gender = getByTestId('select-id');
    const sbmtBtn = getByTestId('submitBtn');
    fireEvent.change(firstName, { target: { value: 'eugene' } });
    fireEvent.change(lastname, { target: { value: 'sadKarter' } });
    fireEvent.change(password, { target: { value: 'sad@123A' } });
    fireEvent.change(email, { target: { value: 'eugene@gmail.com' } });
    fireEvent.change(confirmPassword, { target: { value: 'sad@123A' } });
    fireEvent.change(gender, { target: { value: 'male' } });
    await act(async () => {
      fireEvent.click(sbmtBtn);
    });
  });
});
