import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BlogPost } from '@/types/blog'
import Link from 'next/link'

interface BlogListProps {
  posts: BlogPost[]
}

export function BlogList({ posts }: BlogListProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Card key={post.slug} className="flex flex-col">
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{post.description}...</p>
          </CardContent>
          <CardFooter className="mt-auto">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
          </CardFooter>
          <CardFooter>
            <Link href={`/blog/${post.slug}`} className="text-primary hover:underline">
              Read more
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

