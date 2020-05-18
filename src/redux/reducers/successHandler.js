import { HANDLE_SUCCESS, CLEAR_SUCCESS_MSG } from '../actions/actionTypes';

export default (state, action) => {
  switch (action.type) {
    case HANDLE_SUCCESS:
      return {
        ...state,
        message: action.message,
      };
    case CLEAR_SUCCESS_MSG:
      return { message: '' };
    default: return state || { message: '' };
  }
};
