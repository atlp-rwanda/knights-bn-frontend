import { HANDLE_CHANGE } from '../actions/actionTypes';
import inputValidation from '../../helpers/inputValidations';

const initialState = {
  isValidated: '',
  user: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    passportNumber: '',
    gender: '',
  },
  validations: {},
};
export default (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CHANGE: {
      let validationStatus;
      if (action.payload.key === 'confirmPassword') {
        const password = { key: 'password', value: state.user.password };
        const confirmPassword = action.payload;
        validationStatus = inputValidation(password, confirmPassword);
      } else validationStatus = inputValidation(action.payload);
      return {
        ...state,
        user: {
          ...state.user,
          [action.payload.key]: action.payload.value,
        },
        validations: {
          ...state.validations,
          [action.payload.key]: validationStatus,
        },
      };
    }
    default: return state;
  }
};
