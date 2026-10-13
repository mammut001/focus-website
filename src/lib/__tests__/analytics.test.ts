import { afterEach, describe, expect, it } from 'bun:test';
import {
    appStoreTrackingAttrs,
    getUmamiWebsiteId,
    isAnalyticsEnabled,
} from '../analytics';

const APP_STORE_URL = 'https://apps.apple.com/us/app/focus-mint-focus-timer-study/id6759029810';

describe('analytics', () => {
    const env = process.env;

    afterEach(() => {
        process.env = { ...env };
    });

    it('disables analytics when website id is empty', () => {
        process.env.NODE_ENV = 'production';
        process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID = '';
        expect(getUmamiWebsiteId()).toBe('');
        expect(isAnalyticsEnabled()).toBe(false);
        expect(appStoreTrackingAttrs('hero', 'en', APP_STORE_URL)).toEqual({});
    });

    it('adds umami attributes for app store links when enabled', () => {
        process.env.NODE_ENV = 'production';
        delete process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
        expect(isAnalyticsEnabled()).toBe(true);
        expect(appStoreTrackingAttrs('hero', 'zh', APP_STORE_URL)).toEqual({
            'data-umami-event': 'app_store_click',
            'data-umami-event-placement': 'hero',
            'data-umami-event-lang': 'zh',
        });
    });

    it('skips umami attributes for placeholder links', () => {
        process.env.NODE_ENV = 'production';
        delete process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
        expect(appStoreTrackingAttrs('download_cta', 'en', '#')).toEqual({});
    });
});
