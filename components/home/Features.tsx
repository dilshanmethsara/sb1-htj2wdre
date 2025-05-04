import React from 'react';
import {
  LayoutGrid,
  Search,
  Smartphone,
  Clock,
  Shield,
  LineChart,
  Globe,
  Code,
} from 'lucide-react';
import AnimatedSection from '../shared/AnimatedSection';

const features = [
  {
    icon: <LayoutGrid className="h-8 w-8" />,
    title: 'Web Design & Development',
    description:
      'Custom websites that are visually stunning, functionally robust, and tailored to your specific business needs.',
  },
  {
    icon: <Search className="h-8 w-8" />,
    title: 'Search Engine Optimization',
    description:
      'Comprehensive SEO strategies that improve your visibility, drive organic traffic, and increase your search engine rankings.',
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: 'Responsive Mobile Design',
    description:
      'Mobile-first designs that ensure your website looks and functions flawlessly across all devices and screen sizes.',
  },
  {
    icon: <LineChart className="h-8 w-8" />,
    title: 'Digital Marketing',
    description:
      'Strategic digital marketing campaigns that attract, engage, and convert your target audience into loyal customers.',
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: 'Fast Performance',
    description:
      'Lightning-fast websites optimized for speed to improve user experience and boost conversion rates.',
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Security & Maintenance',
    description:
      'Robust security measures and regular maintenance to keep your website secure, up-to-date, and performing optimally.',
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: 'E-Commerce Solutions',
    description:
      'Powerful e-commerce platforms that enable you to sell your products or services online with ease and efficiency.',
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: 'Custom Web Applications',
    description:
      'Tailor-made web applications that streamline your business processes and enhance productivity.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We offer a comprehensive range of web development and digital marketing services to help your business thrive online.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={0.1 * index} direction="up">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100 dark:border-gray-700">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}