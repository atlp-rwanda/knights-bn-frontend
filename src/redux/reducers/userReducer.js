import * as types from '../actions/actionTypes';

const initialState = {
  loading: false,
  token: '',
  error: '',
};
const reduce = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_USERS_SUCCESS:
      return {
        loading: false,
        token: action.payload,
        error: '',
      };
    case types.FETCH_USERS_FAILURE:
      return {
        loading: false,
        token: '',
        error: action.payload,
      };
    case types.USER_LOGIN_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
export default reduce;
