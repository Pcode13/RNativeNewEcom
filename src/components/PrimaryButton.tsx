import React, { FC } from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';

interface Props {
  title: string;
  onPress?(): void;
}

const PrimaryButton: FC<Props> = ({ title, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        ...styles.container,
        opacity: pressed ? 0.5 : 1,
      })}
    >
      <Text style={styles.textStyle}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 10,
    backgroundColor: '#FFA400',
  },
  textStyle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000000',
    fontWeight: '500',
  },
});

export default PrimaryButton;
