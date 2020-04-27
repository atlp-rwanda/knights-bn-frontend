import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://knights-bn-backnd.herokuapp.com/api/v1',
});

const callApiThunk = (
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


export {
  callApiThunk,
};
