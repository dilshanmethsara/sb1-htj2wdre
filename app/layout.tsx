import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { DEFAULT_SEO } from '@/lib/seo';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StructuredData from '@/components/shared/StructuredData';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: DEFAULT_SEO.title,
    template: '%s | Modern Business',
  },
  description: DEFAULT_SEO.description,
  keywords: DEFAULT_SEO.keywords,
  authors: [{ name: 'Modern Business Team' }],
  creator: 'Modern Business',
  publisher: 'Modern Business',
  verification: {
    google: 'kZZZjaq8xW3K1-QTvoj8fx-aPJYrjYLIfgl53vzZ2ag',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: DEFAULT_SEO.title,
    description: DEFAULT_SEO.description,
    images: [
      {
        url: DEFAULT_SEO.ogImage,
        width: 1200,
        height: 630,
        alt: DEFAULT_SEO.title,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_SEO.title,
    description: DEFAULT_SEO.description,
    images: [DEFAULT_SEO.ogImage],
    creator: '@modernbusiness',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Website schema for JSON-LD
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Modern Business',
    url: 'https://www.modernbusiness.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.modernbusiness.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };
  
  // Organization schema for JSON-LD
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Modern Business',
    url: 'https://www.modernbusiness.com',
    logo: 'https://www.modernbusiness.com/logo.png',
    sameAs: [
      'https://www.facebook.com/modernbusiness',
      'https://www.twitter.com/modernbusiness',
      'https://www.linkedin.com/company/modernbusiness',
      'https://www.instagram.com/modernbusiness',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-123-456-7890',
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: 'English',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Business Avenue, Suite 100',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      postalCode: '94107',
      addressCountry: 'US',
    },
  };

  return (
    <html lang="en">
      <head>
        <StructuredData data={websiteSchema} />
        <StructuredData data={organizationSchema} />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}