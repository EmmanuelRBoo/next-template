import './globals.css'
import type { Metadata } from 'next'
import Provider from './provider'

interface IRoot {
    children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: IRoot) {
  return (
    <html lang="en" className='bg-zinc-100'>
        <body>
            <Provider>
                {children}
            </Provider>
        </body>
    </html>
  )
}
