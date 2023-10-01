import { Comfortaa, Roboto } from 'next/font/google';

export const comfortaa = Comfortaa({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '500', '600'],
  variable: '--font-comfortaa'
});

export const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['400']
});
