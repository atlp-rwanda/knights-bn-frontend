
import { Provider } from 'react-redux';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '../../src/i18next';
import renderer from 'react-test-renderer';
import Nav from '../../src/components/Nav';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('Test Nav component', () => {
  it('should render Nav component', () => {
    const store = mockStore(
      {
        AuthReducer: { isAuthenticated: false },
      },
    );
    const NavComponent = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(NavComponent).toMatchSnapshot();
  });
  it('should render Nav component', () => {
    const store = mockStore(
      {
        AuthReducer: {
          isAuthenticated: true,
          role: 'superAdmin',
        },
      },
    );
    const NavComponent = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(NavComponent).toMatchSnapshot();
  });
});
