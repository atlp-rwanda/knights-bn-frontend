import { HANDLE_SUCCESS, CLEAR_SUCCESS_MSG } from '../actions/actionTypes';

const initialState = {
  message: '',
};
export default (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_SUCCESS: {
      return {
        ...state,
        message: action.message,
      };
    }
    case CLEAR_SUCCESS_MSG: {
      return initialState;
    }
    default: return state;
  }
};
