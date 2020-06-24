import React from 'react';
import { StyleSheet, View } from 'react-native';

import ModifyContactForm from './ModifyContactForm';
import FlashMessage from '../../components/FlashMessage';
import ContactService from './ContactService';
import Styles from '../../utils/Styles';

class EditContactScreen extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      loading: false,
      error: null,
    }
  }

  goToDetailScreen = (contact) => this.props.navigation.navigate('ContactDetailScreen', {contact});

  handleUpdateContact = (formValues) => {
    console.log('update contact ...');
    const {id} = formValues;
    const updateContact = ContactService.updateContact(id, formValues);

    const startLoading = () => this.setState({ loading: true });
    const endLoading = () => this.setState({ loading: false });
    
    const handleSuccess = (res) => {
      endLoading();
      this.goToDetailScreen(res.data);
    }
    const handleFail = (err) => {
      this.setState({
        error: err,
        loading: false,
      });
      console.log(err);
    }


    startLoading();
    updateContact.then(handleSuccess, handleFail).catch(handleFail);


    return updateContact;
  }

  handleResetError = () => this.setState({ error: null });
  
  handleCancel = () => this.props.navigation.goBack();

  render() {
    const { error } = this.state;
    const { contact } = this.props.navigation.state.params || {};

    return (
      <View style={styles.container}>
        {error && (
          <FlashMessage
            text={error}
            onTimeout={this.handleResetError}
          />
        )}
        <ModifyContactForm
          modify={"update"} 
          value={contact}
          onSave={this.handleUpdateContact} 
          onCancel={this.handleCancel}
          isLoading={this.state.loading} 
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


export default EditContactScreen;