import { combineReducers } from 'redux';
import auth from './auth';
import eventHandler from './eventHandler';

const reducers = combineReducers({ auth, eventHandler });

export default reducers;
