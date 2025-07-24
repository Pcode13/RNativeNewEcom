import React, { FC } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackNavigator } from '../../navigation/AuthNavigator';

type Props = StackScreenProps<AuthStackNavigator, 'Home'>;

const Home: FC<Props> = ({}) => {
  // const { name, email } = route.params.data;

  return (
    <View style={styles.container}>
      <Text> Hello Typescript</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Home;
