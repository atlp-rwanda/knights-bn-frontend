import { REGISTER_USER } from '../actions/actionTypes';

const initialState = {
  isValidated: false,
  user: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passportNumber: '',
    gender: '',
  },
};
export default (state = initialState, action) => {
  console.log('registered user: ', action.payload);

  switch (action.type) {
    case REGISTER_USER: return action.payload;
    default: return state;
  }
};
