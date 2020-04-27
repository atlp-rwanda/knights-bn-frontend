import { RESET_PASSWORD, LOADING, REQUEST_ERROR } from './types';

const resetUserPassword = (message) => ({
  type: RESET_PASSWORD,
  payload: message,
});
const requestError = (err) => ({
  type: REQUEST_ERROR,
  payload: err,
});

const waitForRequest = () => ({
  type: LOADING,
  payload: 'Loading ....',
});

export {
  resetUserPassword,
  requestError,
  waitForRequest,
};
