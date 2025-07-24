import React, { FC } from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface Props {}

const Profile: FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text> Hello Typescript profile </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Profile;
