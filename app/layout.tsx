import '@mantine/core/styles.css';

import React from 'react';
import { Kumbh_Sans } from 'next/font/google';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { resolver, theme } from '../theme';

export const metadata = {
  title: 'Frontend Mentor | E-commerce product page',
  description:
    'A responsive e-commerce product page built with Next.js, featuring an interactive image gallery, cart functionality, and a modern UI.',
};

const kumbhSans = Kumbh_Sans({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-kumbh-sans',
});

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps} className={kumbhSans.variable}>
      <head>
        <ColorSchemeScript forceColorScheme="light" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme} cssVariablesResolver={resolver} forceColorScheme="light">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
