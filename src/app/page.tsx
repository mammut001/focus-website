import type { Metadata } from 'next';
import { BASE_PATH } from '@/lib/basePath';

export const metadata: Metadata = {
  title: 'LifeMint',
  robots: { index: false, follow: true },
};

// Pick the visitor's language before the redirect so /zh and /fr users skip a hop.
const redirectScript = `(function(){var l=(navigator.languages&&navigator.languages[0]||navigator.language||'en').toLowerCase();var c=l.indexOf('zh')===0?'zh':l.indexOf('fr')===0?'fr':'en';location.replace('${BASE_PATH}/'+c+'/'+location.hash);})();`;

export default function RootPage() {
  return (
    <html lang="en">
      <head>
        <noscript>
          <meta httpEquiv="refresh" content={`0; url=${BASE_PATH}/en/`} />
        </noscript>
        <link rel="canonical" href={`${BASE_PATH}/en/`} />
        <script dangerouslySetInnerHTML={{ __html: redirectScript }} />
      </head>
      <body style={{ background: '#f3f6ef' }}>
        <a href={`${BASE_PATH}/en/`}>LifeMint</a>
      </body>
    </html>
  );
}
