import { Metadata } from 'next';

type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: 'website' | 'article';
  canonicalUrl?: string;
};

export const DEFAULT_SEO = {
  title: 'Modern Business | Professional Web Solutions',
  description: 'We deliver innovative web solutions designed to grow your business and enhance your online presence.',
  keywords: ['web development', 'professional', 'business solutions', 'digital marketing'],
  ogImage: '/images/og-image.jpg',
  ogType: 'website' as const,
};

export function constructMetadata({
  title = DEFAULT_SEO.title,
  description = DEFAULT_SEO.description,
  keywords = DEFAULT_SEO.keywords,
  ogImage = DEFAULT_SEO.ogImage,
  ogType = DEFAULT_SEO.ogType,
  canonicalUrl,
}: SEOProps = {}): Metadata {
  return {
    title,
    description,
    keywords: keywords.join(', '),
    openGraph: {
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: ogType,
      siteName: DEFAULT_SEO.title,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    ...(canonicalUrl && {
      alternates: {
        canonical: canonicalUrl,
      },
    }),
  };
}

export function generateStructuredData(type: 'website' | 'article' | 'business', data: Record<string, any>) {
  if (type === 'website') {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: data.name,
      url: data.url,
      description: data.description,
    };
  }

  if (type === 'article') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: data.title,
      description: data.description,
      image: data.image,
      datePublished: data.publishDate,
      dateModified: data.modifiedDate,
      author: {
        '@type': 'Person',
        name: data.author.name,
      },
    };
  }

  if (type === 'business') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: data.name,
      url: data.url,
      logo: data.logo,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: data.phone,
        contactType: 'customer service',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: data.address.street,
        addressLocality: data.address.city,
        addressRegion: data.address.region,
        postalCode: data.address.zip,
        addressCountry: data.address.country,
      },
    };
  }

  return {};
}