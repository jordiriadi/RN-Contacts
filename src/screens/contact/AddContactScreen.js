import React from 'react';
import { StyleSheet, View } from 'react-native';

import ModifyContactForm from './ModifyContactForm';
import FlashMessage from '../../components/FlashMessage';
import ContactService from './ContactService';
import Styles from '../../utils/Styles';

class AddContactScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      error: null,
    }
  }

  handleAddContact = (formValues) => {
    const addContact = ContactService.addContact(formValues);

    const startLoading = () => this.setState({ loading: true });

    const handleSuccess = () => {
      this.props.navigation.navigate('ContactListScreen');
    }

    const handleFail = (err) => {
      this.setState({
        error: err,
        loading: false,
      });
      console.log(err);
    }

    startLoading();
    addContact.then(handleSuccess, handleFail).catch(handleFail);


    return addContact;
  }

  handleResetError = () => this.setState({ error: null });

  render() {
    const { error } = this.state;

    return (
      <View style={styles.container}>
        {error && (
          <FlashMessage
            text={error}
            onTimeout={this.handleResetError}
          />
        )}
        <ModifyContactForm
          modify={"create"}
          onSave={this.handleAddContact}
          isLoading={this.state.loading}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Styles.DefaultPadding * 8,
    backgroundColor: Styles.PrimaryColor,
  }
})


export default AddContactScreen;