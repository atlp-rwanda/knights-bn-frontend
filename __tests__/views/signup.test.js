import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../../src/redux/store';
import Signup from '../../src/views/Signup';
import { mount, shallow } from '../../setupTests';

describe('Test Signup page', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Signup />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should include a spinner and a form', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Provider store={store}>
          <Signup />
        </Provider>
      </MemoryRouter>,
    );
    expect(wrapper.find('Spinner')).toExist();
    expect(wrapper.find('Form')).toExist();
    wrapper.unmount();
  });
});
