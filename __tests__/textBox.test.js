import React from 'react';
import { mount } from '../setupTests';
import TextBox from '../src/components/Textbox';


describe('<TextBox />', () => {
  test('renders without crashing', () => {
    const component = mount(<TextBox />);
    const input = component.find('TextBox');
    input.simulate('change', { target: { value: 'alain' } });
    expect(component).toHaveLength(1);
  });
});
