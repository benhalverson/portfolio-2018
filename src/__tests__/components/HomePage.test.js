import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../../components/HomePage';
test('it should render the homepage', () => {
  const wrapper = shallow(<HomePage />);
  expect(wrapper).toMatchSnapshot();
});
