
import React from 'react';
import { shallow } from 'enzyme';
import '../../src/i18next';
import { SelectInput, SocialLogin } from '../../src/util/customInput/customInputs';

describe('Change passwordForm', () => {
  it('form test', async () => {
    const wrapper = shallow(
      <SelectInput />,
    );
    expect(wrapper.props().children[0].type).toEqual('select');
  });
  it('form test', async () => {
    const wrapper = shallow(
      <SocialLogin />,
    );
    expect(wrapper.props().children[0].type).toEqual('span');
  });
});
