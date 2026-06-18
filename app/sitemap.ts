import type { MetadataRoute } from 'next';
import { siteConfig, posts, resources } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticRoutes = [
    '',
    '/metodo',
    '/servicos',
    '/casos',
    '/sobre',
    '/diagnostico',
    '/diario',
    '/recursos',
    '/privacidade',
    '/termos',
  ];

  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${base}${route}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.7,
    })),
    ...posts.map((p) => ({
      url: `${base}/diario/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    })),
    ...resources.map((r) => ({
      url: `${base}/recursos/${r.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
