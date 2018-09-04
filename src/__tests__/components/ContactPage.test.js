import React from 'react';
import { shallow } from 'enzyme';
import ContactPage from '../../components/ContactPage';
test('it should render the ContactPage', () => {
  const wrapper = shallow(<ContactPage/>);
  expect(wrapper).toMatchSnapshot();
});