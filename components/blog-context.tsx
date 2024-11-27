'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { BlogPost } from '@/types/blog'
import { blogPosts } from '@/data/blog-posts'

interface BlogContextType {
  posts: BlogPost[]
  searchPosts: (query: string) => BlogPost[]
  getPostsByTag: (tag: string) => BlogPost[]
}

const BlogContext = createContext<BlogContextType | undefined>(undefined)

export function BlogProvider({ children }: { children: React.ReactNode }) {
  const [posts, setPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    setPosts(blogPosts)
  }, [])

  const searchPosts = (query: string) => {
    return posts.filter(post => 
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    )
  }

  const getPostsByTag = (tag: string) => {
    return posts.filter(post => post.tags.includes(tag))
  }

  return (
    <BlogContext.Provider value={{ posts, searchPosts, getPostsByTag }}>
      {children}
    </BlogContext.Provider>
  )
}

export function useBlog() {
  const context = useContext(BlogContext)
  if (context === undefined) {
    throw new Error('useBlog must be used within a BlogProvider')
  }
  return context
}

