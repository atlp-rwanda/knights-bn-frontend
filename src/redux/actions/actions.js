import * as types from './actionTypes';

export const fetchUsersRequest = () => ({
  type: types.FETCH_USERS_REQUEST,
});
export const fetchUsersSuccess = (users) => ({
  type: types.FETCH_USERS_SUCCESS,
  payload: users,
});
export const fetchUsersFailure = (error) => ({
  type: types.FETCH_USERS_FAILURE,
  payload: error,
});
export const validateInput = (target) => ({
  type: types.VALIDATE_INPUT,
  payload: {
    key: target.name,
    value: target.value,
  },
});

export const loginUsersSuccess = (users) => ({
  type: types.USER_LOGIN_SUCCESS,
  payload: users,
});

export const handleError = (error) => ({
  type: types.HANDLE_ERROR,
  error,
});

export const setLoadingStatus = (status) => ({
  type: types.SET_LOADING_STATUS,
  status,
});

export const handleSuccess = (message) => ({
  type: types.HANDLE_SUCCESS,
  message,
});

export const resetInputFields = () => ({ type: types.RESET_INPUT_FIELDS });
export const validateForm = (status) => ({
  type: types.VALIDATE_FORM,
  status,
});
