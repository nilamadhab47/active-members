import './globals.css'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'

import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page '
}

function MainLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <title>Next.js starter</title>
        <meta name='description' content='A Starter with Next.js' />
      </head>

      <body className={GeistSans.className}>
        <ThemeProvider attribute='class' defaultTheme='system'>
          <main className='min-h-screen'>
                  <div className='max-w-7xl mx-auto p-4'>{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default MainLayout
