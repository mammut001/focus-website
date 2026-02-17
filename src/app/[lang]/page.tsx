import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorks from '@/components/HowItWorks';
import ScreenshotGallery from '@/components/ScreenshotGallery';
import StatsCounter from '@/components/StatsCounter';
import DownloadCTA from '@/components/DownloadCTA';
import Footer from '@/components/Footer';
import { getDictionary } from '../dictionaries';

export default async function Home({ params: { lang } }: { params: { lang: 'en' | 'fr' | 'zh' } }) {
    const dict = await getDictionary(lang);

    return (
        <main className="min-h-screen bg-[hsl(225,30%,4%)] text-white overflow-hidden selection:bg-indigo-500/30 selection:text-indigo-200">
            <Navbar dict={dict.navbar} />
            <HeroSection dict={dict.hero} />
            <FeaturesSection dict={dict.features} />
            <HowItWorks dict={dict.howItWorks} />
            <ScreenshotGallery dict={dict.gallery} />
            <StatsCounter dict={dict.stats} />
            <DownloadCTA dict={dict.download} />
            <Footer dict={dict.footer} />
        </main>
    );
}
