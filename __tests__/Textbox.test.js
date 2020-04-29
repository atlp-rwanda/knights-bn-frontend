import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReactTestRenderer from 'react-test-renderer';
import Textbox from '../src/components/Textbox';

describe('Test the Textbox ', () => {
  afterEach(cleanup);
  it('renders without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Textbox />, div);
  });
  it('matches snapshot', () => {
    const tree = ReactTestRenderer.create(
      <Textbox id="button" placeholder="email" />
    );
    expect(tree).toMatchSnapshot();
  });
});
