import { Feed } from 'feed';
import { getAllPosts } from '@/lib/blog';
import { siteConfig } from '@/lib/constants';

export async function GET() {
  const posts = getAllPosts();
  
  const feed = new Feed({
    title: `${siteConfig.name} Insights`,
    description: siteConfig.description,
    id: siteConfig.url,
    link: siteConfig.url,
    language: 'en-GB',
    copyright: `© ${new Date().getFullYear()} ${siteConfig.name}. All rights reserved.`,
    author: {
      name: siteConfig.name,
      email: siteConfig.email || 'hello@osvaro.co.uk',
      link: siteConfig.url,
    },
  });

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${siteConfig.url}/blog/${post.slug}`,
      link: `${siteConfig.url}/blog/${post.slug}`,
      description: post.description,
      date: new Date(post.date),
      author: [{ name: post.author }],
    });
  });

  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
