import * as types from '../actions/actionTypes';

const initialState = {
  loading: false,
  token: '',
  error: '',
};
const reduce = (state = initialState, action) => {
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
    default: return state;
  }
};
export default reduce;
