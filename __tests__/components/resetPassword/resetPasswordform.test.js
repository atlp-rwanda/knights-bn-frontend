import React from 'react';
import { act } from 'react-dom/test-utils';
import '../../../src/i18next';
import { render, cleanup, fireEvent } from '@testing-library/react';
import ResetPaswordForm from '../../../src/components/resetPassword/ResetPasswordForm';

describe('ResetPassword form test', () => {
  afterEach(cleanup);
  it('restPassword', async () => {
    const mockProps = {
      isValid: jest.fn(),
      isLoading: true,
      callApiThunk: jest.fn(),

    };


    const { getByTestId } = render(
      <ResetPaswordForm {...mockProps} />,
    );
    const newPassword = getByTestId('user-email');
    const sbmtBtn = getByTestId('user-email-reset');
    fireEvent.change(newPassword, { target: { value: 'eugene@gmail.com' } });
    await act(async () => {
      fireEvent.click(sbmtBtn);
    });
  });
});
