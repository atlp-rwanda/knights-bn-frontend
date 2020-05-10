import React from 'react';
import { mount } from '../../setupTests';
import TextBox from '../../src/components/Textbox';

describe('<TextBox />', () => {
  it('renders without crashing', () => {
    const props = {
      onChange: jest.fn(),
      name: 'email',
      value: 'value',
      isValid: 'is-invalid',
    };
    const component = mount(<TextBox {...props} />);
    const input = component.find('input');
    input.simulate('change', { target: { value: 'alain' } });
    expect(component).toHaveLength(1);
  });
  it('should hide errors if the form-inputs are valid', () => {
    const props = {
      onChange: jest.fn(),
      name: 'email',
      value: 'value',
      isValid: 'is-valid',
    };
    const component = mount(<TextBox {...props} />);
    const input = component.find('input');
    input.simulate('change', { target: { value: 'alain' } });
    expect(component).toHaveLength(1);
  });

  it('renders without crashing', () => {
    const props = {
      onChange: jest.fn(),
      name: 'email',
      value: 'alain',
      isValid: 'is-invalid',
      isProfile: true,
    };
    const component = mount(<TextBox {...props} />);
    const input = component.find('input');
    input.simulate('change', { target: { value: 'alain' } });
    expect(component).toHaveLength(1);
  });
});
