import React from 'react';
import { mount } from '../setupTests';
import TextBox from '../src/components/Textbox';


describe('<TextBox />', () => {
  it('renders without crashing', () => {
    const props = {
      onChange: jest.fn(),
      name: 'email',
      value: 'value',
    };
    const component = mount(<TextBox {...props} />);
    const input = component.find('input');
    input.simulate('change', { target: { value: 'alain' } });
    expect(component).toHaveLength(1);
  });
});
