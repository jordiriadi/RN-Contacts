import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';
import Styles from '../utils/Styles';

const FlashMessage = (props) => {
  const { text, onTimeout } = props;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => closeFlashMessage(), 3000);

    return () => {
      clearTimeout(timer);
    }
  }, [open])

  const closeFlashMessage = () => {
    setOpen(false);
    onTimeout();
  }

  return (
    <View style={styles.container}>
      <Text style={{ color: 'white' }}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'orangered',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: Styles.DefaultMargin * 5,
    padding: Styles.DefaultPadding,
    top: 0
  }
});

FlashMessage.propTypes = {
  text: PropTypes.string,
  onTimeout: PropTypes.func,
}

export default FlashMessage;