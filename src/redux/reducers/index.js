import { combineReducers } from 'redux';
import userReducer from './userReducer';

const rootReduce = combineReducers({
  user: userReducer,
});

export default rootReduce;
