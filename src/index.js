import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import localStorage from 'localStorage';
import jwtDecode from 'jwt-decode';
import App from './route/App';
import configureStore from './redux';
import './i18next';
import { setCurentUser } from './redux/actions/actions';

const store = configureStore();
if (localStorage.getItem('user-token')) {
  store.dispatch(setCurentUser({ ...jwtDecode(localStorage.getItem('user-token')), isAuthenticated: true }));
}
ReactDOM.render(
  <Suspense fallback="Loading ...">
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </Suspense>,
  document.getElementById('root'),
);
