import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Work & Projects',
  description: 'Signature projects and initiatives spanning real-time communication, telecom infrastructure, enterprise modernization, and platform engineering.',
  openGraph: {
    title: 'Work & Projects | Mevlut Mert CIL',
    description: 'A curated selection of engagements spanning WebRTC platforms, 5G networks, and enterprise applications.',
    type: 'website',
    url: 'https://mertcil.github.io/work',
    siteName: 'Mevlut Mert CIL Portfolio',
  },
  twitter: {
    card: 'summary',
    title: 'Work & Projects | Mevlut Mert CIL',
    description: 'Portfolio of software engineering projects and professional experience.',
  },
  alternates: {
    canonical: 'https://mertcil.github.io/work',
  },
}

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
