import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductStatement from '@/components/ProductStatement';
import ProductFeature from '@/components/ProductFeature';
import FeatureGrid from '@/components/FeatureGrid';
import HowItWorks from '@/components/HowItWorks';
import ScreenshotShowcase from '@/components/ScreenshotShowcase';
import DownloadCTA from '@/components/DownloadCTA';
import Footer from '@/components/Footer';
import { getDictionary } from '../dictionaries';

export default async function Home({ params: { lang } }: { params: { lang: 'en' | 'fr' | 'zh' } }) {
    const dict = await getDictionary(lang);

    return (
        <main className="min-h-screen bg-bg text-text-primary">
            <Navbar dict={dict.navbar} />
            <Hero dict={dict.hero} />
            <ProductStatement dict={dict.productStatement} />
            <ProductFeature dict={dict.features} />
            <FeatureGrid dict={dict.features} />
            <HowItWorks dict={dict.howItWorks} />
            <ScreenshotShowcase dict={dict.gallery} />
            <DownloadCTA dict={dict.download} />
            <Footer dict={dict.footer} />
        </main>
    );
}
