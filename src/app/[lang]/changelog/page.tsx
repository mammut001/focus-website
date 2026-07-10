import { getDictionary } from '@/app/dictionaries';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChangelogViewer from '@/components/ChangelogViewer';

export default async function ChangelogPage({ params: { lang } }: { params: { lang: 'en' | 'fr' | 'zh' } }) {
    const dict = await getDictionary(lang);

    return (
         <main className="min-h-screen bg-bg text-text-primary">
            <Navbar dict={dict.navbar} />
            <div className="pt-24 pb-20">
                 <ChangelogViewer dict={dict.changelogPage} />
            </div>
            <Footer dict={dict.footer} />
        </main>
    );
}
