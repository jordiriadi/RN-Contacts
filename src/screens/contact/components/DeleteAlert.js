import React from 'react';
import PropTypes from 'prop-types';
import { View, Alert } from "react-native";

const DeleteAlert = (props) => {
  const { onCancel, onDelete } = props;

  const renderAlert = () =>
    Alert.alert(
      "Delete contact?",
      "All linked contact will be deleted",
      [
        {
          text: "Cancel",
          onPress: onCancel,
          style: "cancel"
        },
        { text: "Delete", onPress: onDelete }
      ],
      { cancelable: false }
    );

  return (
    <View>
      {renderAlert()}
    </View>
  );
}

DeleteAlert.propTypes = {
  onCancel: PropTypes.func,
  onDelete: PropTypes.func,
}

export default DeleteAlert;