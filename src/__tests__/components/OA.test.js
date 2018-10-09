import React from 'react';
import { shallow } from 'enzyme';
import OA from '../../components/OA';
test('it should render the GSKVaccines component', () => {
  const wrapper = shallow(<OA />);
  expect(wrapper).toMatchSnapshot();
});
