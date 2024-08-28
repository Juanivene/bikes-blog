'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

import { type ThemeProviderProps } from 'next-themes/dist/types';

/**
 * Custom ThemeProvider component that wraps the `next-themes` ThemeProvider.
 *
 * This component allows for easy integration of theme management in a Next.js application,
 * providing the ability to switch between different themes, manage system theme preferences,
 * and apply various theme-related configurations.
 *
 * @param {ThemeProviderProps} props - The properties passed to the ThemeProvider.
 * @param {React.ReactNode} props.children - The child components that will be rendered inside the ThemeProvider.
 * @returns {JSX.Element} The rendered ThemeProvider component.
 */
const ThemeProvider = ({
  children,
  ...props
}: ThemeProviderProps): JSX.Element => (
  <NextThemesProvider {...props}>{children}</NextThemesProvider>
);

export default ThemeProvider;
