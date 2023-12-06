import { Inter, Lusitana, Roboto } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'], style: ['normal'] });
export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal'],
});

export const robot = Roboto({
  subsets: ['latin'],
  style: ['italic'],
  weight: ['100', '300', '400', '500', '700', '900'],
});
