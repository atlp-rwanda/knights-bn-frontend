import errorHandler from '../../../src/redux/reducers/errorHandler';
import * as types from '../../../src/redux/actions/actionTypes';

describe('Error handler reducer', () => {
  it('should return the initial state on CLEAR_ERROR_MSG', () => {
    const action = {
      type: types.CLEAR_ERROR_MSG,
    };
    expect(errorHandler({}, action)).toEqual({ error: '' });
  });
  it('HANDLE_ERROR', () => {
    const initialState = {
      error: '',
    };
    const action = {
      error:'Not foundError',
      type: types.HANDLE_ERROR,
    };
    expect(errorHandler(initialState, action).error).toEqual('Not foundError');
  });
  it('should return  current state by default', () => {
    const action = {};
    const initialState = {
      error: '',
    };
    expect(errorHandler(initialState, action)).toEqual(initialState);
  });
  it('should return current state by default', () => {
    const action = {};
    const initialState = { error: '' };
    expect(errorHandler(null, action)).toEqual(initialState);
  });
});
