import React, { FC } from 'react';
import AuthProvider from './src/context/AuthProvider';
import AppNavigator from './src/navigation';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import Providers from './src/context';
// import AuthNavigator from './src/navigation/AuthNavigator';
// import { TabNavigator } from './src/navigation/BottomTabNavigator';

interface Props {}

const App: FC<Props> = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Providers>
        <AppNavigator />
      </Providers>
    </SafeAreaView>
  );
};

export default App;
