import { RESET_PASSWORD, LOADING, REQUEST_ERROR } from '../actions/types';


export default (state = {}, action) => {
  switch (action.type) {
    case LOADING:
      return {
        message: 'loading......',
      };
    case RESET_PASSWORD:
      return {
        message: action.payload,
      };
    case REQUEST_ERROR:
      return {
        message: action.payload,
      };
    default: return state;
  }
};
