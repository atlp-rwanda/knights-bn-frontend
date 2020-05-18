import {
  VALIDATE_LOGIN_INPUT,
  VALIDATE_SIGNUP_INPUT,
  SET_LOADING_STATUS,
  RESET_INPUT_FIELDS,
  VALIDATE_FORM,
} from '../actions/actionTypes';
import loginValidations from '../../util/loginValidations';
import signupValidations from '../../util/signupValidations';

export default (state, action) => {
  let validationStatus;
  const initialState = {
    user: {},
    validations: {
      login: {},
      signup: {
        firstName: 'is-invalid',
        lastName: 'is-invalid',
        email: 'is-invalid',
        password: 'is-invalid',
        confirmPassword: 'is-invalid',
        gender: 'is-invalid',
      },
    },
    isLoading: false,
    isValidated: false,
  };
  switch (action.type) {
    case VALIDATE_LOGIN_INPUT:
      if (action.payload.key === 'confirmPassword') {
        const password = { key: 'password', value: state.user.password };
        const confirmPassword = action.payload;
        validationStatus = loginValidations(password, confirmPassword);
      } else validationStatus = loginValidations(action.payload);
      return {
        ...state,
        user: {
          ...state.user,
          [action.payload.key]: action.payload.value,
        },
        validations: {
          ...state.validations,
          login: {
            ...state.validations.login,
            [action.payload.key]: validationStatus,
          },
        },
      };
    case VALIDATE_SIGNUP_INPUT:
      if (action.payload.key === 'confirmPassword') {
        const password = { key: 'password', value: state.user.password };
        const confirmPassword = action.payload;
        validationStatus = signupValidations(password, confirmPassword);
      } else validationStatus = signupValidations(action.payload);
      return {
        ...state,
        user: {
          ...state.user,
          [action.payload.key]: action.payload.value,
        },
        validations: {
          ...state.validations,
          signup: {
            ...state.validations.signup,
            [action.payload.key]: validationStatus,
          },
        },
      };

    case SET_LOADING_STATUS:
      return {
        ...state,
        isLoading: action.status,
      };
    case RESET_INPUT_FIELDS:
      return initialState;
    case VALIDATE_FORM:
      return {
        ...state,
        isValidated: action.status,
      };
    default:
      return state || initialState;
  }
};
