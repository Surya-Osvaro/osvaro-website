import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { getAllPosts } from '@/lib/blog';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRight, Clock } from '@phosphor-icons/react/dist/ssr';

export const metadata: Metadata = {
  title: 'Insights | Osvaro',
  description: 'Practical thinking on immigration operations, workflow design, and legal technology.',
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-[#FAF8F4] flex flex-col">
      <Navbar />
      
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full flex-grow">
        <div className="max-w-3xl mb-16">
          <h1 className="font-serif text-5xl md:text-6xl text-[#1A1A1A] mb-6">Insights</h1>
          <p className="text-xl text-[#6B6B6B] font-sans">
            Practical thinking on immigration operations, workflow design, and legal technology.
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <article className="bg-[#F5F0E8] rounded-xl overflow-hidden border border-[#E5DFD3] h-full flex flex-col transition-transform hover:-translate-y-1 hover:shadow-lg">
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-[#6B7F4E] text-[#FAF8F4] text-xs px-2.5 py-1 rounded-full font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-[#6B6B6B]">
                        <Clock weight="fill" className="size-3" />
                        <span>{post.readingTime}</span>
                      </div>
                    </div>
                    
                    <h2 className="font-serif text-2xl text-[#1A1A1A] mb-3 group-hover:text-[#6B7F4E] transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-[#6B6B6B] text-sm mb-6 flex-grow">
                      {post.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-sm font-medium text-[#1A1A1A] group-hover:text-[#6B7F4E] transition-colors mt-auto">
                      Read more <ArrowRight className="size-4" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-[#F5F0E8] rounded-xl p-12 text-center border border-[#E5DFD3]">
            <p className="text-[#6B6B6B] text-lg max-w-2xl mx-auto">
              Articles coming soon. We're preparing practical insights on immigration operations, compliance workflows, and legal technology.
            </p>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
