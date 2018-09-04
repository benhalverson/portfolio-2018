import React from 'react';
import { shallow } from 'enzyme';
import PortfolioPage from '../../components/PortfolioPage';
test('it should render the PortfolioPage', () => {
  const wrapper = shallow(<PortfolioPage/>);
  expect(wrapper).toMatchSnapshot();
});