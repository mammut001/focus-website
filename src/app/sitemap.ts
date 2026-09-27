import type { MetadataRoute } from 'next';
import { LOCALES, SITE_URL } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: '', priority: 1 },
    { path: '/changelog', priority: 0.5 },
  ];
  return pages.flatMap(({ path, priority }) =>
    LOCALES.map((lang) => ({
      url: `${SITE_URL}/${lang}${path}/`,
      changeFrequency: 'weekly' as const,
      priority,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [l === 'zh' ? 'zh-CN' : l, `${SITE_URL}/${l}${path}/`])
        ),
      },
    }))
  );
}
