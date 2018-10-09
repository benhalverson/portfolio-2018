import React from 'react';
import { shallow } from 'enzyme';
import BlogPage from '../../components/BlogPage';
test('it should render the BlogPage', () => {
  const wrapper = shallow(<BlogPage />);
  expect(wrapper).toMatchSnapshot();
});
