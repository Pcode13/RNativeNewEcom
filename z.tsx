// import React, { FC } from 'react';

// import SignIn from './src/views/signIn';
// // import { OneSignal, LogLevel } from 'react-native-onesignal';
// import CountryList from './src/components/PhoneInput';
// interface Props {}

// const App: FC<Props> = () => {
//   // useEffect(() => {
//   //   // Enable verbose logging for debugging (remove in production)
//   //   OneSignal.Debug.setLogLevel(LogLevel.Verbose);

//   //   // Initialize OneSignal with your App ID
//   //   OneSignal.initialize('d956fec2-d1d5-40dd-b5b4-9c55720b31ec');

//   //   // Prompt for push notification permissions
//   //   OneSignal.Notifications.requestPermission(true);

//   //   // // Optional: Handle notifications received while app is in focus
//   //   // const foregroundHandler = OneSignal.Notifications.addEventListener(
//   //   //   'foregroundWillDisplay',
//   //   //   event => {
//   //   //     console.log('Notification in foreground:', event);
//   //   //     // Decide what to do: show, dismiss, or modify the notification
//   //   //     event.preventDefault(); // Prevent default display
//   //   //     OneSignal.Notifications.displayNotification(event.getNotification());
//   //   //   }
//   //   // );
//   // }, []);
//   // TODO: Replace the empty array with your actual Country[] data
// //   return <CountryList countryCode={[]} />;
// // };

// export default App;

return (
  <SafeAreaView style={styles.safeAreaView}>
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Welcome to RNative ECom</Text>
        <Text style={styles.subTitle}>Your own online store</Text>
      </View>
      <FormInput
        label={'Email'}
        placeholder={'email@gmial.com'}
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={email => {
          setSignInInfo({ ...signInInfo, email });
        }}
      />
      <FormInput
        label={'Password'}
        placeholder={'********'}
        secureTextEntry
        autoCapitalize="none"
        onChangeText={password => {
          setSignInInfo({ ...signInInfo, password });
        }}
      />
      <PrimaryButton
        title={'Login'}
        onPress={() => {
          console.log('first', signInInfo);
        }}
      />
      <View style={styles.navLinkContainer}>
        <Text style={styles.navLink}>Don't not have Account?</Text>
      </View>
    </View>
  </SafeAreaView>
);

// import React, { FC } from 'react';

// import SignIn from './src/views/signIn';
// import SignUp from './src/views/SignUp';
// interface Props {}

// const App: FC<Props> = () => {
//   return <SignUp />;
// };

// export default App;

import React, { FC, useEffect } from 'react';

import SignIn from './src/views/AuthScreens/signIn';
import { OneSignal, LogLevel } from 'react-native-onesignal';
import { Text, View } from 'react-native';

interface Props {}

const App: FC<Props> = () => {
  useEffect(() => {
    // Enable verbose logging for debugging (remove in production)
    OneSignal.Debug.setLogLevel(LogLevel.Verbose);

    // Initialize OneSignal with your App ID
    OneSignal.initialize('d956fec2-d1d5-40dd-b5b4-9c55720b31ec');

    // Prompt for push notification permissions
    OneSignal.Notifications.requestPermission(true);
    OneSignal.login('user_12345');
    OneSignal.User.getExternalId().then(externalId => {
      console.log('🪪 Current external user ID:', externalId);
    });

    // // Optional: Handle notifications received while app is in focus
    // const foregroundHandler = OneSignal.Notifications.addEventListener(
    //   'foregroundWillDisplay',
    //   event => {
    //     console.log('Notification in foreground:', event);
    //     // Decide what to do: show, dismiss, or modify the notification
    //     event.preventDefault(); // Prevent default display
    //     OneSignal.Notifications.displayNotification(event.getNotification());
    //   }
    // );
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Text>hello Data vhvhv</Text>
    </View>
  );
};

export default App;
