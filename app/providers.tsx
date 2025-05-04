"use client";

import { ReactNode } from 'react';
import Analytics from '@/components/shared/Analytics';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Analytics />
    </>
  );
}