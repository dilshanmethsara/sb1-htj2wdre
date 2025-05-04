"use client";

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { initGA, trackPageView } from '@/lib/analytics';

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    // Initialize Google Analytics
    const TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;
    if (TRACKING_ID) {
      initGA(TRACKING_ID);
    }
  }, []);
  
  useEffect(() => {
    // Track page views on route change
    if (pathname) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      trackPageView(url);
    }
  }, [pathname, searchParams]);
  
  return null;
}