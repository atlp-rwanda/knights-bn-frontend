import React from 'react';
import { shallow } from 'enzyme';
import ButtonComponent from '../../src/components/Button';

describe('Change passwordForm', () => {
  it('test button component', () => {
    const props = {
      onClick: jest.fn(),
    };
    const wrapper = shallow(
      <ButtonComponent {...props} />,
    );
    expect(wrapper.props().children.type.defaultProps.type).toEqual('button');
  });
});
