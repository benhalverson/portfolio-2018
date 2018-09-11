import React from 'react';
import { shallow } from 'enzyme';
import BiomarinUnBranded from '../../components/BiomarinUnbranded';
test('it should render the BiomarinUnBranded component', () => {
  const wrapper = shallow(<BiomarinUnBranded/>);
  expect(wrapper).toMatchSnapshot();
});