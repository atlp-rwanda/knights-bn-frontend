import errorHandler from '../../../src/redux/reducers/errorHandler';
import * as types from '../../../src/redux/actions/actionTypes';

describe('Error handler reducer', () => {
  it('should return the initial state on CLEAR_ERROR_MSG', () => {
    const action = {
      type: types.CLEAR_ERROR_MSG,
    };
    expect(errorHandler({}, action)).toEqual({ error: '' });
  });
});
