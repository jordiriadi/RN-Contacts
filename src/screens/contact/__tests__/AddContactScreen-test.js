import 'react-native';
import React from 'react';
import {shallow} from 'enzyme';

import AddContactScreen from '../AddContactScreen';
import ContactService from '../ContactService';

const mockData = {
  "age": "33",
  "firstName": "LukeTheSecond",
  "id": "b3abd640-b22g-11e8-b02f-cbfa15db428b",
  "lastName": "Skywalker", 
  "photo": "N/A"
}

ContactService.addContact = jest.fn(() => Promise.resolve(mockData));

describe('Add Contact Screen', () => {  
  it('renders correctly', () => {
  
    const wrapper = shallow(<AddContactScreen/>);

    expect(wrapper).toMatchSnapshot();
  });

  it('can trigger handle add contact', () => {
    const component = shallow(<AddContactScreen/>);

    expect(component.instance().handleAddContact());
  });
})