import React from 'react';
import { getAllPosts, BlogPost } from '@/lib/blog';
import BlogCard from './BlogCard';
import AnimatedSection from '../shared/AnimatedSection';

interface BlogListProps {
  posts?: BlogPost[];
  featured?: boolean;
}

export default function BlogList({ posts, featured = true }: BlogListProps) {
  const allPosts = posts || getAllPosts();
  
  return (
    <div className="space-y-10">
      {featured && allPosts.length > 0 && (
        <AnimatedSection>
          <BlogCard post={allPosts[0]} variant="featured" />
        </AnimatedSection>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {(featured ? allPosts.slice(1) : allPosts).map((post, index) => (
          <AnimatedSection key={post.id} delay={0.1 * (index % 3)}>
            <BlogCard post={post} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}