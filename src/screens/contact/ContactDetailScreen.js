import React from 'react';
import { StyleSheet, View } from 'react-native';

import ContactDetailForm from './ContactDetailForm';
import FlashMessage from '../../components/FlashMessage';
import Button from '../../components/Button';
import DeleteAlert from './components/DeleteAlert';
import ContactService from './ContactService';
import Styles from '../../utils/Styles';

class ContactDetailScreen extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      contact: {},
      showDeleteAlert: false,
      error: null,
    }
  }

  static navigationOptions = ({ navigation }) => ({
    headerRight: () => (
      <View style={{flexDirection: 'row'}}>
        <Button
          type="clear"
          color="orangered"
          onPress={navigation.getParam('handleOpenAlert')}
        >
          Delete
          </Button>
      </View>
    ),
  });

  componentDidMount() {
    this.setDeleteFunction();
    this.setState({
      contact: (this.props.navigation.state.params || {}).contact
    });
  }
  
  setDeleteFunction = () => this.props.navigation.setParams({ handleOpenAlert: () => this.handleOpenAlert() });

  componentDidUpdate(prevProps) {
    if (this.props.navigation.state.params.contact !== prevProps.navigation.state.params.contact) {
      this.setState({
        contact: (this.props.navigation.state.params || {}).contact
      })
    }
  }

  handleOpenAlert() {
    this.setState({
      showDeleteAlert: true
    })
  }

  handleGoToEditScreen = () => this.props.navigation.push('EditContactScreen', {
    contact: this.state.contact
  });

  handleDelete = () => {
    const {contact} = this.state;
    const deleteContact = ContactService.deleteContact(contact.id);
    
    const handleSuccess = () => props.navigation.navigate('ContactListScreen');
    const handleFail = (err) => {
      this.setState({
        error: err,
        loading: false,
        showDeleteAlert: false
      });
      console.log(err);
    }

    deleteContact.then(handleSuccess, handleFail).catch(handleFail);

    return deleteContact;
  }

  handleResetError = () => this.setState({ error: null });
  
  render() {
    const { contact, error, showDeleteAlert } = this.state;

    return (
      <View style={styles.container}>
        {error && (
          <FlashMessage
            text={error}
            onTimeout={this.handleResetError}
          />
        )}
        {showDeleteAlert && (
          <DeleteAlert
            onDelete={this.handleDelete}
          />
        )}
        <ContactDetailForm
          contact={contact}
          onPressEdit={this.handleGoToEditScreen}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Styles.DefaultPadding*8,
    backgroundColor: Styles.PrimaryColor,
  }
})


export default ContactDetailScreen;
