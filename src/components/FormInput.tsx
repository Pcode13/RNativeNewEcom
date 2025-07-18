import React, { FC } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
} from 'react-native';
import ErrorMessage from './ErrorMessage';

interface Props extends TextInputProps {
  label: string;
  errors?: string[];
}

const FormInput: FC<Props> = ({ label, errors = [], ...restProps }) => {
  // console.log('and errors:', errors);
  return (
    <View style={styles.inputContainer}>
      <Text>{label}</Text>
      <TextInput style={styles.textInput} {...restProps} />
      {errors.map((error, index) => (
        <ErrorMessage key={index} message={error} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 10,
    backgroundColor: '#dedede',
    padding: 10,
  },
  textInput: {},
});

export default FormInput;
