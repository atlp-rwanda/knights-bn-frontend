
import errorHandler from '../../../../src/redux/reducers/errorHandler';
import { HANDLE_ERROR } from '../../../../src/redux/actions/actionTypes';

describe('Test errorHandler test', () => {
  const initialState = {
    error: '',
  };

  it('should be able test errorHandle', () => {
    const action = {
      type: HANDLE_ERROR,
      error: 'maxime',
    };
    expect(errorHandler(initialState, action).error).toBe('maxime');
  });
});
