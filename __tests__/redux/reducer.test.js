import React from 'react';
import authReducer from '../../src/redux/reducers/authReducer';
import { resetUserPassword, requestError, waitForRequest } from '../../src/redux/actions/actionCreators';

describe('actionCreator', () => {
  it('Test reducer', () => {
    expect(authReducer({}, resetUserPassword('successfully'))).toEqual({ message: 'successfully' });
    expect(authReducer({}, requestError('Fail'))).toEqual({ message: 'Fail' });
    expect(authReducer({}, waitForRequest())).toEqual({ message: 'loading......' });
    expect(authReducer({}, {})).toEqual({});
  });
});
