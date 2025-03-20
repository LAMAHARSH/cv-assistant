
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import UploadSection from '@/components/UploadSection';
import ScoresSection from '@/components/ScoresSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';

const Index = () => {
  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        const id = target.getAttribute('href');
        const element = document.querySelector(id || '');
        if (element) {
          e.preventDefault();
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <HeroSection />
      
      <AnimatedSection>
        <UploadSection />
      </AnimatedSection>
      
      <AnimatedSection animationType="fade-in-right">
        <ScoresSection />
      </AnimatedSection>
      
      <AnimatedSection animationType="fade-in-left">
        <AboutSection />
      </AnimatedSection>
      
      <AnimatedSection animationType="fade-in-up">
        <ContactSection />
      </AnimatedSection>
      
      <Footer />
    </div>
  );
};

export default Index;
