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

export const userProfile = (user) => ({
  type: types.USER_PROFILE,
  payload: user,
});
export const updateUserProfile = (user) => ({
  type: types.UPDATE_USER_PROFILE,
  payload: user,
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

export const createAccommodation = (accommodation) => ({
  type: types.CREATE_ACCOMMODATION,
  payload: accommodation,
});
export const getAccommodations = (accommodations) => ({
  type: types.GET_ACCOMMODATIONS,
  payload: accommodations,
});

export const bookAccommodation = (payload) => ({
  type: types.BOOK_ACCOMMODATION,
  payload,
});
export const getNotifications = (notification) => ({
  type: types.GET_NOTIFICATION,
  payload: notification,
});
export const markAllAsRead = (message) => ({
  type: types.MARK_READ,
  message,
});
