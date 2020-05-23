import { GET_PENDING_REQUESTS, APPROVE_REQUESTS } from './actionTypes';

export const pendingRequests = (requests) => ({
  type: GET_PENDING_REQUESTS,
  payload: requests,
});
export const requestAction = (message) => ({
  type: APPROVE_REQUESTS,
  message,
});
