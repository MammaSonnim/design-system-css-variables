import React, { createContext, useContext } from 'react';
import { DSProviderT, DSContextT } from './types';
import clsx from 'clsx';

export const DSContext = createContext<DSContextT | null>(null);
DSContext.displayName = 'DSProviderContext';

export const DSProvider: React.FC<DSProviderT> = ({
  theme,
  colorScheme = 'light',
  scale = 'medium',
  children,
}) => {
  return (
    <DSContext.Provider value={{ theme, colorScheme, scale }}>
      <div
        className={clsx(
          theme.common['variables'],
          theme?.[colorScheme]?.['variables'],
          theme?.[scale]?.['variables']
        )}
      >
        {children}
      </div>
    </DSContext.Provider>
  );
};

export const useDSProvider = () => {
  return useContext(DSContext);
};
