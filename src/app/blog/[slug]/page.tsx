import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, User } from '@phosphor-icons/react/dist/ssr';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from '@/components/mdx-components';
import { siteConfig } from '@/lib/constants';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} | ${siteConfig.name}`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    datePublished: post.date,
  };

  return (
    <main className="min-h-screen bg-[#FAF8F4] flex flex-col">
      <Navbar />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="pt-32 pb-24 px-6 md:px-12 w-full max-w-3xl mx-auto flex-grow">
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors mb-8"
        >
          <ArrowLeft className="size-4" /> Back to insights
        </Link>

        <header className="mb-12 border-b border-[#E5DFD3] pb-10">
          <span className="inline-block bg-[#6B7F4E] text-[#FAF8F4] text-xs px-3 py-1 rounded-full font-medium mb-6">
            {post.category}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-[#6B6B6B]">
            <div className="flex items-center gap-2">
              <User weight="fill" className="size-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock weight="fill" className="size-4" />
              <span>{post.readingTime}</span>
            </div>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </time>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </article>

      <Footer />
    </main>
  );
}
