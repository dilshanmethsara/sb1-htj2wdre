import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import { getAllPosts } from '@/lib/blog';
import StructuredData from '@/components/shared/StructuredData';
import BlogList from '@/components/blog/BlogList';
import AnimatedSection from '@/components/shared/AnimatedSection';

export const metadata: Metadata = constructMetadata({
  title: 'Blog | Modern Business',
  description: 'Explore our latest articles, insights, and strategies for optimizing your digital presence and growing your business online.',
  ogImage: '/images/og-blog.jpg',
  canonicalUrl: 'https://www.modernbusiness.com/blog',
});

export default function BlogPage() {
  const posts = getAllPosts();
  
  // Blog listing schema for JSON-LD
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    headline: 'Modern Business Blog',
    description: 'Explore our latest articles, insights, and strategies for optimizing your digital presence.',
    url: 'https://www.modernbusiness.com/blog',
    image: '/images/og-blog.jpg',
    author: {
      '@type': 'Organization',
      name: 'Modern Business',
      url: 'https://www.modernbusiness.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Modern Business',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.modernbusiness.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.modernbusiness.com/blog',
    },
  };

  return (
    <>
      <StructuredData data={blogSchema} />
      
      <div className="bg-gray-50 dark:bg-gray-800 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our <span className="text-blue-600">Blog</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Explore our latest insights, tips, and strategies for optimizing your digital presence and growing your business online.
              </p>
            </div>
          </AnimatedSection>
          
          <BlogList posts={posts} />
        </div>
      </div>
    </>
  );
}