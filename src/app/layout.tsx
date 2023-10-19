
import './globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from './_app';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alysson Victoria',
  description: 'Personal Web-site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          {children}
        </body>
      </Providers>
      {/* <html lang="en">
      <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body className={inter.className}>{children}</body>
        </html> */}
    </html>


  )
}
