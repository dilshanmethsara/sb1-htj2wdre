"use client";

import React, { useRef, useEffect, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  threshold?: number;
  duration?: number;
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  threshold = 0.1,
  duration = 0.5,
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [threshold]);

  // Set initial and animated styles based on direction
  let initialStyles = {};
  let animatedStyles = {};

  switch (direction) {
    case 'up':
      initialStyles = { opacity: 0, transform: 'translateY(30px)' };
      animatedStyles = { opacity: 1, transform: 'translateY(0)' };
      break;
    case 'down':
      initialStyles = { opacity: 0, transform: 'translateY(-30px)' };
      animatedStyles = { opacity: 1, transform: 'translateY(0)' };
      break;
    case 'left':
      initialStyles = { opacity: 0, transform: 'translateX(30px)' };
      animatedStyles = { opacity: 1, transform: 'translateX(0)' };
      break;
    case 'right':
      initialStyles = { opacity: 0, transform: 'translateX(-30px)' };
      animatedStyles = { opacity: 1, transform: 'translateX(0)' };
      break;
    case 'none':
      initialStyles = { opacity: 0 };
      animatedStyles = { opacity: 1 };
      break;
  }

  const style = isVisible
    ? {
        ...animatedStyles,
        transition: `all ${duration}s ease-out ${delay}s`,
      }
    : {
        ...initialStyles,
        transition: 'none',
      };

  return (
    <div
      ref={sectionRef}
      className={cn(className)}
      style={style}
    >
      {children}
    </div>
  );
}