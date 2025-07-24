import React, { FC, useState } from 'react';

import FormInput from '../../components/FormInput';

import FormContainer from '../../components/FormContainer';

import { useNavigation, NavigationProp } from '@react-navigation/native';
import { AuthStackNavigator } from '../../navigation/AuthNavigator';
import Client from '../../apiServices/Client';
import { AxiosError } from 'axios';
import ErrorMessage from '../../components/ErrorMessage';
import AsyncStorage from '@react-native-async-storage/async-storage';
interface Props {}
type errorType = Record<string, string[] | undefined>;
const SignIn: FC<Props> = () => {
  const [signInInfo, setSignInInfo] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<errorType>({});
  const [error, setError] = useState('');

  const navigation = useNavigation<NavigationProp<AuthStackNavigator>>();

  const handleSubmit = async () => {
    setError('');
    setErrors({});
    try {
      const { data } = await Client.post(`/auth/sign-in`, signInInfo);
      console.log(data);
      await AsyncStorage.setItem('auth_token', data.token);
      navigation.navigate('Home', { data: data.profile });
    } catch (err) {
      console.log('Error during sign up:', err);
      if (err instanceof AxiosError) {
        const responseData = err.response?.data;
        if (responseData.errors) setErrors(responseData.errors || {});
        if (responseData) setError(responseData.error);
      }
    }
  };

  return (
    <FormContainer
      onLinkPressed={() => navigation.navigate('SignUp')}
      btnTitle="Sign In"
      navLinkText="Don't have a account?"
      onSubmit={handleSubmit}
    >
      {error && <ErrorMessage message={error} size={20} />}
      <FormInput
        label={'Email'}
        placeholder={'email@gmial.com'}
        autoCapitalize="none"
        keyboardType="email-address"
        errors={errors.email}
        onChangeText={email => {
          setSignInInfo({ ...signInInfo, email });
        }}
      />
      <FormInput
        label={'Password'}
        placeholder={'********'}
        secureTextEntry
        autoCapitalize="none"
        errors={errors.password}
        onChangeText={password => {
          setSignInInfo({ ...signInInfo, password });
        }}
      />
    </FormContainer>
  );
};

export default SignIn;
