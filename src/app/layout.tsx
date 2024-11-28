import type { Metadata } from 'next';

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

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => (
  <html suppressHydrationWarning lang="es">
    <body className={robotoSlab.className}>
      <ErrorBoundary>
        <ThemeProvider>
          <SkipNavButton />
          <main id="main">{children}</main>
          <h1 className="text-cyan-600">ROOT LAYOUT</h1>
          <SonnerToast />
        </ThemeProvider>
      </ErrorBoundary>
    </body>
  </html>
);

export default RootLayout;
