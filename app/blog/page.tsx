import { BlogList } from '@/components/blog-list'
import { blogPosts } from '@/data/blog-posts'

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <BlogList posts={blogPosts} />
    </div>
  )
}

