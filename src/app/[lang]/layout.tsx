import { Inter } from 'next/font/google';
import '../globals.css';
import { getDictionary } from '../dictionaries';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

// Generate static params for export
export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'fr' }, { lang: 'zh' }];
}

export async function generateMetadata({ params: { lang } }: { params: { lang: 'en' | 'fr' | 'zh' } }) {
    const dict = await getDictionary(lang);
    return {
        title: dict.metadata.title,
        description: dict.metadata.description,
        openGraph: {
            title: dict.metadata.ogTitle,
            description: dict.metadata.ogDescription,
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
    return (
        <html lang={params.lang} className="dark">
            <body className={`${inter.variable} antialiased font-sans bg-[hsl(225,30%,4%)] text-white overflow-x-hidden selection:bg-indigo-500/30 selection:text-indigo-200`}>
                {children}
            </body>
        </html>
    );
}
