import React from 'react';
import { shallow } from 'enzyme';
import ContactListItem from '../ContactListItem';

describe.only('Testing Contact List Item component', () => {
  const firstContact = {
    "age": "20",
    "firstName": "Luke",
    "id": "b3abd640-c92b-11e8-b02f-cbfa15db428b",
    "initial": "LS", 
    "lastName": "Skywalker", 
    "name": "Luke Skywalker", 
    "photo": "N/A"
  }
  const secondContact = {
    "age": "33",
    "firstName": "LukeTheSecond",
    "id": "b3abd640-b22g-11e8-b02f-cbfa15db428b",
    "initial": "LS", 
    "lastName": "Skywalker", 
    "name": "LukeTheSecond Skywalker", 
    "photo": "N/A"
  }

  it('renders as expected', () => {
    const wrapper = shallow(
      <ContactListItem contact={firstContact} />
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ secondContact });
    expect(wrapper).toMatchSnapshot();
  });
});