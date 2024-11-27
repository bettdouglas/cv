import { BlogPost } from '@/components/blog-post'
import { blogPosts } from '@/data/blog-posts'
import { notFound } from 'next/navigation'

// This function tells Next.js exactly which blog posts to generate at build time
export async function generateStaticParams() {
  // We map through all blog posts to create an array of slug objects
  // Each object must match the shape of the params your page expects
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

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

