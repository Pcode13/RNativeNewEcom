import React, { FC, useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { TabNavigator } from './BottomTabNavigator';

interface Props {}

const AppNavigator: FC<Props> = () => {
  const authContext = useContext(AuthContext);
  return authContext.isAuth ? <TabNavigator /> : <AppNavigator />;
};

export default AppNavigator;
