import { handleSuccess } from '../actions/actions';
import { HANDLE_SUCCESS } from '../actions/actionTypes';

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
    default: return state;
  }
};
