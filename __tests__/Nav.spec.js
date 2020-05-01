import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from '../src/components/Nav';
import store from '../src/redux/store';

const NavComponent = () => render(
  <Provider store={store}>
    <Router>
      <Nav />
    </Router>
  </Provider>,
);
describe('=============>Nav<=============', () => {
  afterEach(cleanup);
  it('should render Nav component', () => {
    const { asFragment } = NavComponent();
    expect(asFragment(<Nav />)).toMatchSnapshot();
  });
});
