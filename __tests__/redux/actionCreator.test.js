import React from 'react';
import { resetUserPassword, requestError, waitForRequest } from '../../src/redux/actions/actionCreators';

describe('actionCreator', () => {
  it('Test actions creator', () => {
    expect(resetUserPassword('success')).toEqual({ type: 'RESET_PASSWORD', payload: 'success' });
    expect(requestError('Fail')).toEqual({ type: 'REQUEST_ERROR', payload: 'Fail' });
    expect(waitForRequest()).toEqual({ type: 'LOADING', payload: 'Loading ....' });
  });
});
