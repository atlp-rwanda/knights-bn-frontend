import * as types from '../actions/actionTypes';

const initialState = {
  loading: false,
  token: '',
  error: '',
  data: {
    message: '',
  },
};
const reduce = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_USERS:
      return {
        ...state,
        data: action.payload,
      };
    case types.GET_ONE_USER:
      return {
        ...state,
        datas: action.payload,
      };
    case types.UPDATE_ROLE:
      return {
        ...state,
        data: action.payload,
      };
    case types.USER_LOGIN_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case types.RESET_PASSWORD:
      return {
        ...initialState,
        data: { ...action.payload },

      };
    case types.USER_PROFILE:
      return {
        ...state,
        data: action.payload,
      };
    case types.UPDATE_USER_PROFILE:
      return {
        ...state,
        updatedUser: action.payload,
      };
    default:
      return (
        state || {
          loading: false,
          token: '',
          error: '',
          data: {
            message: '',
          },
        }
      );
  }
};
export default reduce;
