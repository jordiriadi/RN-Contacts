import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, Dimensions, View, ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Styles from '../utils/Styles';

const ButtonWithIcon = (props) => {
  const { disabled, iconName, iconSize = 25, buttonText } = props;
  return (
    <TouchableOpacity
      id="btn-container"
      disabled={disabled}
      onPress={props.onPress}
      style={{
        ...styles.button,
        ...props.style,
        backgroundColor: disabled
          ? Styles.DisabledBtnBackgroundColor
          : styles.button.backgroundColor,
      }}
    >
      <View style={styles.buttonContainer}>
        <IonIcons
          style={{ color: Styles.SecondaryColor }}
          name={iconName}
          size={iconSize}
        />
        <Text style={styles.buttonText}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
};

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Styles.PrimaryButtonColor,
    height: height / 15,
    padding: Styles.DefaultPadding,
  },
  buttonText: {
    ...Styles.DefaultTitleText,
    color: 'white',
  },
  buttonContainer: {
    alignItems: 'center'
  }
});

ButtonWithIcon.propTypes = {
  style: ViewPropTypes.style,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  iconName: PropTypes.string,
  iconSize: PropTypes.number,
  buttonText: PropTypes.string,
};

export default ButtonWithIcon;
