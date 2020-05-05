import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../../src/components/Footer';

describe('Test Footer component', () => {
  afterEach(cleanup);
  it('renders without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer />, div);
  });
});
