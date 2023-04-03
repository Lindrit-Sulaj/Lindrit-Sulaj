import './globals.css';
import { Navbar } from '@/components';
import { Archivo, Manrope } from 'next/font/google'
import Script from 'next/script';

export const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap'
})

export const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={archivo.className}>
        <Navbar />
        <Script src="https://kit.fontawesome.com/72aeedc907.js" crossorigin="anonymous" />
        {children}
      </body>

      <link precedence="default" rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />

    </html>
  )
}
