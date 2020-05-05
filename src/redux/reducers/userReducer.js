import * as types from '../actions/actionTypes';

const reduce = (state, action) => {
  switch (action.type) {
    case types.USER_LOGIN_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case types.RESET_PASSWORD:
      return {
        ...state,
        message: action.payload,
      };
    default: return state || {
      loading: false,
      token: '',
      error: '',
    };
  }
};
export default reduce;
