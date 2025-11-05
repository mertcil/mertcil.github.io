import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Mevlut Mert CIL for collaboration opportunities, consulting, or professional inquiries. Available via email, LinkedIn, and GitHub.',
  openGraph: {
    title: 'Contact | Mevlut Mert CIL',
    description: 'Connect for collaboration opportunities and professional inquiries.',
    type: 'website',
    url: 'https://mertcil.github.io/contact',
    siteName: 'Mevlut Mert CIL Portfolio',
  },
  twitter: {
    card: 'summary',
    title: 'Contact | Mevlut Mert CIL',
    description: 'Get in touch for collaboration opportunities.',
  },
  alternates: {
    canonical: 'https://mertcil.github.io/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
