import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My First Next App',
  description: 'My first Next.js template',
  author: 'Farid Ganbarov',
  keywords: 'Next.js, React, App, Javascript',
  charset: 'UTF-8',
  robots: 'index, follow',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-us">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

// metadata, viewport are reserved names too.Next.s will understand that is for metadata

// the layout.js is a wrapper around one or more pages, and depending on which path you are, children will then simply be the content of the page JS file that's currently active. So, layout JS and page JS work together.

// i created components folder for components and app folder is only for the routing and routing relating tasks
