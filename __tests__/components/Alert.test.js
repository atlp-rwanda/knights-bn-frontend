import React from 'react';
import Alert from '../../src/components/Alert';
import { mount } from '../../setupTests';

describe('Testing alert component', () => {
  it('Should turn green on success', () => {
    const props = {
      isSuccess: true,
    };
    const wrapper = mount(<Alert {...props} />);
    expect(wrapper.find('p')).toHaveClassName('alert alert__success text-success');
  });
});
