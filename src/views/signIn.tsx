import React, { FC, useState } from 'react';

import FormInput from '../components/FormInput';

import FormContainer from '../components/FormContainer';

import { useNavigation, NavigationProp } from '@react-navigation/native';
import { AuthStackNavigator } from '../navigation/AuthNavigator';

interface Props {}

const SignIn: FC<Props> = () => {
  const [signInInfo, setSignInInfo] = useState({
    email: '',
    password: '',
  });
  const navigation = useNavigation<NavigationProp<AuthStackNavigator>>();

  return (
    <FormContainer
      onLinkPressed={() => navigation.navigate('SignUp')}
      btnTitle="Sign In"
      navLinkText="Don't have a account?"
      onSubmit={() => navigation.navigate('OTP')}
    >
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
    </FormContainer>
  );
};

export default SignIn;
