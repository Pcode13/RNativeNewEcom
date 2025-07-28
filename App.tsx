import React, { FC } from 'react';
import AuthProvider from './src/context/AuthProvider';
import AppNavigator from './src/navigation';
// import AuthNavigator from './src/navigation/AuthNavigator';
// import { TabNavigator } from './src/navigation/BottomTabNavigator';

interface Props {}

const App: FC<Props> = () => {
  console.log('App component rendered');
  return (
    <AuthProvider>
      {/* <AuthNavigator /> */}
      {/* <TabNavigator /> */}
      <AppNavigator />
    </AuthProvider>
  );
};

export default App;
