import React, { FC, useState } from 'react';

import FormInput from '../components/FormInput';

import FormContainer from '../components/FormContainer';

interface Props {}

const SignIn: FC<Props> = () => {
  const [signInInfo, setSignInInfo] = useState({
    email: '',
    password: '',
  });
  return (
    <FormContainer btnTitle="Sign In" navLinkText="Don't have a account?">
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
