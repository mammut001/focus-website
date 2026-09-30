import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductCredibility from '@/components/ProductCredibility';
import LifeRingSection from '@/components/LifeRingSection';
import InteractiveTimerDemo from '@/components/InteractiveTimerDemo';
import PaycheckSection from '@/components/PaycheckSection';
import ProductStory from '@/components/ProductStory';
import AppleEcosystemSection from '@/components/AppleEcosystemSection';
import ProductGallery from '@/components/ProductGallery';
import FeatureExplorer from '@/components/FeatureExplorer';
import SupportingFeatures from '@/components/SupportingFeatures';
import ProSection from '@/components/ProSection';
import DownloadCTA from '@/components/DownloadCTA';
import Footer from '@/components/Footer';
import HashScroll from '@/components/HashScroll';
import { getDictionary } from '../dictionaries';

export default async function Home({ params: { lang } }: { params: { lang: 'en' | 'fr' | 'zh' } }) {
    const dict = await getDictionary(lang);

    return (
        <main className="min-h-screen bg-bg text-text-primary">
            <HashScroll />
            <Navbar dict={dict.navbar} />
            <Hero dict={dict.hero} />
            <ProductCredibility dict={dict.credibility} />
            <LifeRingSection dict={dict.ring} />
            <InteractiveTimerDemo dict={dict.timerDemo} />
            <PaycheckSection dict={dict.paycheck} />
            <ProductStory dict={dict.story} />
            <AppleEcosystemSection dict={dict.ecosystem} />
            <ProductGallery dict={dict.productGallery} />
            <FeatureExplorer dict={dict.explorer} />
            <SupportingFeatures dict={dict.supporting} />
            <ProSection dict={dict.pro} />
            <DownloadCTA dict={dict.download} />
            <Footer dict={dict.footer} />
        </main>
    );
}
