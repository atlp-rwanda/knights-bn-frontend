import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://knights-bn-backnd.herokuapp.com/api/v1',
});

const postThunk = (
  method,
  path,
  action,
  body,
) => (dispatch) => axiosInstance[method](path, body)
  .then((response) => {
    dispatch(action({ ...response.data, isLoggedIn: true }));
  })
  .catch((error) => {
    dispatch(action({ ...error.response.data, isLoggedIn: false }));
  });

const getThunk = (method,
  path,
  action) => (dispatch) => axiosInstance[method](path)
  .then((response) => {
    dispatch(action(response.data));
  })
  .catch((error) => {
    dispatch(action({
      errors: error,
    }));
  });


export {
  getThunk, postThunk,
};
