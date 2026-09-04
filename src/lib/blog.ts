import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  image?: string;
  readingTime: string;
  content: string;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx') || f.endsWith('.md'));
  
  const posts = files
    .map((filename) => {
      const filePath = path.join(BLOG_DIR, filename);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);
      const slug = filename.replace(/\.(mdx|md)$/, '');
      const stats = readingTime(content);

      return {
        slug,
        title: data.title || 'Untitled',
        description: data.description || '',
        date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
        author: data.author || 'Osvaro',
        category: data.category || 'General',
        tags: data.tags || [],
        image: data.image || undefined,
        readingTime: stats.text,
        content,
      } as BlogPost;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts();
  return posts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter((p) => p.category.toLowerCase() === category.toLowerCase());
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set(posts.map((p) => p.category));
  return Array.from(categories);
}
