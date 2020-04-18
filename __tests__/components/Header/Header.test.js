import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReactTestRenderer from 'react-test-renderer';
import Header from '../../../src/components/Header';

describe('Testing Header component', () => {
  it('should render with no error', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
  });

  it('renders Header correctly', () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId('header')).toHaveTextContent('Barefoot Nomad');
  });
  it('matches the snapshot', () => {
    const renderer = ReactTestRenderer.create(<Header />);
    expect(renderer).toMatchSnapshot();
  });
});
