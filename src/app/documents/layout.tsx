import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Documents & Downloads',
  description: 'Download professional documents including CV, resume, and other career-related materials from Mevlut Mert CIL.',
  openGraph: {
    title: 'Documents & Downloads | Mevlut Mert CIL',
    description: 'Access and download professional documents and CV.',
    type: 'website',
    url: 'https://mertcil.github.io/documents',
    siteName: 'Mevlut Mert CIL Portfolio',
  },
  twitter: {
    card: 'summary',
    title: 'Documents & Downloads | Mevlut Mert CIL',
    description: 'Download professional documents and CV.',
  },
  alternates: {
    canonical: 'https://mertcil.github.io/documents',
  },
}

export default function DocumentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
