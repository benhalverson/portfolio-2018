import React from 'react';
import { shallow } from 'enzyme';

import OptionsBacktester from '../../components/OptionsBacktester';
test('it should render the OptionsBacktester component', () => {
  const wrapper = shallow(<OptionsBacktester />);
  expect(wrapper).toMatchSnapshot();
});
