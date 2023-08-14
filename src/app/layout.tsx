import type { Metadata } from 'next';

import ThemeProvider from '@/providers/themeProvider';

import SkipNavButton from '@/components/Accessibility/SkipNavButton';

// import FixedButtons from '@/components/Common/FixedButtons/FixedButtons';
// import Footer from '@/components/Common/Footer';
// import Header from '@/components/Common/Header';
import { roboto } from '@/styles/fonts';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'template-next',
  description: 'Change this description in src/app/layout.tsx',
  authors: [{ name: 'Dirección de Sistemas del Poder Judicial de Tucumán' }],
  keywords: ['...', 'pjt', 'poder judicial', 'tucuman', 'corte justicia'],
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="es" data-theme="light" style={{ colorScheme: 'light' }}>
      <body className={roboto.className}>
        <ThemeProvider defaultTheme="system" enableSystem>
          <SkipNavButton />
          {/* isLoggedIn && <Header /> */}
          <main id="main" className="md:pt-6 pb-8 mt-16">
            {children}
          </main>
          {/* isLoggedIn && <Footer /> */}

          {/* <FixedButtons /> if any */}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
