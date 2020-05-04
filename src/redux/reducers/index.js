import { combineReducers } from 'redux';
import userReducer from './userReducer';
import eventHandler from './eventHandler';
import errorHandler from './errorHandler';
import successHandler from './successHandler';

const rootReduce = combineReducers({
  user: userReducer, eventHandler, errorHandler, successHandler,
});

export default rootReduce;
