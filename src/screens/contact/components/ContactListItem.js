import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import Styles from '../../../utils/Styles';

const ContactListItem = (props) => {
  const {contact, onPress} = props;
 
  return (
    <TouchableOpacity key={contact.id} style={styles.container} onPress={() => onPress(contact)}>
      <View style={styles.avatarContainer}>
        <Avatar
          rounded
          size="medium"
          source={{
            uri:contact.photo
          }}
          title={contact.initial}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={Styles.DefaultText}>
          {contact.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Styles.DefaultPadding,
    flexDirection: 'row',
  },
  avatarContainer: {
    flex: 1,
    alignItems: 'center',
  },
  textContainer: {
    flex: 5,
    justifyContent: 'center',
    borderBottomColor: Styles.PrimaryColor,
    borderBottomWidth: 1
  }
});

ContactListItem.propTypes = {
  contact: PropTypes.object,
  onPress: PropTypes.func,
}


export default ContactListItem;