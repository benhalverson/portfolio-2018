import React from 'react';
import { shallow } from 'enzyme';
import GSKVaccines from '../../components/GSKVaccines';
test('it should render the GSKVaccines component', () => {
  const wrapper = shallow(<GSKVaccines/>);
  expect(wrapper).toMatchSnapshot();
});