import { createStackNavigator } from '@react-navigation/stack';
import { createStaticNavigation } from '@react-navigation/native';

import SignIn from '../views/AuthScreens/signIn';
import SignUp from '../views/AuthScreens/SignUp';

export type AuthStackNavigator = {
  SignIn: undefined;
  SignUp: undefined;
};

const AuthStack = createStackNavigator<AuthStackNavigator>({
  screens: {
    SignUp,
    SignIn,
  },
  screenOptions: {
    headerShown: false,
  },
});

const AuthNavigator = createStaticNavigation(AuthStack);

export default AuthNavigator;
