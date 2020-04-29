
import { USER_LOGIN_SUCCESS, USER_SIGNUP_SUCCESS } from './userTypes';

export const loginUsersSuccess = (users) => ({
  type: USER_LOGIN_SUCCESS,
  payload: users,
});

export const signUpUsersSuccess = (users) => ({
  type: USER_SIGNUP_SUCCESS,
  payload: users,
});
