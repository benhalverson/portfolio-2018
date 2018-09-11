import React from 'react';
import { shallow } from 'enzyme';
import BiomarinBranded from '../../components/BiomarinBranded';
test('it should render the BiomarinBranded component', () => {
  const wrapper = shallow(<BiomarinBranded/>);
  expect(wrapper).toMatchSnapshot();
});