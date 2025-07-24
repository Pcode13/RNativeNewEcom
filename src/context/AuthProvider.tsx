import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, ReactNode, useEffect } from 'react';

import React, { FC, useState } from 'react';

interface DefaultAuthContext {
  isAuth: boolean;
}

export const AuthContext = createContext<DefaultAuthContext>({
  isAuth: false,
});

interface Props {
  children?: ReactNode;
}

const AuthProvider: FC<Props> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const readTokenFromAsyncStorage = async () => {
      try {
        const token = await AsyncStorage.getItem('auth_token');
        console.log(token);
        if (token) {
          setIsAuth(true);
        } else {
          setIsAuth(false);
        }
      } catch (error) {
        console.error('Error reading token from AsyncStorage:', error);
      }
    };
    readTokenFromAsyncStorage();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
