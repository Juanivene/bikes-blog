import type { Metadata } from 'next';

import ReduxProvider from '@/providers/ReduxProvider';
import ThemeProvider from '@/providers/ThemeProvider';

import SkipNavButton from '@/components/Accessibility/SkipNavButton';
import SonnerToast from '@/components/Common/SonnerToast';
import ErrorBoundary from '@/components/Error/ErrorBoundary';

import '@/styles/animations.css';
import robotoSlab from '@/styles/fonts';
import '@/styles/globals.css';
import '@/styles/tailwind.css';

// TODO: Change Metadata
export const metadata: Metadata = {
  title: 'Template NextJS',
  description: '...',
  authors: [{ name: 'Dirección de Sistemas del Poder Judicial de Tucumán' }],
  keywords: ['...', 'pjt', 'poder judicial', 'tucuman', 'corte justicia'],
};

/**
 * RootLayout component to wrap the application with providers and common components.
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to render inside the layout.
 *
 * @returns {JSX.Element} The rendered RootLayout component.
 */
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning lang="es">
      <body className={robotoSlab.className}>
        <ReduxProvider>
          <ErrorBoundary>
            <ThemeProvider>
              <SkipNavButton />
              <main id="main">{children}</main>
              <SonnerToast />
            </ThemeProvider>
          </ErrorBoundary>
        </ReduxProvider>
      </body>
    </html>
  );
};

export default RootLayout;
