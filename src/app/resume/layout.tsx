import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resume & CV',
  description: 'Professional resume of Mevlut Mert CIL - Senior Software Development Engineer with expertise in full-stack development, WebRTC, cloud technologies, and enterprise systems.',
  openGraph: {
    title: 'Resume & CV | Mevlut Mert CIL',
    description: 'Professional experience, technical skills, education, and accomplishments.',
    type: 'profile',
    url: 'https://mertcil.github.io/resume',
    siteName: 'Mevlut Mert CIL Portfolio',
  },
  twitter: {
    card: 'summary',
    title: 'Resume & CV | Mevlut Mert CIL',
    description: 'Professional background and technical expertise.',
  },
  alternates: {
    canonical: 'https://mertcil.github.io/resume',
  },
}

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
