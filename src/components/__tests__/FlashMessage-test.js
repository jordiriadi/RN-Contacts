import 'react-native';
import React from 'react';
import {shallow} from 'enzyme';

import FlashMessage from '../FlashMessage';

describe('FlashMessage Component', () => {  
  it('renders correctly', () => {
  
    const wrapper = shallow(<FlashMessage/>);

    expect(wrapper).toMatchSnapshot();
  });

})