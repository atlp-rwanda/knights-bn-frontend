import { USER_LOGIN_SUCCESS } from '../actions/userTypes';

const initialState = {
  retuirnData: {},
};
const reduce = (state = initialState, action) => {
  switch (action.type) {
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
