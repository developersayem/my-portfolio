import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sayem Molla',
  description:
    'Sayem Molla - A passionate full-stack web developer with expertise in MERN stack, Next.js, and Tailwind CSS. This is my personal website where I share my projects, skills, and experiences.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >{children}
        </ThemeProvider></body>
    </html>
  )
}
