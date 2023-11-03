import { Press_Start_2P } from 'next/font/google'
import localFont from 'next/font/local'

import './globals.css'

const PokeIDExFont = localFont({ src: '../public/fonts/uni05_53.ttf' })

const pressStart2P = Press_Start_2P({
  weight: '400',
  preload: false,
  variable: '--font-title'
});

export const metadata = {
  title: 'PokéIDEx',
  icons: [
    {
      rel: 'icon',
      url: '/favicon/favicon.ico'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicon/apple-touch-icon.png'
    },
    {
      rel: 'manifest',
      url: '/favicon/site.webmanifest'
    }
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${PokeIDExFont.className} ${pressStart2P.variable}`}>{children}</body>
    </html>
  )
}