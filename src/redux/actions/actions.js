import axios from 'axios';
import * as types from './actionTypes';

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