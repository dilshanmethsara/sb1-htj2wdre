import React from 'react';
import { Check, Users, Code, Lightbulb } from 'lucide-react';
import AnimatedSection from '../shared/AnimatedSection';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About <span className="text-blue-600">Our Company</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We're a team of passionate web developers and digital strategists dedicated to helping businesses thrive in the digital landscape.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg" 
                  alt="Our team collaborating on a project" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Stats overlay */}
              <div className="absolute -bottom-10 -right-10 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-blue-600">250+</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-blue-600">100%</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-blue-600">15+</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-blue-600">24/7</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Support</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.3}>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                We Create Digital Solutions That Drive Results
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Founded in 2010, Modern Business has been at the forefront of digital innovation, helping businesses of all sizes establish and grow their online presence. Our team combines technical expertise with strategic thinking to deliver solutions that not only look great but also perform exceptionally well.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { 
                    icon: <Users className="text-blue-600" size={24} />, 
                    title: "Client-Focused", 
                    description: "We prioritize your business goals and user needs in every project." 
                  },
                  { 
                    icon: <Code className="text-blue-600" size={24} />, 
                    title: "Technical Excellence", 
                    description: "Our solutions are built with clean code and best practices." 
                  },
                  { 
                    icon: <Lightbulb className="text-blue-600" size={24} />, 
                    title: "Innovative Approach", 
                    description: "We embrace new technologies and creative problem-solving." 
                  },
                  { 
                    icon: <Check className="text-blue-600" size={24} />, 
                    title: "Proven Results", 
                    description: "Our work consistently delivers measurable business outcomes." 
                  }
                ].map((item, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}