import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductCredibility from '@/components/ProductCredibility';
import InteractiveTimerDemo from '@/components/InteractiveTimerDemo';
import ProductStory from '@/components/ProductStory';
import AppleEcosystemSection from '@/components/AppleEcosystemSection';
import ProductGallery from '@/components/ProductGallery';
import SupportingFeatures from '@/components/SupportingFeatures';
import DownloadCTA from '@/components/DownloadCTA';
import Footer from '@/components/Footer';
import { getDictionary } from '../dictionaries';

export default async function Home({ params: { lang } }: { params: { lang: 'en' | 'fr' | 'zh' } }) {
    const dict = await getDictionary(lang);

    return (
        <main className="min-h-screen bg-bg text-text-primary">
            <Navbar dict={dict.navbar} />
            <Hero dict={dict.hero} />
            <ProductCredibility />
            <InteractiveTimerDemo dict={dict.timerDemo} />
            <ProductStory dict={dict.story} />
            <AppleEcosystemSection dict={dict.ecosystem} />
            <ProductGallery dict={dict.productGallery} />
            <SupportingFeatures dict={dict.supporting} />
            <DownloadCTA dict={dict.download} />
            <Footer dict={dict.footer} />
        </main>
    );
}
