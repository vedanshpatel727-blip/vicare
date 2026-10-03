import { useState, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import AboutSection from '@/components/AboutSection';
import DoctorSection from '@/components/DoctorSection';
import FeaturedTreatments from '@/components/FeaturedTreatments';
import ServicesOverview from '@/components/ServicesOverview';
import TreatmentCategory from '@/components/TreatmentCategory';
import WhyVicare from '@/components/WhyVicare';
import ResultsSection from '@/components/ResultsSection';
import Gallery from '@/components/Gallery';
import InstagramSection from '@/components/InstagramSection';
import Testimonials from '@/components/Testimonials';
import ClinicExperience from '@/components/ClinicExperience';
import CTASection from '@/components/CTASection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import MobileBottomBar from '@/components/MobileBottomBar';
import TreatmentDetail from '@/components/TreatmentDetail';
import { treatments, Treatment } from '@/data/siteContent';

function App() {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);

  const handleSelectById = useCallback((id: string) => {
    const t = treatments.find((t) => t.id === id);
    if (t) setSelectedTreatment(t);
  }, []);

  const handleClose = useCallback(() => setSelectedTreatment(null), []);

  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <AboutSection />
        <DoctorSection />
        <FeaturedTreatments onSelectTreatment={handleSelectById} />
        <ServicesOverview />
        <TreatmentCategory onSelectTreatment={setSelectedTreatment} />
        <WhyVicare />
        <ResultsSection />
        <Gallery />
        <InstagramSection />
        <Testimonials />
        <ClinicExperience />
        <CTASection />
        <BlogSection />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
      <MobileBottomBar />
      <TreatmentDetail treatment={selectedTreatment} onClose={handleClose} />
    </div>
  );
}

export default App;
