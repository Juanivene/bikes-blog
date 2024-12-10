'use client';

import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes';

const ThemeProvider = ({
  children,
  ...props
}: ThemeProviderProps): React.ReactElement => (
  <NextThemesProvider {...props}>{children}</NextThemesProvider>
);

export default ThemeProvider;
