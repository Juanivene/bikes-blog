import type { Metadata } from 'next';

import SonnerToast from '@/components/Common/SonnerToast';
import ErrorBoundary from '@/components/Error/ErrorBoundary';

import russoOne from '@/styles/fonts';
import '@/styles/tailwind.css';

// TODO: Change Metadata
export const metadata: Metadata = {
  title: 'BikeWorld',
  description: 'Blog de motos en español',
  authors: [{ name: 'Dirección de Sistemas del Poder Judicial de Tucumán' }],
  keywords: ['...', 'moto', 'motos', 'blogs', 'moto blogs'],
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => (
  <html suppressHydrationWarning className="h-full" lang="es">
    <body
      className={`flex h-full flex-col bg-gray-carbon ${russoOne.className}`}
    >
      <ErrorBoundary>
        <main className="flex-1" id="main">
          {children}
        </main>
        <SonnerToast />
      </ErrorBoundary>
    </body>
  </html>
);

export default RootLayout;
