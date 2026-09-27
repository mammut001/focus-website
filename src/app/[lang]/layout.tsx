import '../globals.css';
import type { Metadata, Viewport } from 'next';
import { getDictionary } from '../dictionaries';
import { asset } from '@/lib/basePath';
import { LOCALES, SITE_URL, localeAlternates, ogLocale, type Locale } from '@/lib/site';

export async function generateStaticParams() {
    return LOCALES.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
    themeColor: '#f3f6ef',
    width: 'device-width',
    initialScale: 1,
};

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }): Promise<Metadata> {
    const dict = await getDictionary(lang);
    return {
        metadataBase: new URL(`${SITE_URL}/`),
        title: dict.metadata.title,
        description: dict.metadata.description,
        applicationName: 'LifeMint',
        alternates: localeAlternates(lang),
        icons: {
            icon: asset('/favicon.png'),
            apple: asset('/apple-touch-icon.png'),
        },
        itunes: { appId: '6759029810' },
        openGraph: {
            type: 'website',
            siteName: 'LifeMint',
            url: `/${lang}/`,
            locale: ogLocale(lang),
            title: dict.metadata.ogTitle,
            description: dict.metadata.ogDescription,
            images: [{ url: 'og-image.jpg', width: 1200, height: 630, alt: 'LifeMint' }],
        },
        twitter: {
            card: 'summary_large_image',
            title: dict.metadata.ogTitle,
            description: dict.metadata.ogDescription,
            images: ['og-image.jpg'],
        },
    };
}

export default function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { lang: string };
}) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'MobileApplication',
        name: 'LifeMint',
        operatingSystem: 'iOS, iPadOS, watchOS',
        applicationCategory: 'ProductivityApplication',
        url: `${SITE_URL}/${params.lang}/`,
        image: `${SITE_URL}/og-image.jpg`,
        downloadUrl: 'https://apps.apple.com/us/app/focus-mint-focus-timer-study/id6759029810',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    };

    return (
        <html lang={params.lang === 'zh' ? 'zh-CN' : params.lang}>
            <body className="antialiased">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                {children}
            </body>
        </html>
    );
}
