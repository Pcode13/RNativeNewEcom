import React, { FC, ReactNode } from 'react';

import AuthProvider from './AuthProvider';
import CartProvider from './CardProvider';

interface Props {
  children: ReactNode;
}

const Providers: FC<Props> = ({ children }) => {
  return (
    <AuthProvider>
      <CartProvider>{children}</CartProvider>
    </AuthProvider>
  );
};

export default Providers;
