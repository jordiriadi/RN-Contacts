import 'react-native';
import React from 'react';
import {shallow} from 'enzyme';

import EditContactScreen from '../EditContactScreen';
import ContactService from '../ContactService';

const mockData = {
  "age": "33",
  "firstName": "LukeTheSecond",
  "id": "b3abd640-b22g-11e8-b02f-cbfa15db428b",
  "lastName": "Skywalker", 
  "photo": "N/A"
}

const mockProps = {
  navigation: {
    state: {
      params: {
        contact: mockData,
      }
    },
    setParams: jest.fn(),
    push: jest.fn(),
    navigate: jest.fn(),
    goBack: jest.fn(),
  }
}

ContactService.updateContact = jest.fn(() => Promise.resolve(mockData));

describe('Edit Contact Screen', () => {  
  it('renders correctly', () => {
  
    const wrapper = shallow(<EditContactScreen {...mockProps}/>);

    expect(wrapper).toMatchSnapshot();
  });

  it('can trigger handle edit contact', () => {
    const component = shallow(<EditContactScreen {...mockProps}/>);

    expect(component.instance().handleUpdateContact(mockData));
  });
})