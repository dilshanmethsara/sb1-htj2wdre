import { Metadata } from 'next';
import Link from 'next/link';
import { getPostBySlug, getRelatedPosts, getAllPosts } from '@/lib/blog';
import { constructMetadata, generateStructuredData } from '@/lib/seo';
import { formatDistanceToNow, format } from 'date-fns';
import { Clock, Calendar, ChevronLeft, User } from 'lucide-react';
import StructuredData from '@/components/shared/StructuredData';
import BlogCard from '@/components/blog/BlogCard';
import AnimatedSection from '@/components/shared/AnimatedSection';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return constructMetadata({
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    });
  }
  
  return constructMetadata({
    title: post.title,
    description: post.excerpt,
    ogImage: post.coverImage,
    ogType: 'article',
    canonicalUrl: `https://www.modernbusiness.com/blog/${post.slug}`,
  });
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <p className="mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
        <Link href="/blog" className="text-blue-600 hover:underline">
          ← Back to Blog
        </Link>
      </div>
    );
  }
  
  const publishDate = new Date(post.publishDate);
  const formattedDate = format(publishDate, 'MMMM dd, yyyy');
  const timeAgo = formatDistanceToNow(publishDate, { addSuffix: true });
  const relatedPosts = getRelatedPosts(params.slug);
  
  // Article schema for JSON-LD
  const articleSchema = generateStructuredData('article', {
    title: post.title,
    description: post.excerpt,
    image: post.coverImage,
    publishDate: post.publishDate,
    modifiedDate: post.modifiedDate,
    author: post.author,
  });

  return (
    <>
      <StructuredData data={articleSchema} />
      
      <article className="bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <div className="w-full h-[40vh] md:h-[60vh] relative bg-gray-900">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="text-center max-w-4xl">
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                {post.title}
              </h1>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center">
                <img
                  src={post.author.image}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="flex items-center text-gray-900 dark:text-white">
                    <User size={16} className="mr-2" />
                    <span className="font-medium">{post.author.name}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                    <Calendar size={14} className="mr-1" />
                    <span>{formattedDate}</span>
                    <span className="mx-2">•</span>
                    <Clock size={14} className="mr-1" />
                    <span>{post.readingTime} min read</span>
                  </div>
                </div>
              </div>
              <Link
                href="/blog"
                className="text-blue-600 hover:text-blue-800 transition-colors flex items-center text-sm font-medium"
              >
                <ChevronLeft size={16} className="mr-1" />
                Back to Blog
              </Link>
            </div>
            
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
            
            {/* Author Bio */}
            <div className="mt-16 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="flex items-start sm:items-center flex-col sm:flex-row gap-6">
                <img
                  src={post.author.image}
                  alt={post.author.name}
                  className="w-20 h-20 rounded-full"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    About {post.author.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {post.author.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="max-w-6xl mx-auto mt-20">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost, index) => (
                  <AnimatedSection key={relatedPost.id} delay={0.1 * index}>
                    <BlogCard post={relatedPost} />
                  </AnimatedSection>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}