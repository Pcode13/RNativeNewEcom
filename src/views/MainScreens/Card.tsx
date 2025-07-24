import React, { FC } from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface Props {}

const Card: FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text> Hello Typescript Card</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Card;
