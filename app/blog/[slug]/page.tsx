import { BlogPost } from '@/components/blog-post'
import { blogPosts } from '@/data/blog-posts'
import { notFound } from 'next/navigation'

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(post => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <BlogPost post={post} />
    </div>
  )
}

