import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import ContactListScreen from '../ContactListScreen';
import ContactService from '../ContactService';
import ContactListItem from '../components/ContactListItem';

const data = [
  {
    "age": "20",
    "firstName": "Luke",
    "id": "b3abd640-c92b-11e8-b02f-cbfa15db428b",
    "initial": "LS",
    "lastName": "Skywalker",
    "name": "Luke Skywalker",
    "photo": "N/A"
  },
  {
    "age": "33",
    "firstName": "LukeTheSecond",
    "id": "b3abd640-b22g-11e8-b02f-cbfa15db428b",
    "initial": "LS",
    "lastName": "Skywalker",
    "name": "LukeTheSecond Skywalker",
    "photo": "N/A"
  }
]

const mockData = [
  {    
    title: "A",
    data: data
  },
  {    
    title: "B",
    data: data
  },
]

ContactService.getContacts = jest.fn(() => Promise.resolve(mockData));


describe('Contact List Screen', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ContactListScreen />);

    expect(wrapper).toMatchSnapshot();
  });

  it('Show Contact List', () => {
    const wrapper = shallow(<ContactListScreen />);

    wrapper.setState({ loading: true });
    expect(wrapper.state().loading).toEqual(true);
    expect(wrapper.find('#loading-indicator'))
  });

  it('Show Contact List', () => {
    const wrapper = shallow(<ContactListScreen />);

    expect(wrapper.find('#list-container'));
    expect(wrapper.find('#section-list'))
  });

  it('can trigger most of component functions', () => {
    const wrapper = shallow(<ContactListScreen />);

    wrapper.setState({contact: mockData});
    expect(wrapper.state().contact).toEqual(mockData);

    expect(wrapper.instance().getContacts());
  });
});

