// UserContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

type UserContextType = {
  userName: string;
  setUserName: (name: string) => void;
};

export const UserContext = createContext<UserContextType | undefined>(undefined);

type Props = {
  children: ReactNode;
};

export const UserProvider = ({ children }: Props) => {
  const [userName, setUserName] = useState<string>('Veer');

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};
