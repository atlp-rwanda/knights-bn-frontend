import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReactTestRenderer from 'react-test-renderer';
import SubmitButton from '../src/components/Button';

describe('Test the submit button ', () => {
  afterEach(cleanup);
  it('renders without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SubmitButton />, div);
  });

  it('should render button correctly', () => {
    const { getByTestId } = render(<SubmitButton id="button" label="log in" />);
    expect(getByTestId('button')).toHaveTextContent('log in');
  });
  it('should render button correctly', () => {
    const { getByTestId } = render(
      <SubmitButton id="button" label="log out" />
    );
    expect(getByTestId('button')).toHaveTextContent('log out');
  });

  it('matches snapshot', () => {
    const tree = ReactTestRenderer.create(
      <SubmitButton id="button" label="log in" />
    );
    expect(tree).toMatchSnapshot();
  });
});
