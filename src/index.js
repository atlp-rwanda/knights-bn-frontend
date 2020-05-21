import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import App from './route/App';
import configureStore from './redux';
import i18n from './i18next';

const store = configureStore();

ReactDOM.render(
  <Suspense fallback="Loading ...">
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </I18nextProvider>
  </Suspense>,
  document.getElementById('root'),
);
