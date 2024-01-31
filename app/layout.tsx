import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './component/Navigation'
import Footer from './component/Footer'
import CartProvider from './component/Provider'
import ShoppingCartModel from './component/ShoppingCartModel'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CroxFashion',
  description: 'Create your own fashion style',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-full w-full overflow-x-hidden`} suppressHydrationWarning>
        <CartProvider>
          <Navigation />
          <ShoppingCartModel />
          <main className='lg:m-auto lg:w-full lg:h-full lg:items-center lg:justify-center'>
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
