import './globals.css';
import { Navbar } from '@/components';
import { Archivo, Manrope } from 'next/font/google'

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
        {children}
      </body>
    </html>
  )
}
