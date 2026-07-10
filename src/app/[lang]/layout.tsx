import '../globals.css';
import { getDictionary } from '../dictionaries';

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
        <html lang={params.lang}>
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
