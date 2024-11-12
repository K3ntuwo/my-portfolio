import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Adrian Cabrera',
  description: 'My Portfolio',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" type="image/svg+xml" href="/images/logo.svg" /> 
      <body className={inter.className}>{children}</body>
    </html>
  )
}
