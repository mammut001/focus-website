'use client';

import { useEffect, useState } from 'react';
import type { Dictionary } from '@/dictionaries/en';

export default function ProductStatement({ dict }: { dict: Dictionary['productStatement'] }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="product-statement" className="py-28 md:py-36 px-6">
      <div className={`max-w-[850px] mx-auto text-center transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <p className="text-[28px] sm:text-[34px] lg:text-[42px] font-medium leading-[1.2] text-text-primary">
          {dict.line.split('{brand}')[0]}
          <span className="text-brand">{dict.brandWord}</span>
          {dict.line.split('{brand}')[1]}
        </p>
      </div>
    </section>
  );
}
