import type { Metadata } from 'next';
import { NEW_SITE } from '@/components/MovedRedirect';

export const metadata: Metadata = {
  title: 'LifeMint',
  robots: { index: false, follow: true },
};

// The site moved to the cv site, whose /lifemint picks the visitor's language itself.
const redirectScript = `location.replace(${JSON.stringify(NEW_SITE)}+location.hash);`;

export default function RootPage() {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={NEW_SITE} />
        <script dangerouslySetInnerHTML={{ __html: redirectScript }} />
        <meta httpEquiv="refresh" content={`0; url=${NEW_SITE}`} />
      </head>
      <body style={{ background: '#f3f6ef' }}>
        <a href={NEW_SITE}>LifeMint</a>
      </body>
    </html>
  );
}
