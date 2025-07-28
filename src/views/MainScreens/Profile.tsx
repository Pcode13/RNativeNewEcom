import React, { FC } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { useAuth } from '../../context/AuthProvider';
interface Props {}

const Profile: FC<Props> = () => {
  const { logout } = useAuth();
  return (
    <View style={styles.container}>
      <Text> Hello Typescript profile </Text>
      <Pressable onPress={logout}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Profile;
