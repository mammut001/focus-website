const DEFAULT_UMAMI_WEBSITE_ID = '20bee243-0db5-4248-976e-22273e5815a9';

export const UMAMI_SCRIPT_URL = 'https://french.paytonpei.top/umami/script.js';
export const UMAMI_HOST_URL = 'https://french.paytonpei.top/umami';
export const UMAMI_DOMAINS = 'mammut001.github.io';

export function getUmamiWebsiteId(): string {
    const fromEnv = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
    if (fromEnv === '') return '';
    if (fromEnv !== undefined) return fromEnv;
    return DEFAULT_UMAMI_WEBSITE_ID;
}

export function isAnalyticsEnabled(): boolean {
    if (process.env.NODE_ENV !== 'production') return false;
    return getUmamiWebsiteId().length > 0;
}

export function appStoreTrackingAttrs(
    placement: string,
    lang: string,
    url: string,
): Record<string, string> {
    if (!isAnalyticsEnabled() || url === '#') return {};
    return {
        'data-umami-event': 'app_store_click',
        'data-umami-event-placement': placement,
        'data-umami-event-lang': lang,
    };
}
