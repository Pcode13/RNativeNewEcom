import React, { FC } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

interface Props {
  count: number;
}

const OTPContainer: FC<Props> = ({ count }) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: count }).map((_, index) => (
        <TextInput
          key={index}
          placeholder={`${index + 1}`}
          style={styles.textInput}
          keyboardType="number-pad"
          maxLength={1}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textInput: {
    width: 50,
    height: 50,
    margin: 8,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
  },
});

export default OTPContainer;
