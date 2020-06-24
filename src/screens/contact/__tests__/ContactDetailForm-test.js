import 'react-native';
import React from 'react';
import {shallow} from 'enzyme';

import ContactDetailForm from '../ContactDetailForm';

const mockData = {
  "age": "33",
  "firstName": "LukeTheSecond",
  "id": "b3abd640-b22g-11e8-b02f-cbfa15db428b",
  "lastName": "Skywalker", 
  "initial": "SL",
  "photo": "N/A"
}

describe('Contact  Detail Form', () => {  
  it('renders correctly', () => {
    
    const wrapper = shallow(<ContactDetailForm contact={mockData}/>);

    expect(wrapper).toMatchSnapshot();
  });
})