import { HANDLE_ERROR } from '../actions/actionTypes';

const initialState = {
  error: '',
};
export default (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    default: return state;
  }
};
