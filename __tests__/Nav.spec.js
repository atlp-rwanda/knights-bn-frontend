import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Nav from '../src/components/Nav';

describe('<Nav />', () => {
  afterEach(cleanup);
  it('renders without crushing', async () => {
    const div = document.createElement('div');
    ReactDOM.render(<Nav />, div);
  });
});
