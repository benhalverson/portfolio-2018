import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/Footer';
test('it should render the Footer', () => {
  const wrapper = shallow(<Footer/>);
  expect(wrapper).toMatchSnapshot();
});