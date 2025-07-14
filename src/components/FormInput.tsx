import React, { FC } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
} from 'react-native';

interface Props extends TextInputProps {
  label: string;
}

const FormInput: FC<Props> = ({ label, ...restProps }) => {
  return (
    <View style={styles.inputContainer}>
      <Text>{label}</Text>
      <TextInput style={styles.textInput} {...restProps} />
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
