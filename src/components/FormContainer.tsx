import React, { FC, ReactNode } from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';

import PrimaryButton from '../components/PrimaryButton';

interface Props {
  children: ReactNode;
  btnTitle: string;
  onSubmit?(): void;
  navLinkText?: string;
  onLinkPressed?(): void;
}

const FormContainer: FC<Props> = ({
  children,
  btnTitle,
  onSubmit,
  navLinkText,
  onLinkPressed,
}) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Welcome to RNative ECom</Text>
          <Text style={styles.subTitle}>Your own online store</Text>
        </View>
        {children}
        <PrimaryButton title={btnTitle} onPress={onSubmit} />
        <View style={styles.navLinkContainer}>
          <Text onPress={onLinkPressed} style={styles.navLink}>
            {navLinkText}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
    gap: 20,
    paddingTop: 150,
  },
  titleContainer: {},
  title: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 16,
    textAlign: 'center',
  },
  navLinkContainer: {
    marginTop: 'auto',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navLink: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
});

export default FormContainer;
