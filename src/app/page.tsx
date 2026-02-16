import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorks from '@/components/HowItWorks';
import ScreenshotGallery from '@/components/ScreenshotGallery';
import StatsCounter from '@/components/StatsCounter';
import DownloadCTA from '@/components/DownloadCTA';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen gradient-bg">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <ScreenshotGallery />
      <StatsCounter />
      <DownloadCTA />
      <Footer />
    </main>
  );
}
