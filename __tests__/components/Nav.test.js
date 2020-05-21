import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import NavAuth from '../../src/components/NavAuth';

describe('Test Nav component', () => {
  it('should render Nav component', () => {
    const NavComponent = renderer.create(
      <Router>
        <NavAuth />
      </Router>,
    ).toJSON();
    expect(NavComponent).toMatchSnapshot();
  });
});
