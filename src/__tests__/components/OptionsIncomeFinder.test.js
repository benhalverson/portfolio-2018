import React from 'react';
import { shallow } from 'enzyme';
import OptionsIncomeFinder from '../../components/OptionsIncomeFinder';
test('it should render the OptionsIncomeFinder component', () => {
  const wrapper = shallow(<OptionsIncomeFinder/>);
  expect(wrapper).toMatchSnapshot();
});