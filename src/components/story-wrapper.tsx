import React, { ReactNode } from 'react';
import { theme as themeDefault } from '../themes/theme-default';
import { DSProvider } from '../provider';
import { DSProviderT } from '../provider/types';

interface DSWrapperPropsT extends DSProviderT {
  children: ReactNode; // Explicitly defining the children prop
}

export const StoryWrapper: React.FC<DSWrapperPropsT> = ({
  children,
  theme,
  colorScheme,
  scale,
}) => {
  return (
    <div
      style={{
        padding: 10,
        backgroundColor: colorScheme === 'dark' ? '#000' : 'transparent',
      }}
    >
      <DSProvider
        theme={theme || themeDefault}
        colorScheme={colorScheme || 'light'}
        scale={scale || 'medium'}
      >
        {children}
      </DSProvider>
    </div>
  );
};
