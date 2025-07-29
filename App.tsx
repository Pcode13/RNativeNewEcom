import React, { FC } from 'react';
import AuthProvider from './src/context/AuthProvider';
import AppNavigator from './src/navigation';
import { SafeAreaView } from 'react-native';
// import AuthNavigator from './src/navigation/AuthNavigator';
// import { TabNavigator } from './src/navigation/BottomTabNavigator';

interface Props {}

const App: FC<Props> = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </SafeAreaView>
  );
};

export default App;
