import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Drop Sync',
  description: 'Drop Sync - Blood Donation Website Created by Binary Avengers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        
      {children}
      </body>
    </html>
  )
}