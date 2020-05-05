import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Nav from '../../src/components/Nav';

describe('Test Nav component', () => {
  it('should render Nav component', () => {
    const NavComponent = renderer.create(
      <Router>
        <Nav />
      </Router>,
    ).toJSON();
    expect(NavComponent).toMatchSnapshot();
  });
});
