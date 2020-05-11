import * as types from '../actions/actionTypes';

const initialState = {
  loading: false,
  token: '',
  role: '',
  error: '',
  message: '',
  isAuthenticated: false,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case types.CURRENT_USER:
      return {
        ...initialState,
        ...action.payload,

      };
    case types.USER_SIGNUP:
      return {
        ...state,
        ...action.payload,
      };
    case types.RESET_PASSWORD:
      return {
        ...state,
        ...action.payload,
      };
    case types.VERIFY_ACCOUNT:
      return {
        ...state,
        ...action.payload,
      };
    case types.CLEAR_ERROR_MSG:
      return {
        ...state,
        error: '',
        message: '',
      };

    default: return state;
  }
};
export default authReducer;
