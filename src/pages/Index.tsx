import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import HowItWorks from '@/components/HowItWorks';
import BlogSection from '@/components/BlogSection';
import SEO from '@/components/SEO';
import ScrollToTop from '@/components/ScrollToTop';
import { useEffect } from 'react';

const Index = () => {
  // Smooth scroll to section when hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Handle initial hash on page load
    handleHashChange();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO />
      <Header />
      <main className="flex-grow">
        <Hero />
        <TrustStrip />
        <Services />
        <WhyChooseUs />
        <HowItWorks />
        <Testimonials />
        <BlogSection />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
