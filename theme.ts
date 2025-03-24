'use client';

import { createTheme, rem } from '@mantine/core';

export const theme = createTheme({
  fontFamily: 'var(--font-kumbh-sans)',
  defaultRadius: rem(10),
  primaryColor: 'orange',

  // Colors must be an array with at least 10 shades. I entered the colors from
  // the Figma file into Mantine's colors generator and commented the values to
  // be used in our design system.
  colors: {
    grey: [
      '#f6f8fd', // grey-50
      '#e4e9f2', // grey-100
      '#c3cad9', // grey-300
      '#acaeb3',
      '#92969e',
      '#818691',
      '#787e8c',
      '#69707d', // grey-500
      '#5a606e',
      '#1d2026', // grey-950
    ],
    orange: [
      '#fff2e0',
      '#ffe3cb',
      '#ffc699',
      '#ffab6a', // orange-300
      '#ff8d36',
      '#ff7e1b', // orange-500
      '#ff7306',
      '#e46200',
      '#cc5600',
      '#b24800',
    ],
  },

  spacing: {
    0: rem(0),
    100: rem(8),
    200: rem(16),
    300: rem(24),
    400: rem(32),
    500: rem(40),
    600: rem(48),
    700: rem(56),
    900: rem(72),
    1000: rem(80),
    1200: rem(96),
    1300: rem(104),
    1600: rem(128),
  },
});
