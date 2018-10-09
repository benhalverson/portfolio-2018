import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';
test('it should render the Header', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
