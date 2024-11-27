'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useBlog } from '@/context/blog-context'
import { BlogList } from './blog-list'

export function BlogSearch() {
  const [query, setQuery] = useState('')
  const { searchPosts } = useBlog()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const results = searchPosts(query)
    // You can update the UI here to show the search results
    console.log(results)
  }

  return (
    <div>
      <form onSubmit={handleSearch} className="flex gap-2 mb-6">
        <Input
          type="text"
          placeholder="Search posts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit">Search</Button>
      </form>
      <BlogList posts={searchPosts(query)} />
    </div>
  )
}

