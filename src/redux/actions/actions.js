import axios from 'axios';
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

export const fetchUsers = (data) => (dispatch) => {
  dispatch(fetchUsersRequest());
  axios
    .post('https://knights-bn-backnd.herokuapp.com/api/v1/auth/login', data, {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((res) => {
      const response = res.data.token;
      dispatch(fetchUsersSuccess(response));
    })
    .catch((error) => {
      const errorMsg = error;
      dispatch(fetchUsersFailure(errorMsg));
    });
};
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
