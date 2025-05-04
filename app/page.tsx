import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Features from '@/components/home/Features';
import BlogPreview from '@/components/home/BlogPreview';
import ContactForm from '@/components/home/ContactForm';

export const metadata: Metadata = constructMetadata({
  title: 'Modern Business | Professional Web Solutions',
  description: 'We deliver innovative web solutions designed to grow your business and enhance your online presence.',
  ogImage: '/images/og-home.jpg',
});

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <BlogPreview />
      <ContactForm />
    </>
  );
}