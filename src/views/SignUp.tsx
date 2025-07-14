import React, { FC, useState } from 'react';

import FormInput from '../components/FormInput';

import FormContainer from '../components/FormContainer';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AuthStackNavigator } from '../../App';
interface Props {}

const SignUp: FC<Props> = () => {
  const [signUPInfo, setSignUnInfo] = useState({
    name: '',
    email: '',
    password: '',
  });
  const navigation = useNavigation<NavigationProp<AuthStackNavigator>>();
  return (
    <FormContainer
      onLinkPressed={() => navigation.navigate('SignIn')}
      btnTitle="Sign Up"
      navLinkText="I already have a account?"
    >
      <FormInput
        label={'User Name'}
        placeholder={'pragati Veer'}
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={name => {
          setSignUnInfo({ ...signUPInfo, name });
        }}
      />
      <FormInput
        label={'Email'}
        placeholder={'email@gmial.com'}
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={email => {
          setSignUnInfo({ ...signUPInfo, email });
        }}
      />
      <FormInput
        label={'Password'}
        placeholder={'********'}
        secureTextEntry
        autoCapitalize="none"
        onChangeText={password => {
          setSignUnInfo({ ...signUPInfo, password });
        }}
      />
    </FormContainer>
  );
};

export default SignUp;
