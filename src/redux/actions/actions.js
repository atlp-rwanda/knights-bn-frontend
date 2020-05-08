
import * as types from './actionTypes';

export const validateLoginInput = (target) => ({
  type: types.VALIDATE_LOGIN_INPUT,
  payload: {
    key: target.name,
    value: target.value,
  },
});

export const validateSignupInput = (target) => ({
  type: types.VALIDATE_SIGNUP_INPUT,
  payload: {
    key: target.name,
    value: target.value,
  },
});

export const viewAllUsers = (allUsers) => ({
  type: types.GET_ALL_USERS,
  payload: allUsers,
});

export const viewOneUser = (oneUser) => ({
  type: types.GET_ONE_USER,
  payload: oneUser,
});

export const updateUserRole = (data) => ({
  type: types.UPDATE_ROLE,
  payload: data,
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

export const clearErrorMsg = () => ({
  type: types.CLEAR_ERROR_MSG,
});
export const clearSuccessMsg = () => ({
  type: types.CLEAR_SUCCESS_MSG,
});
export const resetUserPassword = (message) => ({
  type: types.RESET_PASSWORD,
  payload: message,
});
