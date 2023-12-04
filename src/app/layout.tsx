import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${poppins.variable}`} lang="en">
      <body >{children}</body>
    </html>
  )
}
