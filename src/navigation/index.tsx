import React, { FC} from 'react';
import {useAuth } from '../context/AuthProvider';
import { TabNavigator } from './BottomTabNavigator';
import AuthNavigator from './AuthNavigator';

interface Props {}

const AppNavigator: FC<Props> = () => {
  const authContext= useAuth();
  console.log('Auth status:', authContext);
  return authContext.isAuth ? <TabNavigator /> : <AuthNavigator />;
};

export default AppNavigator;
