'use client';

import type { Metadata } from 'next';
import { useState } from 'react';

import ThemeProvider from '@/providers/themeProvider';

import SkipNavButton from '@/components/Accessibility/SkipNavButton';
// import Header from '@/components/Common/Header';
// import LandscapeMenu from '@/components/Common/LandscapeMenu/LandscapeMenu';
import SonnerToast from '@/components/Common/SonnerToast';

import { roboto } from '@/styles/fonts';
import '@/styles/globals.css';
import '@/styles/tailwind.css';

// TODO: Change Metadata
export const metadata: Metadata = {
  title: 'PUAS | Sistemas Judiciales',
  description:
    'Sistema Judicial para la utilizacion de servicios internos del Poder Judicial de Tucumán',
  authors: [{ name: 'Dirección de Sistemas del Poder Judicial de Tucumán' }],
  keywords: [
    'sistema judicial',
    'pjt',
    'poder judicial',
    'tucuman',
    'corte justicia',
  ],
};

// TODO: Change this const
const isLoggedIn = true;

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  // DECLARACIONES
  const [open, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  // RENDERIZO
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={roboto.className}>
        <ThemeProvider>
          <SkipNavButton />
          {/* <LandscapeMenu
            isLoggedIn={isLoggedIn}
            open={open}
            setOpen={setOpen}
            setScrolling={setScrolling}
          > */}
          {/* {isLoggedIn && <Header scrolling={scrolling} />} */}
          <main id="main">{children}</main>
          <SonnerToast />
          {/* </LandscapeMenu> */}
          {/* <FixedButtons /> if any */}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
