'use client';

import { screenshots } from '@/lib/assets';
import { asset } from '@/lib/basePath';

interface PhoneScreenshotProps {
  src: keyof typeof screenshots.iphone;
  alt?: string;
  className?: string;
  priority?: boolean;
}

export default function PhoneScreenshot({ src, alt = '', className = '', priority = false }: PhoneScreenshotProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="aspect-[9/19.5] bg-surface rounded-[28px] lg:rounded-[32px] shadow-[0_40px_90px_rgba(20,45,31,0.14),0_10px_30px_rgba(20,45,31,0.08)] overflow-hidden border border-border">
        <img
          src={screenshots.iphone[src]}
          alt={alt}
          width={720}
          height={1560}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          className="w-full h-full object-cover"
          sizes="(max-width: 640px) 320px, (max-width: 1024px) 400px, 720px"
        />
      </div>
    </div>
  );
}

interface WatchScreenshotProps {
  src: keyof typeof screenshots.watch;
  alt?: string;
  className?: string;
}

export function WatchScreenshot({ src, alt = '', className = '' }: WatchScreenshotProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="w-[90px] sm:w-[100px] lg:w-[110px] bg-[#e8eae6] rounded-[1.6rem] lg:rounded-[1.8rem] border border-border shadow-[0_20px_50px_rgba(20,45,31,0.12),0_6px_16px_rgba(20,45,31,0.06)] overflow-hidden">
        <img
          src={screenshots.watch[src]}
          alt={alt}
          width={400}
          height={476}
          loading="lazy"
          className="w-full h-full object-cover"
          sizes="(max-width: 640px) 90px, 110px"
        />
      </div>
    </div>
  );
}

interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
}

export function PhoneFrame({ children, className = '' }: PhoneFrameProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="aspect-[9/19.5] bg-surface rounded-[28px] lg:rounded-[32px] shadow-[0_40px_90px_rgba(20,45,31,0.14),0_10px_30px_rgba(20,45,31,0.08)] overflow-hidden border border-border">
        {children}
      </div>
    </div>
  );
}

