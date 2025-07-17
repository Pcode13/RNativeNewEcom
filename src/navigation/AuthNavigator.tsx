import { createStackNavigator } from '@react-navigation/stack';
import { createStaticNavigation } from '@react-navigation/native';

import SignIn from '../views/signIn';
import SignUp from '../views/SignUp';
import OTP from '../views/OTPScreen';

export type AuthStackNavigator = {
  SignIn: undefined;
  SignUp: undefined;
  OTP: undefined;
};

const AuthStack = createStackNavigator<AuthStackNavigator>({
  screens: {
    SignIn,
    SignUp,
    OTP,
  },
  screenOptions: {
    headerShown: false,
  },
});

const AuthNavigator = createStaticNavigation(AuthStack);

export default AuthNavigator;
