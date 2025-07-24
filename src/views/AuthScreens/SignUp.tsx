import React, { FC, useState } from 'react';

import FormInput from '../../components/FormInput';

import FormContainer from '../../components/FormContainer';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AuthStackNavigator } from '../../navigation/AuthNavigator';
import { AxiosError } from 'axios';
import ErrorMessage from '../../components/ErrorMessage';
import Client from '../../apiServices/Client';

interface Props {}
type errorType = Record<string, string[] | undefined>;

const SignUp: FC<Props> = () => {
  const [signUPInfo, setSignUnInfo] = useState({
    name: '',
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
      const { data } = await Client.post(`/auth/sign-up`, signUPInfo);
      console.log('Sign Up successful:', data);
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
      onLinkPressed={() => navigation.navigate('SignIn')}
      btnTitle="Sign Up"
      navLinkText="I already have a account?"
      onSubmit={handleSubmit}
    >
      {error && <ErrorMessage message={error} size={20} />}
      <FormInput
        label={'User Name'}
        placeholder={'pragati Veer'}
        autoCapitalize="none"
        keyboardType="email-address"
        errors={errors.name}
        onChangeText={name => {
          setSignUnInfo({ ...signUPInfo, name });
        }}
      />
      <FormInput
        label={'Email'}
        placeholder={'email@gmial.com'}
        autoCapitalize="none"
        errors={errors.email}
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
        errors={errors.password}
        onChangeText={password => {
          setSignUnInfo({ ...signUPInfo, password });
        }}
      />
    </FormContainer>
  );
};

export default SignUp;
