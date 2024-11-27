"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { BlogPost as BlogPostType } from '@/types/blog'
import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { CodeBlock } from './code-block'

interface BlogPostProps {
  post: BlogPostType
}

export function BlogPost({ post }: BlogPostProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <article className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="flex items-center gap-4 mb-6">
        <time className="text-muted-foreground">{new Date(post.publishDate).toLocaleDateString()}</time>
        <div className="flex gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </div>
      
      <Card className="mb-8">
        <CardContent className="pt-6">
          <p className="text-lg font-medium text-muted-foreground">{post.description}</p>
        </CardContent>
      </Card>

      {post.coverImage && (
        <Image 
          src={post.coverImage} 
          alt={post.title} 
          width={800} 
          height={400} 
          className="rounded-lg mb-6"
        />
      )}
      <div className="prose dark:prose-invert max-w-none">
        <ReactMarkdown
          components={{
            code({node, inline, className, children, ...props}) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <CodeBlock
                  language={match[1]}
                  value={String(children).replace(/\n$/, '')}
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            }
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Share this post</h2>
        <div className="flex gap-4">
          <a 
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            <FacebookIcon className="w-6 h-6" />
            <span className="sr-only">Share on Facebook</span>
          </a>
          <a 
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            <TwitterIcon className="w-6 h-6" />
            <span className="sr-only">Share on Twitter</span>
          </a>
          <a 
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            <LinkedinIcon className="w-6 h-6" />
            <span className="sr-only">Share on LinkedIn</span>
          </a>
        </div>
      </div>
    </article>
  )
}

