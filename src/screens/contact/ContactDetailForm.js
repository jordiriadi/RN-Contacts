import React from 'react';
import PropTypes from 'prop-types';
import {Dimensions, StyleSheet, View, Text, TextInput } from 'react-native';
import { Avatar } from 'react-native-elements';
import ButtonWithIcon from '../../components/ButtonWithIcon';
import Styles from '../../utils/Styles';

class ContactDetailForm extends React.Component {


  contactFields = [
    {
      fieldName: 'photo',
      type: 'image',
      text: 'Photo',
    },
    {
      fieldName: 'firstName',
      type: 'default',
      text: 'First Name',
    },
    {
      fieldName: 'lastName',
      type: 'default',
      text: 'Last Name',
    },
    {
      fieldName: 'age',
      type: 'numeric',
      text: 'Age',
    },
  ];


  render() {
    const { contact, onPressEdit } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.personalInfoContainer}>
          {this.contactFields.map(field => (
            <View key={field.fieldName} style={styles.rowContainer}>
              {field.type === "image" ? (
                <View style={styles.avatarContainer}>
                  <Avatar
                    rounded
                    size="large"
                    icon={{ name: 'camera', color: 'black', type: 'font-awesome' }}
                    overlayContainerStyle={{ backgroundColor: 'orange' }}
                    source={{
                      uri:contact.photo
                    }}
                    title={contact.initial}
                  />
                </View>
              ) : (
                  <View style={styles.contactDetailContainer} >
                    <View style={styles.FieldContainer}>
                      <Text>{field.text}</Text>
                    </View>
                    <View style={styles.valueContainer}>
                      <Text>: {contact[field.fieldName]}</Text>
                    </View>
                  </View>
                )}
            </View>
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <ButtonWithIcon 
              buttonText={"QR Code"}
              iconName={"md-qr-scanner"}
            />
          </View>
          <View  style={styles.button}>
            <ButtonWithIcon 
              buttonText={"Edit"}
              iconName={"md-create"}
              onPress={onPressEdit}
            />
          </View>
          <View  style={styles.button}>
            <ButtonWithIcon 
              buttonText={"Share"}
              iconName={"md-share"}
            />
          </View>
        </View>
      </View>
    );
  }
}

const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 3,
    marginTop: Styles.DefaultMarginTop,
  },
  personalInfoContainer: {
    height: deviceHeight/3,
    padding: Styles.DefaultPadding,
    backgroundColor: "white",
    borderRadius: 15,
  },

  rowContainer: {
    paddingTop: 10,
  },
  avatarContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: Styles.DefaultMargin * -6,
    marginBottom: Styles.DefaultMargin * 8
  },
  contactDetailContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: Styles.DefaultPadding,
    marginBottom: Styles.DefaultMargin
  },
  FieldContainer: {
    flex: 1,
  },
  valueContainer: {
    flex: 4
  },
  textInput: {
    height: 30,
    padding: 3,
    borderColor: 'gray',
    borderWidth: 0.8,
  },
  buttonContainer: {
    // flex: 1,
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    left: 0, right: 0, bottom: 0
  },
  button: {
    flex: 1,
  }
});

ContactDetailForm.propTypes = {
  contact: PropTypes.object,
  onPressEdit: PropTypes.func
}

export default ContactDetailForm;
