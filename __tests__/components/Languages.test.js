import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Languages from '../../src/components/Languages';
import '../../src/i18next';

describe('Languages component', () => {
  it('renders correctly', () => {
    const component = renderer
      .create(<Languages />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
  it('displays available languages', () => {
    const wrapper = mount(<Languages />);
    expect(wrapper.find('option')).toHaveLength(4);
  });
  it('switches french', () => {
    const handleChange = jest.fn();
    const wrapper = mount(<Languages onChange={(e) => handleChange(e)} />);
    const select = wrapper.find('select');
    expect(select).toExist();

    select.simulate('change', { target: { value: 'fr' } });
  });
  it('switches ikinyarwanda', () => {
    const handleChange = jest.fn();
    const wrapper = mount(<Languages onChange={(e) => handleChange(e)} />);
    const select = wrapper.find('select');
    expect(select).toExist();

    select.simulate('change', { target: { value: 'ki' } });
  });
  it('switches to english ', () => {
    const handleChange = jest.fn();
    const wrapper = mount(<Languages onChange={(e) => handleChange(e)} />);
    const select = wrapper.find('select');
    expect(select).toExist();

    select.simulate('change', { target: { value: 'en' } });
  });
  it('switches language to default', () => {
    const handleChange = jest.fn();
    const wrapper = mount(<Languages onChange={(e) => handleChange(e)} />);
    const select = wrapper.find('select');
    expect(select).toExist();
    select.simulate('change', { target: { value: 'any' } });
  });
});
