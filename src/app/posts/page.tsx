import PostsLayout from './PostsLayout'
import { getAllPostsMetadata } from '@/lib/posts'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog Posts | Mevlut Mert CIL',
  description: 'Technical articles and insights on software development, web technologies, and engineering best practices by Mevlut Mert CIL.',
  openGraph: {
    title: 'Blog Posts | Mevlut Mert CIL',
    description: 'Technical articles and insights on software development, web technologies, and engineering best practices.',
    type: 'website',
    url: 'https://mertcil.github.io/posts',
    siteName: 'Mevlut Mert CIL Portfolio',
  },
  twitter: {
    card: 'summary',
    title: 'Blog Posts | Mevlut Mert CIL',
    description: 'Technical articles and insights on software development and engineering.',
  },
  alternates: {
    canonical: 'https://mertcil.github.io/posts',
  },
}

export default function PostsPage() {
  const posts = getAllPostsMetadata().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  return <PostsLayout posts={posts} />
}
