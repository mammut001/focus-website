/**
 * The LifeMint site moved to https://cv.paytonpei.top/lifemint. Every page here sends the visitor to its new address at
 * once, keeping any #section, and falls back to a meta refresh and a plain link without JavaScript.
 */
export const NEW_SITE = 'https://cv.paytonpei.top/lifemint';

export function movedUrl(path = '') {
    return `${NEW_SITE}${path}`;
}

export default function MovedRedirect({ to }: { to: string }) {
    const script = `location.replace(${JSON.stringify(to)}+location.hash);`;
    return (
        <main style={{ maxWidth: 560, margin: '0 auto', padding: '96px 24px', fontFamily: 'system-ui, sans-serif' }}>
            <script dangerouslySetInnerHTML={{ __html: script }} />
            <meta httpEquiv="refresh" content={`0; url=${to}`} />
            <p>
                LifeMint has moved to <a href={to}>{to}</a>
            </p>
        </main>
    );
}
