import type { Metadata } from 'next';

import SonnerToast from '@/components/Common/SonnerToast';
import ErrorBoundary from '@/components/Error/ErrorBoundary';
import Footer from '@/components/ui/components/Footer/Footer';
import Header from '@/components/ui/components/Header/Header';

import robotoSlab from '@/styles/fonts';
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
}): React.ReactElement => (
  <html suppressHydrationWarning className="h-full" lang="es">
    <body
      className={`flex h-full flex-col bg-gray-carbon ${robotoSlab.className}`}
    >
      <ErrorBoundary>
        <Header />
        <main className="flex-1" id="main">
          {children}
        </main>
        <Footer />
        <SonnerToast />
      </ErrorBoundary>
    </body>
  </html>
);

export default RootLayout;
