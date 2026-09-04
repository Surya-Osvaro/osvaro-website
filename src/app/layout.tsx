import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://osvaro.co.uk'),
  title: {
    default: 'Osvaro — AI-Powered Operating Systems for UK Immigration Firms',
    template: '%s | Osvaro',
  },
  description:
    'Osvaro builds and manages AI-powered workflows that collect evidence, maintain compliance, and surface operational bottlenecks for UK Immigration firms.',
  keywords: [
    'UK immigration',
    'immigration law firms',
    'AI automation',
    'case management',
    'sponsor compliance',
    'workflow automation',
    'legal operations',
    'immigration technology',
  ],
  authors: [{ name: 'Osvaro' }],
  creator: 'Osvaro',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://osvaro.co.uk',
    siteName: 'Osvaro',
    title: 'Osvaro — AI-Powered Operating Systems for UK Immigration Firms',
    description:
      'Osvaro builds and manages AI-powered workflows that collect evidence, maintain compliance, and surface operational bottlenecks for UK Immigration firms.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Osvaro — AI-Powered Operating Systems for UK Immigration Firms',
    description:
      'Osvaro builds and manages AI-powered workflows that collect evidence, maintain compliance, and surface operational bottlenecks for UK Immigration firms.',
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
