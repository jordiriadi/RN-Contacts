import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import { Avatar } from 'react-native-elements';
import Button from '../../components/Button';
import Styles from '../../utils/Styles';

class ModifyContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fieldValues: {},
    };
  }

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

  componentDidMount() {
    if (this.props.modify === "update") {
      this.setState({
        fieldValues: {...this.props.value}
      });
    }
  }

  handleChange = (fieldName, type) => value => {
    if (type === 'numeric') {
      const _value = value.replace(/[^0-9]/g, '');
      return this.handleSetValue(fieldName, _value);
    }

    return this, this.handleSetValue(fieldName, value);
  };

  handleSetValue = (fieldName, value) =>
    this.setState({
      fieldValues: Object.assign({}, this.state.fieldValues, {
        [fieldName]: value,
      }),
    });

  render() {
    const {onSave, isLoading} = this.props;
    const {fieldValues} = this.state;

    return (
      <View id="form-container" style={styles.container}>
        {this.contactFields.map(field => (
          <View id={`field-${field.fieldName}`} key={field.fieldName} style={styles.fieldContainer}>
            {field.type === "image" ? (
              <View style={styles.avatarContainer}>
              <Avatar
                rounded
                size="large"
                icon={{name: 'camera', color: 'black', type: 'font-awesome'}}
                overlayContainerStyle={{backgroundColor: 'orange'}}
                source={{
                  uri:fieldValues.photo || "N/A"
                }}
                showAccessory={true}
                title={fieldValues.initial}
              />
              </View>
            ) : (
              <React.Fragment>
                <Text>{field.text}</Text>
                <TextInput
                  id={`input-${field.fieldName}`}
                  keyboardType={field.type}
                  style={styles.textInput}
                  onChangeText={this.handleChange(field.fieldName, field.type)}
                  value={fieldValues[field.fieldName]}
                />
              </React.Fragment>
            )}
          </View>
        ))}
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button type="solid" disabled={isLoading}>
              Cancel
            </Button>
          </View>
          <View  style={styles.button}>
            <Button id="btn-save" disabled={isLoading} onPress={() => onSave(this.state.fieldValues)}>
              Save
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: Styles.DefaultPadding,
    marginTop: Styles.DefaultMarginTop,
  },
  textInput: {
    height: 30,
    padding: 3,
    borderColor: 'gray',
    borderWidth: 0.8,
  },
  avatarContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: Styles.DefaultMargin*-6,
    marginBottom: Styles.DefaultMargin*8
  },
  fieldContainer: {
    paddingTop: 10,
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

ModifyContactForm.propTypes = {
  modify: PropTypes.oneOf(["update", "create"]),
  value: PropTypes.object,
  onSave: PropTypes.func,
  isLoading: PropTypes.bool
}

export default ModifyContactForm;
