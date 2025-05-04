import React from 'react';
import Link from 'next/link';
import { Clock, Calendar } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { BlogPost } from '@/lib/blog';

interface BlogCardProps {
  post: BlogPost;
  variant?: 'default' | 'compact' | 'featured';
}

export default function BlogCard({ post, variant = 'default' }: BlogCardProps) {
  const publishDate = new Date(post.publishDate);
  const timeAgo = formatDistanceToNow(publishDate, { addSuffix: true });
  
  if (variant === 'featured') {
    return (
      <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 h-full hover:shadow-xl transition-shadow">
        <div className="md:flex">
          <div className="md:w-1/2">
            <div className="relative h-60 md:h-full">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2 p-6 md:p-8 flex flex-col">
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                {post.title}
              </Link>
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center">
                <img
                  src={post.author.image}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {post.author.name}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Calendar size={14} className="mr-1" />
                    <span>{timeAgo}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                <Clock size={14} className="mr-1" />
                <span>{post.readingTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
  
  if (variant === 'compact') {
    return (
      <article className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-20 h-20 rounded-md overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-grow">
          <h3 className="text-base font-medium text-gray-900 dark:text-white mb-1">
            <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
              {post.title}
            </Link>
          </h3>
          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
            <Calendar size={12} className="mr-1" />
            <span>{timeAgo}</span>
            <span className="mx-2">•</span>
            <Clock size={12} className="mr-1" />
            <span>{post.readingTime} min read</span>
          </div>
        </div>
      </article>
    );
  }
  
  // Default card
  return (
    <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden h-full flex flex-col border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
      <div className="relative aspect-video">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
          {post.tags[0]}
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center mb-3 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center">
            <img
              src={post.author.image}
              alt={post.author.name}
              className="w-6 h-6 rounded-full mr-2"
            />
            <span>{post.author.name}</span>
          </div>
          <span className="mx-2">•</span>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{post.readingTime} min read</span>
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
            {post.title}
          </Link>
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
          {post.excerpt}
        </p>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors mt-auto"
        >
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}