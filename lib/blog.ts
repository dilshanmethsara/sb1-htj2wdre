export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishDate: string;
  modifiedDate: string;
  coverImage: string;
  author: {
    name: string;
    image: string;
    bio: string;
  };
  tags: string[];
  readingTime: number;
};

// Sample blog posts data
// In a real application, this would come from a database or API
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How to Improve Your Website\'s SEO',
    slug: 'how-to-improve-your-websites-seo',
    excerpt: 'Learn the essential strategies to boost your website\'s visibility in search engines and drive more organic traffic.',
    content: `
      # How to Improve Your Website's SEO

      Search Engine Optimization (SEO) is crucial for the visibility of your website in search engine results pages (SERPs). Here are some essential strategies to improve your website's SEO:

      ## 1. Keyword Research and Optimization

      Begin by identifying keywords relevant to your business and audience. Use tools like Google Keyword Planner, Ahrefs, or SEMrush to find keywords with good search volume and reasonable competition. Once you have your keywords, strategically place them in your:

      - Page titles
      - Headings (H1, H2, H3)
      - URL structure
      - Meta descriptions
      - Content body (aim for a natural keyword density of 1-2%)
      - Image alt text

      ## 2. Create High-Quality Content

      Content is king in SEO. Create comprehensive, valuable content that addresses user needs and questions. Content should be:

      - Original and engaging
      - Well-researched and accurate
      - Properly formatted with headings, lists, and paragraphs
      - Updated regularly to maintain relevance

      ## 3. Technical SEO Optimization

      Technical aspects of your website significantly impact SEO:

      - Ensure fast loading times (under 3 seconds)
      - Make your site mobile-friendly
      - Use HTTPS for security
      - Implement proper URL structure
      - Create and submit an XML sitemap
      - Set up robots.txt correctly

      ## 4. Optimize for On-Page SEO

      On-page SEO refers to optimizing individual pages:

      - Use descriptive, keyword-rich titles
      - Write compelling meta descriptions
      - Implement schema markup
      - Use SEO-friendly URLs
      - Optimize images (compression and alt text)
      - Ensure proper heading structure

      ## 5. Build Quality Backlinks

      Backlinks remain a crucial ranking factor:

      - Create link-worthy content
      - Guest post on reputable sites
      - Reach out to industry influencers
      - List your business in relevant directories
      - Participate in community discussions

      ## 6. Focus on User Experience

      Google increasingly prioritizes websites that offer excellent user experiences:

      - Design intuitive navigation
      - Minimize intrusive popups
      - Ensure readability with proper font sizes and contrast
      - Implement internal linking
      - Reduce bounce rates by engaging users

      ## Conclusion

      SEO is not a one-time effort but a continuous process. Monitor your performance using tools like Google Analytics and Google Search Console, and adapt your strategy based on results. With consistent effort and the right approach, you can significantly improve your website's visibility and attract more organic traffic.
    `,
    publishDate: '2023-07-15T08:00:00Z',
    modifiedDate: '2023-07-18T10:30:00Z',
    coverImage: 'https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg',
    author: {
      name: 'Sarah Johnson',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      bio: 'Digital marketing specialist with over 10 years of experience in SEO and content strategy.'
    },
    tags: ['SEO', 'Digital Marketing', 'Web Development'],
    readingTime: 8
  },
  {
    id: '2',
    title: 'The Future of Web Development: Trends to Watch',
    slug: 'the-future-of-web-development-trends-to-watch',
    excerpt: 'Discover the emerging technologies and methodologies that will shape the future of web development in the coming years.',
    content: `
      # The Future of Web Development: Trends to Watch

      Web development continues to evolve at a rapid pace. Staying ahead of trends is crucial for developers and businesses alike. Here are the key trends shaping the future of web development:

      ## 1. AI and Machine Learning Integration

      Artificial Intelligence and Machine Learning are revolutionizing web development:

      - AI-powered chatbots and virtual assistants
      - Personalized user experiences based on behavior
      - Automated testing and debugging
      - Predictive analytics for user behavior
      - Content generation and optimization

      ## 2. Progressive Web Apps (PWAs)

      PWAs combine the best of web and mobile apps:

      - Offline functionality
      - Fast loading times
      - Push notifications
      - App-like experience
      - No installation required

      ## 3. Serverless Architecture

      Serverless computing is changing backend development:

      - Reduced operational costs
      - Automatic scaling
      - Faster deployment
      - Focus on code rather than infrastructure
      - Pay-per-use pricing model

      ## 4. WebAssembly (Wasm)

      WebAssembly is enabling high-performance web applications:

      - Near-native performance
      - Support for languages beyond JavaScript
      - Efficient binary format
      - Enhanced gaming experiences
      - Complex applications in the browser

      ## 5. Voice Search Optimization

      Voice technology is becoming increasingly important:

      - Voice user interfaces
      - Voice search optimization
      - Voice-activated web functionality
      - Conversational interfaces
      - Integration with smart home devices

      ## 6. Motion UI and Micro-interactions

      Enhanced visual experiences are setting sites apart:

      - Subtle animations
      - Responsive micro-interactions
      - Immersive scrolling experiences
      - Enhanced user feedback
      - Storytelling through motion

      ## 7. API-first Development

      APIs are becoming central to development strategies:

      - Headless CMS implementations
      - Microservices architecture
      - Composable web solutions
      - Enhanced interoperability
      - Streamlined third-party integrations

      ## Conclusion

      The future of web development is exciting and full of opportunities. By embracing these trends, developers can create more engaging, efficient, and innovative web experiences. Continuous learning and adaptation will be key to success in this rapidly evolving landscape.
    `,
    publishDate: '2023-08-22T09:15:00Z',
    modifiedDate: '2023-08-25T14:45:00Z',
    coverImage: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg',
    author: {
      name: 'David Chen',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      bio: 'Full-stack developer and technology consultant specializing in emerging web technologies.'
    },
    tags: ['Web Development', 'Technology Trends', 'Programming'],
    readingTime: 10
  },
  {
    id: '3',
    title: 'Designing for Accessibility: A Comprehensive Guide',
    slug: 'designing-for-accessibility-a-comprehensive-guide',
    excerpt: 'Learn how to create websites that are accessible to all users, including those with disabilities.',
    content: `
      # Designing for Accessibility: A Comprehensive Guide

      Web accessibility ensures that websites and web applications are usable by everyone, including people with disabilities. Here's how to implement accessibility in your web projects:

      ## 1. Understanding Web Accessibility

      Web accessibility encompasses various disabilities:

      - Visual impairments
      - Hearing impairments
      - Motor disabilities
      - Cognitive disabilities
      - Neurological conditions

      ## 2. Key Accessibility Guidelines

      Follow established accessibility guidelines:

      - Web Content Accessibility Guidelines (WCAG)
      - Section 508 compliance
      - ADA requirements
      - Country-specific regulations

      ## 3. Semantic HTML

      Proper HTML structure is foundational for accessibility:

      - Use appropriate heading levels (H1-H6)
      - Implement proper landmarks (header, nav, main, footer)
      - Use semantic elements (article, section, aside)
      - Provide alternative text for images
      - Use proper forms with labels

      ## 4. Keyboard Navigation

      Ensure your site is fully navigable by keyboard:

      - Logical tab order
      - Visible focus indicators
      - Keyboard-accessible interactive elements
      - Skip navigation links
      - No keyboard traps

      ## 5. Color and Contrast

      Visual design must be accessible:

      - Sufficient color contrast (4.5:1 for normal text)
      - Don't rely on color alone to convey information
      - Provide visual cues beyond color
      - Test with color blindness simulators
      - Offer high contrast mode

      ## 6. Screen Reader Compatibility

      Optimize for screen reader users:

      - Provide alternative text for images
      - Use ARIA roles when necessary
      - Create accessible tables
      - Describe visual elements adequately
      - Test with actual screen readers

      ## 7. Responsive and Flexible Design

      Ensure your design works for various needs:

      - Responsive layouts
      - Text resizing without breaking layout
      - Sufficient touch targets for mobile
      - Support for text spacing
      - Zoom compatibility

      ## 8. Testing and Compliance

      Verify accessibility through testing:

      - Automated testing tools
      - Manual testing
      - User testing with people with disabilities
      - Regular accessibility audits
      - Documentation of compliance

      ## Conclusion

      Designing for accessibility is not just a legal requirement but a moral imperative. It expands your audience and creates a better experience for all users. By incorporating accessibility from the beginning of your projects, you create inclusive digital experiences that everyone can use and enjoy.
    `,
    publishDate: '2023-09-10T11:30:00Z',
    modifiedDate: '2023-09-12T16:20:00Z',
    coverImage: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg',
    author: {
      name: 'Michelle Williams',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      bio: 'UX designer specializing in accessible interfaces and inclusive design practices.'
    },
    tags: ['Accessibility', 'UX Design', 'Web Standards'],
    readingTime: 12
  },
];

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, limit: number = 3): BlogPost[] {
  const currentPost = getPostBySlug(slug);
  if (!currentPost) return [];

  return blogPosts
    .filter((post) => post.slug !== slug)
    .sort((a, b) => {
      // Count matching tags
      const aMatch = a.tags.filter(tag => currentPost.tags.includes(tag)).length;
      const bMatch = b.tags.filter(tag => currentPost.tags.includes(tag)).length;
      return bMatch - aMatch;
    })
    .slice(0, limit);
}

export function getPostsByTag(tag: string): BlogPost[] {
  return blogPosts
    .filter((post) => post.tags.includes(tag))
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
}