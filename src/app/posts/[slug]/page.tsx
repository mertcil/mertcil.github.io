import { getPostBySlug, getSlugs, renderMarkdownToHtml } from '@/lib/posts'
import { notFound } from 'next/navigation'
import PostContent from './PostContent'
import type { Metadata } from 'next'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found | Mevlut Mert CIL',
      description: 'The requested blog post could not be found.',
    }
  }

  return {
    title: `${post.title} | Mevlut Mert CIL`,
    description: post.excerpt || `Read about ${post.title} by Mevlut Mert CIL`,
    authors: [{ name: post.author || 'Mevlut Mert CIL' }],
    keywords: post.tags?.length ? post.tags : undefined,
    openGraph: {
      title: post.title,
      description: post.excerpt || `Read about ${post.title}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author || 'Mevlut Mert CIL'],
      tags: post.tags,
      url: `https://mertcil.github.io/posts/${slug}`,
      siteName: 'Mevlut Mert CIL Portfolio',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || `Read about ${post.title}`,
      creator: '@mertcil',
      site: '@mertcil',
    },
    alternates: {
      canonical: `https://mertcil.github.io/posts/${slug}`,
    },
    category: post.category,
  }
}

export default async function PostPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const htmlContent = await renderMarkdownToHtml(post.content, slug)

  return (
    <PostContent
      title={post.title}
      date={post.date}
      author={post.author}
      category={post.category}
      tags={post.tags}
      htmlContent={htmlContent}
    />
  )
}
