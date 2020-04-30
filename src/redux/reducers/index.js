import { combineReducers } from 'redux';
import userReducer from './userReducer';
import eventHandler from './eventHandler';

const rootReduce = combineReducers({ user: userReducer, eventHandler });

export default rootReduce;
