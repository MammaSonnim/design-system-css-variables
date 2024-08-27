import React, { createContext, useContext } from 'react';
import { ProviderT, ContextT } from '../types';

export const Context = createContext<ContextT | null>(null);
Context.displayName = 'ProviderContext';

export const Provider: React.FC<ProviderT> = ({
  theme,
  colorScheme,
  children,
}) => {
  return (
    <Context.Provider value={{ theme, colorScheme }}>
      {children}
    </Context.Provider>
  );
};

export const useProvider = () => {
  return useContext(Context);
};
