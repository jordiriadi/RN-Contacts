import 'react-native';
import React from 'react';
import {shallow} from 'enzyme';

import ModifyContactForm from '../ModifyContactForm';

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
  
    const wrapper = shallow(<ModifyContactForm contact={mockData}/>);

    expect(wrapper).toMatchSnapshot();
  });

  
  it('can add contact correctly', () => {
    const wrapper = shallow(<ModifyContactForm modify="create" contact={mockData} />);

    wrapper.setState({fieldValues: mockData});
    expect(wrapper.state().fieldValues).toEqual(mockData);

    wrapper.find('#input-age').simulate('changeText', '23');
    wrapper.find('#input-firstName').simulate('changeText', 'first name');
    wrapper.find('#btn-save').simulate('click');
    expect(wrapper).toMatchSnapshot();
  });
})