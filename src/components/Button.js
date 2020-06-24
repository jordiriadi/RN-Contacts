import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, Dimensions, ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';
import Styles from '../utils/Styles';

const Button = (props) => {
  const { disabled, type = "solid", color } = props;

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={props.onPress}
      style={{
        ...styles.button,
        ...props.style,
        backgroundColor: type === "solid" ? (disabled
          ? Styles.DisabledBtnBackgroundColor
          : styles.button.backgroundColor) : (""),
      }}
    >
      <Text style={{...styles.buttonText, color : color || styles.buttonText.color }}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: height / 15,
    backgroundColor: Styles.PrimaryButtonColor,
    padding: Styles.DefaultPadding,
  },
  buttonText: {
    ...Styles.DefaultTitleText,
    color: 'white',
  },
});

Button.propTypes = {
  style: ViewPropTypes.style,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  type: PropTypes.oneOf(['solid', 'clear']),
  color: PropTypes.string,
};

export default Button;
