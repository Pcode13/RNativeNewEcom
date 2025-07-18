import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';

interface Props {
  message?: string;
  size?: number;
}

const ErrorMessage: FC<Props> = ({ message, size = 12 }) => {
  return <Text style={[styles.errorText, { fontSize: size }]}>{message}</Text>;
};

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    fontSize: 12,
  },
});

export default ErrorMessage;
