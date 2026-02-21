import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'


import WhatsAppFloat from '@/components/WhatsAppFloat'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JKG Developers - Innovative Digital Solutions',
  description: 'Transforming businesses through cutting-edge web development, design, and digital marketing solutions.',
  icons: {
    icon: "/images/jkg_logo.ico", // Path from public folder
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  )
}