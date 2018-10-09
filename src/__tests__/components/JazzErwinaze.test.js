import React from 'react';
import { shallow } from 'enzyme';
import JazzErwinaze from '../../components/JazzErwinaze';
test('it should render the JazzErwinaze component', () => {
  const wrapper = shallow(<JazzErwinaze />);
  expect(wrapper).toMatchSnapshot();
});
