import 'react-native';
import React from 'react';
import {shallow} from 'enzyme';

import ButtonWithIcon from '../ButtonWithIcon';

describe('ButtonWithIcon Component', () => {  
  it('renders correctly', () => {
  
    const wrapper = shallow(<ButtonWithIcon/>);

    expect(wrapper).toMatchSnapshot();
  });

})