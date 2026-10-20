
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'CivicPath Australia | Citizenship Test Preparation',
    template: '%s | CivicPath Australia',
  },
  description:
    'Prepare for the Australian citizenship test with topic-based practice, clear explanations, and realistic mock examinations.',
  applicationName: 'CivicPath Australia',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'CivicPath',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#102D27',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
