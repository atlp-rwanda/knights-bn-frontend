import successHandler from '../../../src/redux/reducers/successHandler';
import * as types from '../../../src/redux/actions/actionTypes';

describe('Test reducer : success handler', () => {
  it('HANDLE_SUCCESS should return message', () => {
    const action = {
      type: types.HANDLE_SUCCESS,
      message: 'welcome.',
    };
    expect(successHandler({}, action).message).toBe('welcome.');
  });
  it('CLEAR_SUCCESS_MSG should return initial state', () => {
    const initialState = {
      message: '',
    };
    const action = {
      type: types.CLEAR_SUCCESS_MSG,
    };
    expect(successHandler({}, action)).toEqual(initialState);
  });
  it('should return current state by default', () => {
    const action = {};
    const initialState = {
      message: '',
    };
    expect(successHandler(initialState, action)).toEqual(initialState);
  });
  it('should return current state by default', () => {
    const action = {};
    const initialState = { message: '' };
    expect(successHandler(null, action)).toEqual(initialState);
  });
});
