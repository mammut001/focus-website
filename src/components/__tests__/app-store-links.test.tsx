import { afterEach, describe, expect, it, mock } from 'bun:test';
import { renderToStaticMarkup } from 'react-dom/server';
import { en } from '@/dictionaries/en';

mock.module('next/navigation', () => ({
    useParams: () => ({ lang: 'en' }),
    usePathname: () => '/en/',
    useRouter: () => ({ push: () => {} }),
}));

import Hero from '../Hero';
import DownloadCTA from '../DownloadCTA';
import Footer from '../Footer';

const APP_STORE_URL = 'https://apps.apple.com/us/app/focus-mint-focus-timer-study/id6759029810';

describe('App Store tracking markup', () => {
    const env = process.env;

    afterEach(() => {
        process.env = { ...env };
    });

    it('renders data-umami-event on hero and download links in production', () => {
        process.env.NODE_ENV = 'production';
        delete process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;

        const heroHtml = renderToStaticMarkup(<Hero dict={en.hero} lang="zh" />);
        expect(heroHtml).toContain('data-umami-event="app_store_click"');
        expect(heroHtml).toContain('data-umami-event-placement="hero"');
        expect(heroHtml).toContain('data-umami-event-lang="zh"');

        const ctaHtml = renderToStaticMarkup(<DownloadCTA dict={en.download} lang="zh" />);
        expect(ctaHtml).toContain('data-umami-event-placement="download_cta"');
    });

    it('renders footer analytics copy when enabled', () => {
        process.env.NODE_ENV = 'production';
        delete process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;

        const html = renderToStaticMarkup(<Footer dict={en.footer} />);
        expect(html).toContain('cookie-free analytics');
    });
});
