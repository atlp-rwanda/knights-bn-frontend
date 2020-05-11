import { combineReducers } from 'redux';
import userReducer from './userReducer';
import errorHandler from './errorHandler';
import successHandler from './successHandler';
import AuthReducer from './authReducer';

const rootReduce = combineReducers({
  user: userReducer,
  errorHandler,
  successHandler,
  AuthReducer,
});

export default rootReduce;
