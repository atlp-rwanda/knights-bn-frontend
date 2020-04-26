import { REGISTER_USER, HANDLE_CHANGE, VALIDATE_INPUT } from './actionTypes';

export const registerUser = (user) => ({
  type: REGISTER_USER,
  payload: { user },
});

export const handleChange = (target) => ({
  type: HANDLE_CHANGE,
  payload: {
    key: target.name,
    value: target.value,
  },
});

// export const validateInput = (input) => ({
//   type: VALIDATE_INPUT,
//   payload: { input },
// });
