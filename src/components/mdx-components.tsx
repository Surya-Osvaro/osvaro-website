import React from 'react';
import Link from 'next/link';

export const mdxComponents: Record<string, React.ComponentType<any>> = {
  h1: ({ children, ...props }) => (
    <h1 className="font-serif text-4xl text-[#1A1A1A] mt-12 mb-6" {...props}>{children}</h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 className="font-serif text-3xl text-[#1A1A1A] mt-10 mb-5" {...props}>{children}</h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="font-serif text-2xl text-[#1A1A1A] mt-8 mb-4" {...props}>{children}</h3>
  ),
  p: ({ children, ...props }) => (
    <p className="font-sans text-[#4A4A4A] leading-relaxed mb-6" {...props}>{children}</p>
  ),
  ul: ({ children, ...props }) => (
    <ul className="list-disc pl-6 mb-6 space-y-2 text-[#4A4A4A]" {...props}>{children}</ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="list-decimal pl-6 mb-6 space-y-2 text-[#4A4A4A]" {...props}>{children}</ol>
  ),
  li: ({ children, ...props }) => (
    <li {...props}>{children}</li>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote className="border-l-4 border-[#6B7F4E] bg-[#F5F0E8] italic px-6 py-4 rounded-r-lg my-8 text-[#1A1A1A]" {...props}>
      {children}
    </blockquote>
  ),
  a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isInternal = href && (href.startsWith('/') || href.startsWith('#'));
    if (isInternal) {
      return (
        <Link href={href} className="text-[#6B7F4E] hover:underline font-medium" {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-[#6B7F4E] hover:underline font-medium"
        {...props}
      >
        {children}
      </a>
    );
  },
  code: ({ children, ...props }) => (
    <code className="bg-[#E5DFD3] text-[#1A1A1A] px-1.5 py-0.5 rounded text-sm font-mono" {...props}>
      {children}
    </code>
  ),
  pre: ({ children, ...props }) => (
    <pre className="bg-[#1A1A1A] text-[#FAF8F4] p-6 rounded-lg overflow-x-auto my-8 text-sm" {...props}>
      {children}
    </pre>
  ),
  img: ({ alt = '', ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img alt={alt} className="rounded-xl w-full my-8 object-cover shadow-sm" {...props} />
  ),
  hr: (props) => (
    <hr className="border-[#E5DFD3] my-12" {...props} />
  ),
  table: ({ children, ...props }) => (
    <div className="overflow-x-auto my-8">
      <table className="min-w-full divide-y divide-[#E5DFD3] border border-[#E5DFD3] rounded-lg overflow-hidden" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }) => (
    <thead className="bg-[#F5F0E8]" {...props}>{children}</thead>
  ),
  th: ({ children, ...props }) => (
    <th className="px-6 py-3 text-left text-sm font-semibold text-[#1A1A1A] tracking-wider" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td className="px-6 py-4 text-sm text-[#4A4A4A] border-t border-[#E5DFD3]" {...props}>
      {children}
    </td>
  ),
};
