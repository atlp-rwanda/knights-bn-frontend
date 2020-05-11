import axios from 'axios';
import localStorage from 'localStorage';
import decodeJwt from 'jwt-decode';
import { setCurentUser, clearErrorMsg } from '../actions/actions';

const userToken = localStorage.getItem('user-token');
axios.defaults.headers['user-token'] = userToken;

const axiosInstance = axios.create({
  baseURL: 'https://knights-bn-backnd.herokuapp.com/api/v1',
});

const authThunk = (
  method,
  path,
  action,
  body,
) => (dispatch) => {
  dispatch(action({ loading: true }));
  return axiosInstance[method](path, body)
    .then((response) => {
      if (!response.data.token) dispatch(action({ ...response.data, loading: false }));
      localStorage.setItem('user-token', response.data.token);
      dispatch(action({
        ...decodeJwt(response.data.token),
        ...response.data,
        isAuthenticated: true,
        loading: false,
      }));
    })
    .catch((error) => {
      dispatch(action({
        ...error.response.data,
        isAuthenticated: false,
        loading: false,
      }));
    });
};

const callApiThunk = (method, path, action, body) => (dispatch) => axiosInstance[method](path, body)
  .then((response) => {
    dispatch(action({ ...response.data, isLoggedIn: true, loading: false }));
  })
  .catch((error) => {
    dispatch(action({ ...error.response.data, isLoggedIn: false, loading: false }));
  });

const resetPassword = (
  method,
  path,
  action,
  body,
  token,
) => (dispatch) => {
  dispatch(action({ loading: true }));
  return axiosInstance[method](path, body).then((response) => {
    localStorage.setItem('user-token', token);
    dispatch(action({
      ...decodeJwt(token), ...response.data, isAuthenticated: true, loading: false,
    }));
  }).catch((error) => {
    dispatch(action({
      ...error.response.data, isAuthenticated: false, loading: false,
    }));
  });
};

const logout = () => (dispatch) => {
  localStorage.removeItem('user-token');
  dispatch(setCurentUser({ isAuthenticated: false }));
};
const clearMessage = () => (dispatch) => {
  dispatch(clearErrorMsg());
};
export {
  axiosInstance,
  authThunk,
  callApiThunk,
  resetPassword,
  logout,
  clearMessage,
};
