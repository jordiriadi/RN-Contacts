import 'react-native';
import React from 'react';
import {shallow} from 'enzyme';

import Button from '../Button';

describe('Button Component', () => {  
  it('renders correctly', () => {
  
    const wrapper = shallow(<Button/>);

    expect(wrapper).toMatchSnapshot();
  });

})