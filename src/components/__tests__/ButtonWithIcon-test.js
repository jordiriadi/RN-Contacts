import 'react-native';
import React from 'react';
import {shallow} from 'enzyme';

import ButtonWithIcon from '../ButtonWithIcon';

const props = {
  buttonText: "button"
}

describe('ButtonWithIcon Component', () => {  
  it('renders correctly', () => {
  
    const wrapper = shallow(<ButtonWithIcon {...props}/>);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('#btn-container'));
  });

})