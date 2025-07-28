import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, ReactNode, useContext, useEffect } from 'react';

import React, { FC, useState } from 'react';
import Client from '../apiServices/Client';
import { Text } from 'react-native';

type Profile = { name: string; email: string };
type signInInfo = { email: string; password: string };

interface DefaultAuthContext {
  isAuth: boolean;
  profile?: Profile | null;
  logout: () => void;
  login: (value: signInInfo) => void;
}

export const AuthContext = createContext<DefaultAuthContext>({
  isAuth: false,
  profile: null,
  logout: () => {},
  login: () => {},
});

interface Props {
  children?: ReactNode;
}

const AuthProvider: FC<Props> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [busy, setBusy] = useState(true);
  const [profile, setProfile] = useState<DefaultAuthContext['profile']>(null);

  useEffect(() => {
    const readTokenFromAsyncStorage = async () => {
      try {
        const token = await AsyncStorage.getItem('auth_token');
        if (token) {
          const { data } = await Client.get('/auth/is-auth', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          console.log('Token exists:', data);
          setIsAuth(true);
          setProfile(data.profile);
        } else {
          setIsAuth(false);
        }
      } catch (error) {
        console.error('Error reading token from AsyncStorage:', error);
      }
    };

    readTokenFromAsyncStorage().finally(() => {
      setBusy(false);
    });
  }, []);

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('auth_token');
      setIsAuth(false);
      setProfile(null);
      console.log('Logged out successfully');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const login = async (value: signInInfo) => {
    const { data } = await Client.post(`/auth/sign-in`, value);
    await AsyncStorage.setItem('auth_token', data.token);
    setIsAuth(true);
    
  };

  return (
    <AuthContext.Provider value={{ isAuth, profile, logout, login }}>
      {busy ? <Text>Loading...</Text> : children}
      {/* {children} */}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
