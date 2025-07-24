import React, { FC, useState, useEffect, useContext } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import OTPContainer from '../components/OTPContainer';
import { UserContext } from '../context/AuthNameContext';

interface Props {}

const OTPScreen: FC<Props> = () => {
  const [enableLink, setEnableLink] = useState(true);
 const context = useContext(UserContext);

  if (!context) {
    throw new Error('UserContext must be used within a UserProvider');
  }

  const { userName, setUserName } = context;

  console.log('User Name:', userName);
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

        <Text style={{ fontSize: 18 }}>Hello, {userName}!</Text>
        <Button
          title="Change Name to Pragati"
          onPress={() => setUserName('Pragati')}
        />
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
