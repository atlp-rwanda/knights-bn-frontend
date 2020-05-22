import { MY_REQUESTS } from '../actions/actionTypes';

const initialState = {
  myRequests: {
    message: '',
    allMyRequest: [],
  },
};
export default (state = initialState, action) => {
  switch (action.type) {
    case MY_REQUESTS:
      return {
        ...state.myRequests,
        ...action.data,

      };
    default: return state;
  }
};
