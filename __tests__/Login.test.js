import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReactTestRenderer from 'react-test-renderer';
import Login from '../src/components/Textbox';

describe('<Login />', () => {
  afterEach(cleanup);
  it('renders without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Login />, div);
  });
  it('matches snapshot', () => {
    const tree = ReactTestRenderer.create(<Login />);
    expect(tree).toMatchSnapshot();
  });
});
