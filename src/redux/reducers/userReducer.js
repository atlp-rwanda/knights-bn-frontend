import * as types from '../actions/actionTypes';

const reduce = (state, action) => {
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
        ...state,
        message: action.payload,
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
    case types.CREATE_ACCOMMODATION:
      return {
        ...state,
        createdAccommodation: action.payload,
      };
    case types.GET_ACCOMMODATIONS:
      return {
        ...state,
        accommodations: action.payload,
      };
    case types.BOOK_ACCOMMODATION:
      return {
        ...state,
        bookedAccommodation: action.payload,
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
          accommodations: '',
        }
      );
  }
};
export default reduce;
