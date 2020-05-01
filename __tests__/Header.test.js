import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../src/components/Header';

describe('===== Test Header =====', () => {
  afterEach(cleanup);
  it('renders without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
  });
  it('renders', () => {
    const { asFragment } = render(<Header text="Hello from Knights" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
