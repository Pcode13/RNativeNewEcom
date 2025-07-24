import { createStackNavigator } from '@react-navigation/stack';
import { createStaticNavigation } from '@react-navigation/native';

import SignIn from '../views/AuthScreens/signIn';
import SignUp from '../views/AuthScreens/SignUp';
import Home from '../views/MainScreens/Home';

export type AuthStackNavigator = {
  SignIn: undefined;
  SignUp: undefined;
  Home: { data: { name: string; email: string } };
};

const AuthStack = createStackNavigator<AuthStackNavigator>({
  screens: {
    SignUp,
    SignIn,
    Home,
  },
  screenOptions: {
    headerShown: false,
  },
});

const AuthNavigator = createStaticNavigation(AuthStack);

export default AuthNavigator;
