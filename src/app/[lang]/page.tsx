import type { Metadata } from 'next';
import MovedRedirect, { movedUrl } from '@/components/MovedRedirect';
import type { Locale } from '@/lib/site';

export function generateMetadata({ params: { lang } }: { params: { lang: Locale } }): Metadata {
    return {
        robots: { index: false, follow: true },
        alternates: { canonical: movedUrl(`/${lang}`) },
    };
}

export default function Home({ params: { lang } }: { params: { lang: Locale } }) {
    return <MovedRedirect to={movedUrl(`/${lang}`)} />;
}
