import { GET_PENDING_REQUESTS, APPROVE_REQUESTS } from '../actions/actionTypes';

const reduce = (state, action) => {
  switch (action.type) {
    case GET_PENDING_REQUESTS:
      return {
        ...state,
        data: action.payload,
      };
    case APPROVE_REQUESTS:
      return {
        ...state,
        approvalData: action.message,
      };
    default:
      return (
        state || {
          approvalData: { message: '' },
          loading: false,
          token: '',
          error: '',
          data: {
            message: '',
          },
        });
  }
};
export default reduce;
