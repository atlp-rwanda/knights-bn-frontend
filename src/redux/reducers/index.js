import { combineReducers } from 'redux';
import userReducer from './userReducer';
import eventHandler from './eventHandler';
import errorHandler from './errorHandler';

const rootReduce = combineReducers({ user: userReducer, eventHandler, errorHandler });

export default rootReduce;
