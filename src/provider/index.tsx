import React, { createContext, useContext, useState } from 'react';
import { DSProviderT, DSContextT } from './types';
import clsx from 'clsx';

export const DSContext = createContext<DSContextT | null>(null);
DSContext.displayName = 'DSProviderContext';

export const DSProvider: React.FC<DSProviderT> = ({
  theme: initialTheme,
  colorScheme: initialColorScheme = 'light',
  scale: initialScale = 'medium',
  children,
}) => {
  const [theme, setTheme] = useState(initialTheme);
  const [colorScheme, setColorScheme] = useState(initialColorScheme);
  const [scale, setScale] = useState(initialScale);

  return (
    <DSContext.Provider
      value={{ theme, colorScheme, scale, setTheme, setColorScheme, setScale }}
    >
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

export const useDSContext = () => {
  const context = useContext(DSContext);

  if (!context) {
    throw new Error('useDSContext must be used within a DSProvider');
  }

  return context;
};
