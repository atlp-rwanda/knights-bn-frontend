import { HANDLE_ERROR, CLEAR_ERROR_MSG } from '../actions/actionTypes';

export default (state, action) => {
  switch (action.type) {
    case HANDLE_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case CLEAR_ERROR_MSG:
      return { error: '' };
    default: return state || { error: '' };
  }
};
