import React, { FC, useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import OTPContainer from '../components/OTPContainer';

interface Props {}

const OTPScreen: FC<Props> = () => {
  const [enableLink, setEnableLink] = useState(true);
  const [time, setTime] = useState(1);
  useEffect(() => {
    setInterval(() => {
      setTime(time + 1);
    }, 1000);

    // return () => {

    // }
  }, []);

  return (
    <View style={styles.container}>
      <OTPContainer count={4} />
      <View style={styles.linkContainer}>
        <Text
          onPress={() => setEnableLink(false)}
          style={[styles.linkText, { opacity: enableLink ? 0.5 : 1 }]}
        >
          {!enableLink ? `wait for ${time} sec` : `Didn't get OTP ?`}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  linkContainer: {
    padding: 10,
  },
  linkText: {
    fontSize: 16,
    textAlign: 'right',
    fontWeight: 'bold',
  },
});

export default OTPScreen;
