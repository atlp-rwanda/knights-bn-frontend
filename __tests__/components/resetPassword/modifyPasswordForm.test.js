
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import '../../../src/i18next';
import ModifyPassWordForm from '../../../src/components/resetPassword/ModifyPasswordForm';

describe('ResetPassword form test', () => {
  afterEach(cleanup);
  it('modify password', async () => {
    const mockProps = {
      validateReset: jest.fn(),
      resetPassword: jest.fn(),
      isLoading: true,
      displayMessage: true,
      isAuthenticated: true,
    };
    const { getByTestId } = render(
      <BrowserRouter>
        <ModifyPassWordForm {...mockProps} />
      </BrowserRouter>,
    );
    const newPassword = getByTestId('newPassword');
    const confirm = getByTestId('confirm-reset');
    const sbmtBtn = getByTestId('submitBtn-reset');
    fireEvent.change(newPassword, { target: { value: 'sad@123A' } });
    fireEvent.change(confirm, { target: { value: 'sad@123A' } });
    await act(async () => {
      fireEvent.click(sbmtBtn);
    });
  });
});
