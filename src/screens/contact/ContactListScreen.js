import React from 'react';
import { View, SectionList, ActivityIndicator, Text, StyleSheet } from 'react-native';

import ContactListItem from './components/ContactListItem';
import generateSections from '../../utils/generateSections';
import ContactService from './ContactService';
import Styles from '../../utils/Styles';

class ContactListScreen extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      contacts: [],
      loading: false,
    }
  }

  async componentDidMount() {
    this.focusListener = this.props.navigation.addListener('didFocus', () => {
      this.getContacts();
    })
  }

  componentWillUnmount() {
    this.focusListener.remove();
  }

  getContacts = () => {
    console.log('fetch contact ...');
    const _getContacts = ContactService.getContacts();

    const startLoading = () => this.setState({ loading: true });
    const endLoading = () => this.setState({ loading: false });
    
    const handleSuccess = (contacts => {
      const contactsBySections = generateSections(contacts);
      this.setState({
        contacts: contactsBySections,
        loading: false,
      });
    });
    const handleFail = (err) => console.log(err);

    startLoading();
    _getContacts.then(handleSuccess, endLoading).catch(handleFail);

    return _getContacts;
  }

  handleItemPressed = (contact) => this.props.navigation.push('ContactDetailScreen', {contact});

  renderContactItem = ({item}) => <ContactListItem contact={item} onPress={this.handleItemPressed}/>

  renderSectionHeader = ({section}) => (
    <View style={styles.sectionHeader}>
      <Text >{section.title}</Text>
    </View>
  )

  render() {
    const { contacts } = this.state;
    
    return (
      <View>
        {this.state.loading && (
          <ActivityIndicator id="loading-indicator" size="large"/>
        )}
        <SectionList
          id="section-list"
          sections={contacts}
          renderItem={this.renderContactItem}
          renderSectionHeader={this.renderSectionHeader}
          keyExtractor={(item, index) => item + index}
        />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  sectionHeader: {
    paddingLeft: Styles.DefaultPadding,
    paddingTop: Styles.DefaultPadding
  }
})

export default ContactListScreen;