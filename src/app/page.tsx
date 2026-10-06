import type { Metadata } from 'next';
import { BASE_PATH } from '@/lib/basePath';

export const metadata: Metadata = {
  title: 'LifeMint',
  robots: { index: false, follow: true },
};

// Pick the visitor's language before the redirect so /zh and /fr users skip a hop.
const redirectScript = `(function(){var l=(navigator.languages&&navigator.languages[0]||navigator.language||'en').toLowerCase();var c='en';if(l.indexOf('zh')===0)c='zh';else if(l.indexOf('ja')===0)c='ja';else if(l.indexOf('ko')===0)c='ko';else if(l.indexOf('fr')===0)c='fr';location.replace('${BASE_PATH}/'+c+'/'+location.hash);})();`;

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
