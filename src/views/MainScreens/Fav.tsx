import React, { FC } from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface Props {}

const Fav: FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text> Hello Typescript Fav</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Fav;
