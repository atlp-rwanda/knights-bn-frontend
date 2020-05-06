import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Line from '../../src/components/line';

describe('Test Line component', () => {
  afterEach(cleanup);
  it('renders without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Line />, div);
  });
  it('renders', () => {
    const { asFragment } = render(<Line className="Line" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
