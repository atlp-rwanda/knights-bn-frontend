import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  USER_LOGIN_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  token: '',
  error: '',
};
const reduce = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        token: action.payload,
        error: '',
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        token: '',
        error: action.payload,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
export default reduce;
