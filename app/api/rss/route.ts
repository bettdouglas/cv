import { blogPosts } from '@/data/blog-posts';
import RSS from 'rss';

export const dynamic = 'force-static'


export async function GET() {
  const feed = new RSS({
    title: "Douglas David Bett's Blog",
    description: "Latest blog posts from Douglas David Bett",
    feed_url: `${process.env.NEXT_PUBLIC_SITE_URL}/api/rss`,
    site_url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    image_url: `${process.env.NEXT_PUBLIC_SITE_URL}/rss-icon.png`,
    pubDate: new Date(),
    ttl: 60,
  });

  blogPosts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.content.substring(0, 150) + '...',
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${post.slug}`,
      date: new Date(post.publishDate),
    });
  });

  return new Response(feed.xml(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
