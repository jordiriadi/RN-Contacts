import 'react-native';
import React from 'react';
import {shallow} from 'enzyme';

import ContactDetailScreen from '../ContactDetailScreen';
import ContactService from '../ContactService';

const mockData = {
  "age": "33",
  "firstName": "LukeTheSecond",
  "id": "b3abd640-b22g-11e8-b02f-cbfa15db428b",
  "lastName": "Skywalker", 
  "initial": "SL",
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
    navigate: jest.fn()
  }
}


ContactService.handleDelete = jest.fn(() => Promise.resolve(mockData));

describe('Contact Detail Screen', () => {  
  it('renders correctly', () => {
      
    const wrapper = shallow(<ContactDetailScreen  {...mockProps}/>);

    expect(wrapper).toMatchSnapshot();
  });

  it('can trigger most of component functions', () => {
    const wrapper = shallow(<ContactDetailScreen  {...mockProps}/>);

    wrapper.setState({contact: mockData});
    expect(wrapper.state().contact).toEqual(mockData);

    expect(wrapper.instance().handleGoToEditScreen());
    expect(wrapper.instance().handleDelete());
  });

});