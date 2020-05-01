import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import rootReduce from '../reducers/index';

const store = createStore(
  rootReduce,
  applyMiddleware(thunk),
);

export default store;
