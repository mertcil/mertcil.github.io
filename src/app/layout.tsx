import type { Metadata, Viewport } from 'next'
import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ThemeToggle from '@/components/ThemeToggle'
import Providers from '@/components/Providers'
import LayoutWrapper from '@/components/LayoutWrapper'
import React from 'react'

export const metadata: Metadata = {
  title: {
    default: 'Mevlut Mert CIL | Full Stack Developer',
    template: '%s | Mevlut Mert CIL',
  },
  description: 'Full Stack Software Developer passionate about building scalable enterprise applications. Specializing in React, Node.js, TypeScript, WebRTC, and cloud technologies.',
  keywords: ['Full Stack Developer', 'Software Engineer', 'React', 'Node.js', 'TypeScript', 'WebRTC', 'Next.js', 'JavaScript', 'Web Development'],
  authors: [{ name: 'Mevlut Mert CIL', url: 'https://mertcil.github.io' }],
  creator: 'Mevlut Mert CIL',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mertcil.github.io',
    title: 'Mevlut Mert CIL | Full Stack Developer',
    description: 'Full Stack Software Developer passionate about building scalable enterprise applications.',
    siteName: 'Mevlut Mert CIL Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mevlut Mert CIL | Full Stack Developer',
    description: 'Full Stack Software Developer passionate about building scalable enterprise applications.',
    creator: '@mertcil',
    site: '@mertcil',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://mertcil.github.io',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ThemeToggle />
          <LayoutWrapper>
            <Header />
            {children}
            <Footer />
          </LayoutWrapper>
        </Providers>
      </body>
    </html>
  )
}

