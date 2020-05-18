import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './route/App';
import configureStore from './redux';
import './i18next';

const store = configureStore();

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
