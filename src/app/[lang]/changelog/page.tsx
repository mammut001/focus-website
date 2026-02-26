import { getDictionary } from '@/app/dictionaries';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChangelogViewer from '@/components/ChangelogViewer';

export default async function ChangelogPage({ params: { lang } }: { params: { lang: 'en' | 'fr' | 'zh' } }) {
    const dict = await getDictionary(lang);

    return (
        <main className="min-h-screen bg-[hsl(225,30%,4%)] text-white overflow-hidden selection:bg-indigo-500/30 selection:text-indigo-200">
            <Navbar dict={dict.navbar} />
            <div className="pt-24 pb-20">
                 <ChangelogViewer dict={dict.changelogPage} />
            </div>
            <Footer dict={dict.footer} />
        </main>
    );
}
